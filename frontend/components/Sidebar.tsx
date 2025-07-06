"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  FaTachometerAlt, FaCogs, FaRocket, FaFlask,
  FaUser, FaSignOutAlt, FaBolt
} from "react-icons/fa";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const session = useSession();
  const supabase = useSupabaseClient();

  const [isGenerating, setIsGenerating] = useState(false);

  // Check localStorage on load
  useEffect(() => {
    const interval = setInterval(() => {
      const active = localStorage.getItem("generationInProgress") === "true";
      setIsGenerating(active);
    }, 1000); // Check every second (optional: reduce to 3s)

    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { label: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { label: "Warehouse", icon: <FaCogs />, path: "/manage-mvps" },
    { label: "Copilot", icon: <FaBolt />, path: "/ai" },
    { label: "Production", icon: <FaRocket />, path: "/deployments" },
    { label: "Studio", icon: <FaFlask />, path: "/ai-lab" },
    { label: "Account", icon: <FaUser />, path: "/account" },
  ];

  const handleSelect = (path: string) => {
    if (pathname !== path) router.push(path);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <aside className="w-64 h-screen pt-5 bg-black backdrop-blur-md text-white shadow-xl flex flex-col justify-between fixed z-50 border-r border-white/10">
      <div className="p-6">
        <h1 className="text-4xl pb-5 font-extrabold text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-500 to-indigo-400">
          Agenta
        </h1>

        <nav className="flex flex-col gap-3 mt-10">
          {menuItems.map(({ label, icon, path }) => (
            <MenuItem
              key={label}
              icon={icon}
              label={label}
              path={path}
              isActive={pathname === path}
              onSelect={handleSelect}
            />
          ))}
        </nav>
      </div>

      {/* Only show if generating */}
      {isGenerating && (
        <Link href="/generate/progress">
          <div className="z-50 flex flex-col items-center justify-center bg-transparent absolute bottom-28 left-24 animate-pulse cursor-pointer">
            <Image
              src="/loader.gif"
              alt="Generating MVP..."
              width={50}
              height={50}
              className="w-20 h-20 object-contain"
            />
            <p className="text-xs text-indigo-300 -mt-2 pb-1 text-center">
              Generating...
            </p>
          </div>
        </Link>
      )}

      <div className="flex flex-col items-center gap-3 p-4 border-t border-white/10 text-sm">
        {session ? (
          <div
            onClick={handleSignOut}
            className="flex items-center gap-2 cursor-pointer text-cyan-300 hover:text-white hover:underline transition"
          >
            <FaSignOutAlt />
            Sign Out
          </div>
        ) : (
          <div className="text-gray-400">Not signed in</div>
        )}
        <div className="text-gray-500 mt-2">
          Powered by <span className="font-semibold text-indigo-300">Galuxium</span>
        </div>
      </div>
    </aside>
  );
}

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  path: string;
  isActive: boolean;
  onSelect: (path: string) => void;
};

function MenuItem({ icon, label, path, isActive, onSelect }: MenuItemProps) {
  return (
    <div
      onClick={() => onSelect(path)}
      className={`flex items-center gap-4 px-5 py-3 rounded-xl cursor-pointer transition-all duration-200
        ${isActive
          ? "bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500 text-white shadow-md"
          : "hover:bg-white/10 text-gray-300 hover:text-white"}`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-md font-medium tracking-wide">{label}</span>
    </div>
  );
}
