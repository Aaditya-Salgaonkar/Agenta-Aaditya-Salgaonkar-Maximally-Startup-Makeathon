"use client";

import Image from "next/image";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent pl-40">
      <Image
        src="/loader.gif" // 👈 Put your image inside the public folder as /public/loader.gif
        alt="Loading..."
        width={100}
        height={100}
        className="w-52 h-52 object-contain"
      />
    </div>
  );
};

export default Loading;
