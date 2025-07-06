import React from "react";
import { FaCode, FaFileAlt, FaDownload, FaWrench } from "react-icons/fa";

interface FileContent {
  path: string;
  content: string;
}

interface MVP {
  id: string;
  name: string;
  prompt: string;
  created_at: string;
  files: FileContent[];
}

interface MVPCardProps {
  mvp: MVP;
}

export const MVPCard: React.FC<MVPCardProps> = ({ mvp }) => {
  const downloadUrl = `/api/mvp/download/${encodeURIComponent(mvp.name)}`;

  return (
    <div className="bg-[#0B0F19] rounded-2xl shadow-2xl hover:shadow-[0_0_24px_rgba(123,97,255,0.3)] transition-all p-6 border border-[#1E293B] text-white relative overflow-hidden group">
      <h2 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2]">
        {mvp.name.length > 50 ? `${mvp.name.slice(0, 50)}...` : mvp.name}
      </h2>

      <p className="text-xs text-[#94A3B8] mb-4">
        Generated on: {new Date(mvp.created_at).toLocaleDateString()} at{" "}
        {new Date(mvp.created_at).toLocaleTimeString()}
      </p>

      <div className="mb-4">
        <h3 className="font-semibold text-[#F5F7FA] flex items-center gap-2 mb-1">
          <FaFileAlt /> Prompt
        </h3>
        <p className="text-sm text-[#CBD5E1] max-h-24 overflow-y-auto whitespace-pre-wrap scrollbar-thin scrollbar-thumb-[#4DC3FF]/40 scrollbar-track-transparent">
          {mvp.prompt}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-[#F5F7FA] flex items-center gap-2 mb-1">
          <FaCode /> Files
        </h3>
        <ul className="text-sm text-[#CBD5E1] max-h-40 overflow-auto scrollbar-thin scrollbar-thumb-[#7B61FF]/40 scrollbar-track-transparent">
          {mvp.files.length === 0 ? (
            <li className="text-[#6B7280]">No files available</li>
          ) : (
            mvp.files.map((file, index) => (
              <li key={index} className="mb-1">
                <code className="font-mono text-[#94A3B8] text-xs">{file.path}</code>
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="flex justify-between gap-2 mt-6">
        <a
          href={downloadUrl}
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r from-[#00FFB2] to-[#4DC3FF] text-black font-semibold hover:brightness-110 transition"
          download
        >
          <FaDownload /> Download
        </a>
        <button
          onClick={() => (window.location.href = `/customize/${mvp.id}`)}
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r from-[#7B61FF] to-[#4DC3FF] text-white font-semibold hover:brightness-110 transition"
        >
          <FaWrench /> Customize
        </button>
      </div>
    </div>
  );
};
