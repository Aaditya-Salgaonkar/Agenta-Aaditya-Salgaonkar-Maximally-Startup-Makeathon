"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import toast from "react-hot-toast";
import axios from "axios";
import { FaGithub } from "react-icons/fa";
import {  SiNetlify } from "react-icons/si";

// Types
interface NetlifyDeployResponse {
  netlify_url: string;
}
interface FileContent {
  path: string;
  content: string;
}
interface GithubTokenResponse {
  connected: boolean;
}
interface NetlifyTokenResponse {
  connected: boolean;
}
interface MVP {
  id: string;
  name: string;
  prompt: string;
  created_at: string;
  files: FileContent[];
  github_pushed: boolean;
  netlify_deployed?: boolean;
  netlify_url?: string;
}

interface SupabaseMVP {
  id: string;
  name: string;
  prompt: string;
  created_at: string;
  files: string | FileContent[];
  github_pushed: boolean;
  netlify_deployed?: boolean;
  netlify_url?: string;
}

export default function DeploymentsPage() {
  const [mvps, setMvps] = useState<MVP[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchMVPs() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/");
        return;
      }

      const userId = session.user.id;
      const { data, error } = await supabase
        .from("mvps")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) {
        toast.error("Error fetching MVPs.");
        return;
      }

      const parsedData = data.map((mvp: SupabaseMVP): MVP => ({
        id: mvp.id,
        name: mvp.name,
        prompt: mvp.prompt,
        created_at: mvp.created_at,
        github_pushed: mvp.github_pushed || false,
        netlify_deployed: mvp.netlify_deployed || false,
        netlify_url: mvp.netlify_url || "",
        files:
          typeof mvp.files === "string"
            ? JSON.parse(mvp.files)
            : mvp.files || [],
      }));

      setMvps(parsedData);
      setLoading(false);
    }

    fetchMVPs();
  }, [router]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0B0F19] via-[#1e293b] to-[#0B0F19] text-white p-10 px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-7 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2]">
          Deployments Center
        </h1>

        {mvps.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            No MVPs ready for deployment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {mvps.map((mvp) => (
              <MVPCard key={mvp.id} mvp={mvp} setMvps={setMvps} mvps={mvps} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface MVPCardProps {
  mvp: MVP;
  setMvps: React.Dispatch<React.SetStateAction<MVP[]>>;
  mvps: MVP[];
}

const MVPCard: React.FC<MVPCardProps> = ({ mvp, setMvps, mvps }) => {
  const [isGithubConnected, setIsGithubConnected] = useState(false);
  const [isNetlifyConnected, setIsNetlifyConnected] = useState(false);

  useEffect(() => {
    checkGithubConnection();
    checkNetlifyConnection();
  }, []);

  const checkGithubConnection = async () => {
    try {
      const res = await axios.get<GithubTokenResponse>("https://agenta-aaditya-salgaonkar-maximally.onrender.com/api/github/token", { withCredentials: true });
      setIsGithubConnected(res.data.connected);
    } catch {
      setIsGithubConnected(false);
    }
  };

  const checkNetlifyConnection = async () => {
    try {
      const res = await axios.get<NetlifyTokenResponse>("https://agenta-aaditya-salgaonkar-maximally.onrender.com/api/netlify/token", { withCredentials: true });
      setIsNetlifyConnected(res.data.connected);
    } catch {
      setIsNetlifyConnected(false);
    }
  };

  const connectGithub = () => {
    window.location.href = "https://agenta-aaditya-salgaonkar-maximally.onrender.com/api/github/login";
  };

const connectNetlify = () => {
    window.location.href = "https://agenta-aaditya-salgaonkar-maximally.onrender.com/api/netlify/login";
};


  const handlePushGithub = async () => {
    if (!isGithubConnected) {
      toast.error("Please connect GitHub first.");
      return;
    }

    const repoName = prompt("Enter repository name:");
    const description = prompt("Enter repository description:") || "";

    if (!repoName) {
      toast.error("Repository name is required.");
      return;
    }

    try {
      toast.loading("Pushing to GitHub...");
      await axios.post("https://agenta-aaditya-salgaonkar-maximally.onrender.com/api/github/push", {
        repoName,
        description,
        files: mvp.files,
        mvpId: mvp.id,
      }, { withCredentials: true });

      toast.dismiss();
      toast.success("Successfully pushed to GitHub!");

      const updated = mvps.map(item => item.id === mvp.id ? { ...item, github_pushed: true } : item);
      setMvps(updated);
    } catch (err) {
      toast.dismiss();
      console.error(err);
      toast.error("Failed to push to GitHub.");
    }
  };

const handlePushNetlify = async () => {
  if (!isNetlifyConnected) {
    toast.error("Please connect Netlify first.");
    return;
  }

  try {
    toast.loading("Deploying to Netlify...");
    const res = await axios.post<NetlifyDeployResponse>("https://agenta-aaditya-salgaonkar-maximally.onrender.com/api/netlify/deploy", {
      files: mvp.files,
      mvpId: mvp.id,
    }, { withCredentials: true });

    toast.dismiss();
    toast.success("Successfully deployed to Netlify!");

    const newNetlifyUrl = res.data.netlify_url;

    // ✅ Update Supabase after deployment success
    const { error } = await supabase
      .from("mvps")
      .update({
        netlify_deployed: true,
        netlify_url: newNetlifyUrl,
      })
      .eq("id", mvp.id);

    if (error) {
      console.error("Failed to update Supabase:", error);
      toast.error("Failed to update deployment status.");
    } else {
      toast.success("Deployment info saved!");
    }

    // ✅ Update local state too (UI update)
    const updated = mvps.map(item =>
      item.id === mvp.id
        ? { ...item, netlify_deployed: true, netlify_url: newNetlifyUrl }
        : item
    );
    setMvps(updated);
  } catch (err) {
    toast.dismiss();
    console.error(err);
    toast.error("Failed to deploy to Netlify.");
  }
};


return (
  <div className="bg-[#0B0F19] text-white rounded-2xl border border-[#1F2937] shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
    <h2 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2]">
      {mvp.name}
    </h2>
    <p className="text-sm text-[#94A3B8] mb-4">
      Created: {new Date(mvp.created_at).toLocaleString()}
    </p>

    <div className="mb-4">
      <h3 className="text-md font-semibold text-[#F5F7FA] mb-1">Prompt</h3>
      <p className="text-sm text-[#CBD5E1] line-clamp-3">{mvp.prompt}</p>
    </div>

    {mvp.github_pushed && (
      <p className="text-green-400 font-medium mb-2">✅ GitHub push complete</p>
    )}

    {mvp.netlify_deployed && mvp.netlify_url && (
      <a
        href={mvp.netlify_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-[#00FFB2] to-[#4DC3FF] text-center text-white font-semibold py-2 rounded-xl shadow-md hover:brightness-110 transition mb-3"
      >
        🌐 Live on Netlify
      </a>
    )}

    <div className="flex flex-col gap-3 mt-4">
      {!isNetlifyConnected ? (
        <button
          onClick={connectNetlify}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00FFB2] to-[#4DC3FF] text-black font-semibold rounded-xl hover:scale-95 transition duration-300"
        >
          <SiNetlify /> Connect Netlify
        </button>
      ) : (
        <button
          onClick={handlePushNetlify}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00FFB2] to-[#4DC3FF] text-black font-semibold rounded-xl hover:scale-95 transition duration-300"
        >
          <SiNetlify /> Deploy to Netlify
        </button>
      )}

      {!isGithubConnected ? (
        <button
          onClick={connectGithub}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl font-semibold hover:scale-95 transition duration-300"
        >
          <FaGithub /> Connect GitHub
        </button>
      ) : (
        <button
          onClick={handlePushGithub}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl font-semibold hover:scale-95 transition duration-300"
        >
          <FaGithub /> Push to GitHub
        </button>
      )}
    </div>
  </div>
);

};
