"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "@/components/Loading";
import { FaEnvelope } from "react-icons/fa";

interface UserData {
  name: string;
  email: string;
}

export default function Account() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();

      if (sessionError || !session) {
        router.push("/");
        return;
      }

      const userId = session.user.id;

      const { data, error } = await supabase
        .from("users")
        .select("name, email")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error fetching user:", error);
        router.push("/");
        return;
      }

      setUser({ name: data.name, email: data.email });
      setLoading(false);
    };

    fetchUserData();
  }, [router]);

  if (loading) return <Loading />;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F19] via-[#1e293b] to-[#0B0F19] text-white p-20">
      <div className="mb-12 ">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2]">
          Account Dashboard
        </h1>
        <p className="text-lg text-[#A0AEC0] mt-2">
          Manage your identity, credentials & personalization settings.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-2xl p-8  rounded-3xl border border-[#4DC3FF]/20 shadow-2xl">
        <div className="flex items-center gap-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#7B61FF]/30 shadow-lg">
            <Image
              src="/avatar.png"
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#00FFB2] mb-2">{user.name}</h2>
            <p className="text-md text-[#CBD5E1] flex items-center gap-2">
              <FaEnvelope className="text-[#4DC3FF]" /> {user.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
