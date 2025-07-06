"use client";

import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import toast from "react-hot-toast";
import { MVPCard } from "@/components/MVPCard";

interface FileContent {
  path: string;
  content: string;
}

interface MVP {
  id: string;
  name: string;
  prompt: string;
  created_at: string;
  files: FileContent[];
}

interface SupabaseMVP {
  id: string;
  name: string;
  prompt: string;
  created_at: string;
  files: string | FileContent[];
}

export default function ManageMVPsPage() {
  const [mvps, setMvps] = useState<MVP[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchMVPs = useCallback(async () => {
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
      files: typeof mvp.files === "string" ? JSON.parse(mvp.files) : mvp.files || [],
    }));

    setMvps(parsedData);
    setLoading(false);
  }, [router]);

  useEffect(() => {
    fetchMVPs();
  }, [fetchMVPs]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F19] via-[#1e293b] to-[#0B0F19] text-white px-10 py-10">
      <div className="mb-10 max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2]">
          Your SaaS MVPs
        </h1>
        <p className="text-lg text-gray-400 mt-2">
          All your generated projects, ready to download or customize.
        </p>
      </div>

      {mvps.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">No MVPs found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 px-20">
          {mvps.map((mvp) => (
            <MVPCard key={mvp.id} mvp={mvp} />
          ))}
        </div>
      )}
    </div>
  );
}
