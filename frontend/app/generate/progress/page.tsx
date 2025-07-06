"use client";

import { useSearchParams } from "next/navigation";
import MVPGenerationProgress from "@/components/MVPGenerationProgress";

export default function MVPStreamPage() {
  const search = useSearchParams();

  const userId = search.get("userId");
  const prompt = search.get("prompt");
  const projectName = search.get("projectName");
  const formData = search.get("formData");

  if (!userId || !prompt || !projectName || !formData) {
    return <div className="text-white p-10">Missing parameters</div>;
  }

  return (
    <MVPGenerationProgress
      userId={userId}
      prompt={prompt}
      projectName={projectName}
      formData={formData}
    />
  );
}
