"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";

const featureOptions = [
  "Landing Page", "Authentication", "Database CRUD",
  "Payment Integration", "Admin Panel", "File Upload",
  "Email Notifications", "Analytics Dashboard"
];

export default function CreateMVPPage() {
  const [form, setForm] = useState({
    idea: "",
    industry: "",
    audience: "",
    projectName: "",
    features: [] as string[],
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  const handleToggleFeature = (feature: string) => {
    setForm(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleSubmit = async () => {
    if (!form.idea || !form.industry || !form.audience) {
      toast.error("Please fill out all fields.");
      return;
    }

    const { data: { session } } = await supabase.auth.getSession();
    const userId = session?.user?.id;
    if (!userId) return toast.error("Not authenticated.");

    const projectName = form.projectName?.trim() || `mvp-${Date.now()}`;
    const formDataString = encodeURIComponent(JSON.stringify(form));
    const prompt = encodeURIComponent(form.idea);

    setIsGenerating(true);

    router.push(
      `/generate/progress?userId=${userId}&prompt=${prompt}&projectName=${encodeURIComponent(projectName)}&formData=${formDataString}`
    );
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#7B61FF] to-[#00FFB2] text-transparent bg-clip-text mb-10">
          Create Your SaaS MVP
        </h1>

        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl space-y-6">
          <div>
            <label className="text-sm text-gray-300">Startup Idea</label>
            <textarea
              className="w-full h-[12vh] mt-1 p-3 rounded-lg bg-[#1E293B] text-white border border-white/10"
              rows={4}
              value={form.idea}
              onChange={e => setForm({ ...form, idea: e.target.value })}
              placeholder="Describe your startup idea..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-300">Industry</label>
              <input
                type="text"
                className="w-full mt-1 p-3 rounded-lg bg-[#1E293B] text-white border border-white/10"
                value={form.industry}
                onChange={e => setForm({ ...form, industry: e.target.value })}
                placeholder="e.g. FinTech, EdTech"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Audience</label>
              <input
                type="text"
                className="w-full mt-1 p-3 rounded-lg bg-[#1E293B] text-white border border-white/10"
                value={form.audience}
                onChange={e => setForm({ ...form, audience: e.target.value })}
                placeholder="e.g. Startups, Freelancers"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300">Project Name</label>
            <input
              type="text"
              className="w-full mt-1 p-3 rounded-lg bg-[#1E293B] text-white border border-white/10"
              value={form.projectName}
              onChange={e => setForm({ ...form, projectName: e.target.value })}
              placeholder="e.g. agentbot-ai"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Select Features</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
              {featureOptions.map(feature => (
                <button
                  key={feature}
                  type="button"
                  onClick={() => handleToggleFeature(feature)}
                  className={`text-sm px-3 py-2 rounded-lg border transition ${
                    form.features.includes(feature)
                      ? "bg-gradient-to-r from-[#00FFB2] to-[#4DC3FF] text-black font-semibold"
                      : "bg-[#1E293B] border-white/10 text-white"
                  }`}
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={handleSubmit}
              disabled={isGenerating}
              className="px-6 py-3 rounded-xl text-black font-semibold bg-gradient-to-r from-[#00FFB2] to-[#4DC3FF] hover:scale-105 transition"
            >
              {isGenerating ? "Redirecting..." : "Generate MVP"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
