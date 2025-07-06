"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { FaArrowLeft, FaUserPlus } from "react-icons/fa";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sanitizeInput = (value: string) => value.trim();

  const handleSignup = useCallback(async () => {
    if (!name || !email || !password) {
      setError("Please enter name, email, and password.");
      return;
    }

    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signUp({
      email: sanitizeInput(email),
      password: sanitizeInput(password),
    });

    if (error) {
      setError("Error creating account: " + error.message);
      setLoading(false);
      return;
    }

    const userId = data?.user?.id;
    if (userId) {
      const { error: insertError } = await supabase
        .from("users")
        .insert([{ id: userId, name: sanitizeInput(name), email: sanitizeInput(email) }]);

      if (insertError) {
        console.error("Error inserting user:", insertError);
        setError("Account created, but failed to save user details.");
        setLoading(false);
        return;
      }
    }

    router.push("/dashboard");
    setLoading(false);
  }, [name, email, password, router]);

  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2] opacity-10 blur-3xl z-0" />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-[#111827] p-10 rounded-3xl shadow-2xl border border-[#1F2937] w-full max-w-md"
      >
        <Link
          href="/"
          className="absolute left-6 top-6 p-2 rounded-full bg-[#1F2937] shadow hover:scale-105 transition"
        >
          <FaArrowLeft className="text-white" />
        </Link>

        <div className="flex justify-center mb-4">
          <div className="p-4 bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2] rounded-full shadow-lg">
            <FaUserPlus className="text-2xl text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2] mb-4">
          Join Agenta
        </h2>

        {error && (
          <div className="text-center text-red-500 text-sm mb-4">{error}</div>
        )}

        <div className="space-y-5">
          <motion.input
            whileFocus={{ scale: 1.03 }}
            className="w-full p-3 bg-[#0F172A] border border-[#334155] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFB2] h-12"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(sanitizeInput(e.target.value))}
          />
          <motion.input
            whileFocus={{ scale: 1.03 }}
            className="w-full p-3 bg-[#0F172A] border border-[#334155] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFB2] h-12"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(sanitizeInput(e.target.value))}
          />
          <motion.input
            whileFocus={{ scale: 1.03 }}
            className="w-full p-3 bg-[#0F172A] border border-[#334155] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFB2] h-12"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(sanitizeInput(e.target.value))}
          />
        </div>

        <button
          onClick={handleSignup}
          disabled={loading}
          className="mt-8 w-full py-3 text-lg font-bold text-white rounded-xl bg-gradient-to-r from-[#7B61FF] to-[#00FFB2] hover:brightness-110 hover:scale-105 transition-all duration-300"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        <motion.p
          onClick={() => router.push("/login")}
          className="mt-6 text-center text-sm font-medium text-[#4DC3FF] cursor-pointer hover:underline"
        >
          Already have an account? Log In
        </motion.p>
      </motion.div>
    </div>
  );
}
