"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { SparklesIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

interface FileProgress {
  filename: string;
  status: "generating" | "done";
}
interface MVPGenerationProgressProps {
  userId: string;
  prompt: string;
  projectName: string;
  formData: string;
}

export default function MVPGenerationProgress({
  userId,
  prompt,
  projectName,
}: MVPGenerationProgressProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [files, setFiles] = useState<FileProgress[]>([]);
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const formDataRaw = searchParams.get("formData");

  useEffect(() => {
    // Before redirecting to /generate/progress
localStorage.setItem("generationInProgress", "true");
    if (!userId || !projectName || !formDataRaw) return;

    const formData = JSON.parse(decodeURIComponent(formDataRaw));
    setSelectedFeatures(formData.features || []);

    const encodedForm = encodeURIComponent(JSON.stringify(formData));
    const streamUrl = `https://agenta-aaditya-salgaonkar-maximally.onrender.com/api/mvp/generate-stream?userId=${userId}&prompt=${prompt}&projectName=${projectName}&formData=${encodedForm}`;

    const evtSource = new EventSource(streamUrl);

    evtSource.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.done) {
        setComplete(true);
        setDownloadUrl(`https://agenta-aaditya-salgaonkar-maximally.onrender.com/api/mvp/download/${projectName}`);
        evtSource.close();

        setTimeout(() => router.push("/manage-mvps"), 3000);
        return;
      }

      if (data.filename) {
        setFiles((prev) => [...prev, { filename: data.filename, status: "generating" }]);
        setTimeout(() => {
          setFiles((prev) =>
            prev.map((f) =>
              f.filename === data.filename ? { ...f, status: "done" } : f
            )
          );
        }, 1200);
      }
    };

    evtSource.onerror = () => {
      setError("Something went wrong while generating files.");
      evtSource.close();
    };

    return () => {
      evtSource.close();
      // After MVP generation completes
localStorage.removeItem("generationInProgress");

    };
  }, [userId, projectName, formDataRaw, prompt, router]);

  const progress = Math.round((files.filter(f => f.status === "done").length / files.length) * 100);

  return (
    <div className="bg-[#0f172a] min-h-screen py-10 px-6 text-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text drop-shadow-md pb-2">
            Building Your SaaS MVP
          </h2>
          <p className="text-gray-400 mt-2">Sit tight while your files are generated in real time...</p>
        </div>

        {error && (
          <div className="bg-red-800/50 p-4 rounded-xl flex items-center gap-3 text-red-200 border border-red-500">
            <ExclamationTriangleIcon className="w-6 h-6" />
            <span>{error}</span>
          </div>
        )}

        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl space-y-4">
          <h3 className="text-lg font-semibold text-cyan-400">Selected Features</h3>
          <ul className="list-disc list-inside text-gray-300">
            {selectedFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          <div className="mt-4 w-full bg-gray-800 h-3 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00FFB2] to-[#4DC3FF] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {files.map((file, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-xl border border-white/10"
            >
              <span className="text-sm font-mono text-gray-300">
                {file.filename}
              </span>
              {file.status === "generating" ? (
                <div className="loader-dot animate-pulse w-3 h-3 rounded-full bg-yellow-300" />
              ) : (
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
              )}
            </div>
          ))}
        </div>

        {complete && (
          <div className="text-center mt-8 space-y-4">
            <div className="text-green-400 font-semibold flex items-center justify-center gap-2 text-lg">
              <SparklesIcon className="w-6 h-6" />
              MVP Generation Complete!
            </div>
            {downloadUrl && (
              <a
                href={downloadUrl}
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00FFB2] to-[#4DC3FF] text-black font-semibold py-2 px-6 rounded-full shadow hover:scale-105 transition"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                Download ZIP
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
