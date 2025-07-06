'use client'; // 👈 Only add this if you plan to use `useSearchParams` or EventSource here (but likely not needed here)

import dynamic from 'next/dynamic';

// Import client component only if MVPGenerationProgress uses hooks or SSE
const MVPGenerationProgress = dynamic(() => import('@/components/MVPGenerationProgress'), {
  ssr: false,
});

export default function Page({ searchParams }: any) {
  const prompt = searchParams?.prompt ?? '';
  const userId = searchParams?.userId ?? '';
  const projectName = searchParams?.projectName ?? '';
  const formData = searchParams?.formData ?? '';

  return (
    <MVPGenerationProgress
      prompt={prompt}
      userId={userId}
      projectName={projectName}
      formData={formData}
    />
  );
}
