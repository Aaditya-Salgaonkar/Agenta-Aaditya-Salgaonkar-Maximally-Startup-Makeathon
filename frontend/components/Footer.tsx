import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0F19] text-white border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h1 className="text-4xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2]">
            Agenta
          </h1>
          <p className="text-sm text-[#94A3B8] font-light mt-1">
            Powered by <span className="font-semibold text-[#4DC3FF]">Galuxium Core</span>
          </p>
        </div>

        <div className="flex space-x-6 text-sm">
          <a href="#" className="text-[#A0AEC0] hover:text-[#00FFB2] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-[#A0AEC0] hover:text-[#00FFB2] transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-[#A0AEC0] hover:text-[#00FFB2] transition-colors">
            Contact
          </a>
        </div>
      </div>

      <div className="border-t border-[#1F2937] mt-6">
        <p className="text-center text-xs text-[#6B7280] py-5">
          © {new Date().getFullYear()} Agenta Technologies Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
