import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <section className="w-full bg-[#0B0F19] text-white py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-6 pt-5">
          Ship AI-Powered Tools at Lightning Speed with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2]">
            Agenta
          </span>
        </h1>

        <p className="text-2xl text-[#A0AEC0] mb-12">
          From idea to deployment — build, test, and launch full-stack AI apps without writing a single line of backend code.
        </p>

        <div className="flex justify-center space-x-4 py-5">
          <Link href={"/signup"}>
            <button className="px-8 py-3 bg-gradient-to-r from-[#7B61FF] to-[#4DC3FF] text-white text-lg font-semibold rounded-2xl shadow-xl hover:brightness-125 hover:scale-105 transition-all">
              Start Building
            </button>
          </Link>
          <Link href={"#roadmap"}>
            <button className="px-8 py-3 border border-[#4DC3FF] text-[#4DC3FF] text-lg font-semibold rounded-2xl shadow-md hover:border-[#00FFB2] hover:text-[#00FFB2] hover:scale-105 transition-all">
              See How It Works
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
