"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Loading from "@/components/Loading";
import Link from "next/link";
import {
  FaRocket, FaCloudUploadAlt, FaGithub, FaChartLine, FaRobot, FaRupeeSign, FaCubes
} from "react-icons/fa";

interface UserData {
  name: string;
  email: string;
  created_at: string;
}

interface Project {
  name: string;
  status: 'Live' | 'Testing' | 'Draft';
  created: string;
  modified: string;
}

export default function PremiumDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserData | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [metrics, setMetrics] = useState({
    totalMvps: 0, activeDeployments: 0, githubPushed: 0,
    totalConversations: 0, totalMessages: 0, aiMessages: 0, userMessages: 0,
    totalTokens: 0, revenue: 0, mrr: 0, arr: 0, aiCost: 0,
    retention: 0, churnRate: 0, conversionRate: 0,
  });

  const planPrice = 29;
  const tokenPrice = 0.000002;

  useEffect(() => {
    const fetchData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/");

      const userId = session.user.id;
      const { data: userData } = await supabase.from("users").select("*").eq("id", userId).single();
      if (!userData) return router.push("/");

      setUser(userData);

      const [{ data: mvps }, { data: conversations }, { data: messages }] = await Promise.all([
        supabase.from("mvps").select("*").eq("user_id", userId),
        supabase.from("conversations").select("id").eq("user_id", userId),
        supabase.from("messages").select("sender, conversation_id")
          .in("conversation_id", (await supabase.from("conversations").select("id").eq("user_id", userId)).data?.map(c => c.id) || [])
      ]);

      const totalMvps = mvps?.length ?? 0;
      const activeDeployments = mvps?.filter(m => m.netlify_deployed).length ?? 0;
      const githubPushed = mvps?.filter(m => m.github_pushed).length ?? 0;
      const totalConversations = conversations?.length ?? 0;
      const totalMessages = messages?.length ?? 0;
      const aiMessages = messages?.filter(m => m.sender === "ai").length ?? 0;
      const userMessages = totalMessages - aiMessages;
      const totalTokens = totalMessages * 200;
      const revenue = totalMvps * planPrice;
      const mrr = revenue;
      const arr = mrr * 12;
      const aiCost = totalTokens * tokenPrice;

      const days = Math.floor((new Date().getTime() - new Date(userData.created_at).getTime()) / (1000 * 60 * 60 * 24));
      const retention = days > 30 ? 100 : 100 - (30 - days);
      const churnRate = 100 - retention;
      const conversionRate = totalConversations > 0 ? (totalMvps / totalConversations) * 100 : 0;

      setMetrics({
        totalMvps, activeDeployments, githubPushed, totalConversations, totalMessages,
        aiMessages, userMessages, totalTokens, revenue, mrr, arr, aiCost,
        retention, churnRate, conversionRate
      });

      setProjects(mvps?.map(p => ({
        name: p.name,
        status: p.netlify_deployed ? 'Live' : p.github_pushed ? 'Testing' : 'Draft',
        created: new Date(p.created_at).toLocaleDateString(),
        modified: new Date(p.created_at).toLocaleDateString()
      })) || []);

      setLoading(false);
    };
    fetchData();
  }, [router]);

  if (loading) return <Loading />;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F19] via-[#1e293b] to-[#0B0F19] text-white pl-20 px-10 py-14">
      <div className="flex flex-row justify-between">
      
       <div>
         <header className="mb-12">
        <h1 className="text-4xl pb-2 font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Welcome back, {user.name}!
        </h1>
        <p className="mt-2 text-gray-400">Your AI SaaS control center</p>
      </header>
       </div>

      <div className="mb-10">
        <Link href="/create">
          <button className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 hover:brightness-110 rounded-xl shadow-lg text-white font-semibold text-lg transition-all">
            <FaRocket className="text-xl" />
            Launch New MVP
          </button>
        </Link>
      </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        <MetricCard icon={<FaCubes className="text-orange-600" />} label="Total MVPs" value={metrics.totalMvps} />
        <MetricCard icon={<FaCloudUploadAlt className="text-green-600" />} label="Deployments" value={metrics.activeDeployments} />
        <MetricCard icon={<FaGithub className="text-black" />} label="GitHub Pushed" value={metrics.githubPushed} />
        <MetricCard icon={<FaRupeeSign className="text-amber-500" />} label="Revenue" value={`${metrics.revenue}`} />
        <MetricCard icon={<FaChartLine className="text-blue-700" />} label="MRR" value={`₹${metrics.mrr}`} />
        <MetricCard icon={<FaChartLine className="text-violet-800"/>} label="ARR" value={`₹${metrics.arr}`} />
        <MetricCard icon={<FaRobot className="text-red-600" />} label="AI Cost" value={`₹${metrics.aiCost.toFixed(2)}`} />
        <MetricCard icon={<FaChartLine className="text-emerald-500" />} label="Retention" value={`${metrics.retention.toFixed(1)}%`} />
      </section>

  <section className="relative overflow-hidden rounded-2xl p-6 shadow-xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#0f172a] transition transform">
        <h2 className="text-2xl font-semibold text-white mb-6">Recent Projects</h2>
        <TableProjects projects={projects} />
      </section>
    </div>
  );
}

// Metric Card
// Premium-styled Metric Card
const MetricCard = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: number | string }) => (
  <div className="relative overflow-hidden rounded-2xl p-6 shadow-xl border border-white/10 bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#0f172a] hover:scale-[1.02] transition transform">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-indigo-800/10 to-transparent rounded-2xl blur-sm z-0" />
    
    <div className="relative z-10 flex flex-col gap-2">
      <div className="text-3xl text-white">{icon}</div>
      <h3 className="text-md font-semibold text-gray-400 uppercase tracking-wider">
        {label}
      </h3>
      <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2]">
        {value}
      </p>
    </div>
  </div>
);


// Table
const TableProjects = ({ projects }: { projects: Project[] }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-white">
      <thead className="text-gray-300 border-b border-white/10">
        <tr>
          <th className="py-3">Project</th>
          <th className="pl-20">Status</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((p, i) => (
          <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition">
            <td className="py-4 w-[50vw]">{p.name}</td>
            <td className="pl-20">
              <span className={`px-3 py-1 rounded-full text-sm font-medium
                ${p.status === 'Live' ? 'bg-green-500/20 text-green-300' :
                  p.status === 'Testing' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-gray-500/20 text-gray-300'}`}>
                {p.status}
              </span>
            </td>
            <td>{p.created}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
