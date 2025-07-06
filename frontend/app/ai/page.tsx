"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import ReactMarkdown from "react-markdown";

interface Message {
  sender: "user" | "ai";
  message: string;
}

interface Conversation {
  id: string;
  prompt?: string;
  created_at: string;
}

export default function AgentaChat() {
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (!session || error) {
        router.push("/");
        return;
      }
      setUserId(session.user.id);
    };
    fetchUser();
  }, [router]);

  const fetchMessages = async (convId: string) => {
    try {
      const res = await fetch(`https://agenta-aaditya-salgaonkar-maximally.onrender.com/api/messages/${convId}`);
      const data = await res.json();
      if (data.success) {
        const formattedMessages: Message[] = data.messages.map((msg: Message) => ({
          sender: msg.sender,
          message: msg.message,
        }));
        setMessages(formattedMessages);
      }
    } catch {
      toast.error("Failed to load chat history");
    }
  };

  const fetchConversations = useCallback(async () => {
    if (!userId) return;
    try {
      const res = await fetch(`https://agenta-aaditya-salgaonkar-maximally.onrender.com/api/conversation/list/${userId}`);
      const data = await res.json();
      if (data.success) setConversations(data.conversations);
    } catch {
      toast.error("Failed to load conversations");
    }
  }, [userId]);

  useEffect(() => {
    if (userId) fetchConversations();
  }, [userId, fetchConversations]);

  const startNewConversation = async () => {
    if (!userId) return;
    try {
      const res = await fetch("https://agenta-aaditya-salgaonkar-maximally.onrender.com/api/conversation/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      const data = await res.json();
      if (data.conversationId) {
        setConversationId(data.conversationId);
        setMessages([]);
        await fetchConversations();
      }
    } catch {
      toast.error("Failed to start new conversation");
    }
  };

  const deleteConversation = async (id: string) => {
    try {
      const res = await fetch(`https://agenta-aaditya-salgaonkar-maximally.onrender.com/api/conversation/delete/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");

      if (id === conversationId) {
        setConversationId(null);
        setMessages([]);
      }
      await fetchConversations();
    } catch {
      toast.error("Failed to delete conversation");
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || !conversationId || !userId) return;

    const userMessage: Message = { sender: "user", message: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://agenta-aaditya-salgaonkar-maximally.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversationId,
          prompt: userMessage.message,
          userId,
        }),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message);

      const aiMessage: Message = { sender: "ai", message: data.aiResponse };
      setMessages((prev) => [...prev, aiMessage]);

      // Update title on first user message
      if (messages.length === 0) {
        await fetch(`https://agenta-aaditya-salgaonkar-maximally.onrender.com/api/conversation/update-title/${conversationId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: userMessage.message }),
        });
        await fetchConversations();
      }
    } catch {
      toast.error("AI failed to respond");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl pb-7 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2]">
        Copilot
      </h1>

      <div className="w-full max-w-6xl bg-[#131A26] rounded-3xl shadow-2xl p-6 flex h-[80vh] border border-[#1F2937]">
        {/* Sidebar */}
        <div className="w-1/4 pr-4 border-r border-white/10 overflow-y-auto">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-sm text-[#CBD5E1] font-semibold uppercase">Chat History</h2>
            <button onClick={startNewConversation} className="text-xs text-cyan-400 hover:underline">
              + New
            </button>
          </div>
          <ul className="space-y-3 text-sm">
            {conversations.map((conv) => (
              <li key={conv.id} className="flex justify-between items-center">
                <div
                  onClick={() => {
                    setConversationId(conv.id);
                    fetchMessages(conv.id);
                  }}
                  className={`flex-1 p-3 rounded-xl font-medium cursor-pointer transition-all ${
                    conv.id === conversationId
                      ? "bg-gradient-to-r from-[#00FFC6] to-[#4DC3FF] text-black"
                      : "hover:bg-white/10 text-white"
                  }`}
                >
                  {conv.prompt?.slice(0, 40) || "New Chat"}
                </div>
                <button
                  onClick={() => deleteConversation(conv.id)}
                  className="text-red-400 hover:text-red-600 ml-2 text-sm"
                  title="Delete"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Panel */}
        <div className="flex-1 flex flex-col pl-6">
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.length === 0 && !loading && (
              <div className="text-center text-gray-500 mt-10 text-lg italic">
                Start chatting with Agenta AI ✨
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-3 p-4 rounded-2xl max-w-[80%] ${
                  msg.sender === "user"
                    ? "ml-auto bg-gradient-to-br from-[#00FFC6] to-[#4DC3FF] text-black font-medium"
                    : "mr-auto bg-[#1F2937] text-white/90"
                }`}
              >
                <strong>{msg.sender === "user" ? "You" : "Agenta"}:</strong>{" "}
                <ReactMarkdown>{msg.message}</ReactMarkdown>
              </div>
            ))}
            {loading && (
              <div className="flex justify-center items-center p-4">
                <Loading />
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-white/20 bg-[#0F172A] text-white placeholder:text-gray-400 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#00FFC6]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading || !conversationId}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !conversationId}
              className="bg-gradient-to-r from-[#00FFC6] to-[#4DC3FF] text-black px-6 py-3 rounded-xl font-bold hover:brightness-110 disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
