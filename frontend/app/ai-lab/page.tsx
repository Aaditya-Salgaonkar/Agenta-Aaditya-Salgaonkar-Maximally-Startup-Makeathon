'use client';

import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { toast } from 'react-hot-toast';
import Loading from '@/components/Loading';
import confetti from 'canvas-confetti';
const MODELS = [
  'gpt-4o',
  'gpt-4-turbo',
  'claude-3-opus',
  'mistral-8x7b',
  'gemini-1.5-pro',
];

const QUALITIES = [
  'Basic',
  'Professional',
  'Enterprise',
  'Industry‑grade',
];

interface AiConfig {
  model: string;
  quality: string;
  temperature: number;
  maxTokens: number;
  strictFormat: boolean;
  includeAuth: boolean;
  engineInstructions: string;
}

export default function AILabPage() {
  const [config, setConfig] = useState<AiConfig>({
    model: MODELS[0],
    quality: QUALITIES[2],
    temperature: 0.4,
    maxTokens: 3000,
    strictFormat: true,
    includeAuth: true,
    engineInstructions: '',
  });

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);


const handleSave = async () => {
  setSaving(true);
  setLoading(true);

  await new Promise((resolve) => setTimeout(resolve, 1500));

  toast.success("AI configuration saved successfully ✅");

  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 },
  });

  setConfig({
    model: MODELS[0],
    quality: QUALITIES[2],
    temperature: 0.4,
    maxTokens: 3000,
    strictFormat: true,
    includeAuth: true,
    engineInstructions: "",
  });

  setSaving(false);
  setLoading(false);
};

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="">
          <h1 className="text-5xl font-extrabold pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] via-[#4DC3FF] to-[#00FFB2]">
            AI Finetuning Studio
          </h1>
          <p className="mt-2 text-gray-400">
            Configure how your AI engine builds SaaS MVPs
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="AI Model">
            <select
              value={config.model}
              onChange={(e) =>
                setConfig({ ...config, model: e.target.value })
              }
              className="w-full p-3 rounded-xl bg-black/60 border border-white/20 text-white"
            >
              {MODELS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </Card>

          <Card title="Code Quality">
            <select
              value={config.quality}
              onChange={(e) =>
                setConfig({ ...config, quality: e.target.value })
              }
              className="w-full p-3 rounded-xl bg-black/60 border border-white/20 text-white"
            >
              {QUALITIES.map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </Card>

          <Card title="Creativity (Temperature)">
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={config.temperature}
              onChange={(e) =>
                setConfig({ ...config, temperature: parseFloat(e.target.value) })
              }
              className="w-full"
            />
            <p className="mt-1 text-sm text-cyan-300">
              {config.temperature.toFixed(2)}
            </p>
          </Card>
              <div className="md:col-span-3">
            <Card title="Advanced Engine Instructions">
              <textarea
                rows={4}
                value={config.engineInstructions}
                onChange={(e) =>
                  setConfig({ ...config, engineInstructions: e.target.value })
                }
                className="w-full p-4 rounded-xl bg-black/60 border border-white/20 text-white h-[10vh]"
                placeholder="e.g. Prefer functional components, avoid inline CSS..."
              />
            </Card>
          </div>
          <Card title="Max Tokens">
            <input
              type="number"
              value={config.maxTokens}
              onChange={(e) =>
                setConfig({ ...config, maxTokens: Number(e.target.value) })
              }
              className="w-full p-3 rounded-xl bg-black/60 border border-white/20 text-white"
            />
          </Card>

          <ToggleCard
            label="Strict Output Format"
            enabled={config.strictFormat}
            onToggle={(v) => setConfig({ ...config, strictFormat: v })}
          />

         
               <button
  onClick={handleSave}
  disabled={saving}
  className="w-full py-4 text-2xl text-center justify-center rounded-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-110 disabled:opacity-50"
>
  {saving ? 'Saving...' : 'Save Configuration'}
</button>

          
        </div>

       
      </div>
    </div>
  );
}

// 🔹 Card Component
function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl p-6">
      <h3 className="text-indigo-300 font-semibold text-sm uppercase mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}

// 🔹 Toggle Component
function ToggleCard({
  label,
  enabled,
  onToggle,
}: {
  label: string;
  enabled: boolean;
  onToggle: (v: boolean) => void;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl p-6 flex items-center justify-between">
      <span className="text-indigo-200 font-medium">{label}</span>
      <Switch
        checked={enabled}
        onChange={onToggle}
        className={`${
          enabled ? 'bg-indigo-600' : 'bg-gray-500/50'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-5 w-5 bg-white rounded-full transition`}
        />
      </Switch>
    </div>
  );
}
