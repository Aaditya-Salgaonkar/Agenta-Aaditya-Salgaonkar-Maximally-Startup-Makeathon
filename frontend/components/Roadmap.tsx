import React from 'react';
import { FaLightbulb, FaListOl, FaRobot, FaCode, FaGithub, FaRocket, FaGlobe } from 'react-icons/fa';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Roadmap() {
  const steps = [
    {
      icon: <FaLightbulb className="text-6xl text-[#00FFB2]" />,
      title: "Step 1 — Define the Idea",
      desc: "Tell us what you're building in simple terms. Agenta parses your vision and sets the stage for structured AI-assisted development."
    },
    {
      icon: <FaListOl className="text-6xl text-[#7B61FF]" />,
      title: "Step 2 — Configure Your Stack",
      desc: "Select the building blocks: UI frameworks, auth methods, features, and integrations — no code, just intelligent options."
    },
    {
      icon: <FaRobot className="text-6xl text-[#4DC3FF]" />,
      title: "Step 3 — AI Blueprinting",
      desc: "Agenta’s orchestration engine generates technical specs, data flows, and modular components behind the scenes — in seconds."
    },
    {
      icon: <FaCode className="text-6xl text-[#FFC15E]" />,
      title: "Step 4 — Codebase Assembly",
      desc: "Receive a fully structured codebase including frontend, backend, auth, APIs, and deployment config — ready to go."
    },
    {
      icon: <FaGithub className="text-6xl text-[#A0AEC0]" />,
      title: "Step 5 — GitHub Sync",
      desc: "Your entire codebase is pushed to GitHub with version control, CI/CD, and environment secrets — set up out of the box."
    },
    {
      icon: <FaRocket className="text-6xl text-[#00FFB2]" />,
      title: "Step 6 — Deploy Instantly",
      desc: "Launch with one click to Vercel or your preferred platform. Agenta handles deployment routing, domains, and staging."
    },
    {
      icon: <FaGlobe className="text-6xl text-[#7B61FF]" />,
      title: "Step 7 — Iterate & Scale",
      desc: "Monitor builds, tweak components, and roll out updates fast. You're production-ready, modular, and scalable from day one."
    }
  ];

  return (
    <section className="w-full bg-[#0B0F19] text-white py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2] opacity-10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
        <h2 className="text-5xl font-extrabold leading-tight mb-20 bg-clip-text text-transparent bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2]">
          Launch Your AI Product in 7 Streamlined Steps
        </h2>

        <div className="relative flex flex-col items-center">
          <div className="absolute h-full w-1 bg-gradient-to-b from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2] rounded-full z-0"></div>

          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`w-full flex flex-col md:flex-row items-center z-10 ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} ${idx === 0 ? '' : '-mt-32'}`}>

              <div className={`w-full md:w-1/2 px-6 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="p-10 bg-[#111827] rounded-3xl shadow-xl border border-[#1F2937] hover:scale-[1.03] transition-all duration-300">
                  <div className="mb-8 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4 text-white">{step.title}</h3>
                  <p className="text-[#A0AEC0] leading-relaxed text-lg">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center z-10 relative">
          <Link href="/signup">
            <Button className='bg-gradient-to-r from-[#7B61FF] to-[#00FFB2] py-8 hover:brightness-110 hover:scale-105 transition-all duration-300'>
              <div className="px-8 text-2xl font-extrabold rounded-3xl text-white">
                Start with Agenta
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
