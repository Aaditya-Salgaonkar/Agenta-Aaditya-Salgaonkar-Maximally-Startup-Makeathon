"use client";

import React from "react";
import { Button } from "./ui/button";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="flex flex-row justify-between items-center bg-[#0B0F19]  p-4  shadow-lg">
      <div>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text pb-5 bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2]">
          Agenta
        </h1>
      </div>

      <div className="flex flex-row gap-4 items-center">
        {session ? (
          <>
            <div className="text-md font-medium text-[#A0AEC0]">
              {session.user.email}
            </div>
            <Button
              onClick={handleSignOut}
              className="bg-gradient-to-r from-[#7B61FF] to-[#4DC3FF] text-white hover:brightness-125 transition-all shadow-lg font-semibold px-5 py-2 rounded-2xl"
            >
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => router.push("/login")}
              className="bg-gradient-to-r from-[#7B61FF] to-[#4DC3FF] text-white hover:brightness-125 transition-all shadow-lg font-semibold px-5 py-2 rounded-2xl"
            >
              Log In
            </Button>
            <Button
              onClick={() => router.push("/signup")}
              variant={"outline"}
              className="border border-[#4DC3FF] text-[#4DC3FF] hover:border-[#00FFB2] hover:text-[#00FFB2] transition-all shadow-lg font-semibold px-5 py-2 rounded-2xl"
            >
              Sign Up
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
