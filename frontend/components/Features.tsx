import React from "react";

export default function Features() {
  const features = [
    {
      title: "Zero-Code SaaS Launchpad",
      desc: "Describe your vision, and Agenta generates a production-ready, full-stack web app — no coding or config required.",
      icon: "🚀",
    },
    {
      title: "Adaptive Prompt Intelligence",
      desc: "Smart parsing of your input to build tailored architectures — including UI, backend logic, and data models.",
      icon: "🧠",
    },
    {
      title: "Visual Stack Composer",
      desc: "Customize everything: frameworks, components, auth flows, and database setup through a guided visual builder.",
      icon: "📝",
    },
    {
      title: "Instant Code & CI/CD Push",
      desc: "Autogenerates and deploys a clean codebase directly to your GitHub repo with ready-to-run CI/CD workflows.",
      icon: "💻",
    },
    {
      title: "Modular by Design",
      desc: "Each project follows scalable patterns — clean code, reusable components, and future-proof architecture.",
      icon: "🏗️",
    },
    {
      title: "Open-Model AI Engine",
      desc: "Built on open-source LLMs like LLaMA 2 and Code LLaMA to give you speed, control, and cost-free execution.",
      icon: "⚙️",
    },
    {
      title: "Secure by Default",
      desc: "Every deployment is isolated, encrypted, and powered by Supabase with cloud-native security baked in.",
      icon: "🔒",
    },
    {
      title: "Plugin-Friendly Ecosystem",
      desc: "Choose from growing extensions: templates, payment providers, GPT agents, and custom feature packs.",
      icon: "🧩",
    },
    {
      title: "Smarter with Every Build",
      desc: "Agenta evolves through real-world usage — learning from your patterns to improve every future output.",
      icon: "📈",
    },
  ];

  return (
    <section className="w-full bg-[#0B0F19] text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2] opacity-10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-extrabold leading-tight mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2] pb-5">
          What Makes Agenta Unstoppable
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#111827] rounded-3xl shadow-xl border border-[#1F2937] hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex justify-center items-center mb-6 w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2] text-white text-4xl shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-[#A0AEC0] text-lg leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
