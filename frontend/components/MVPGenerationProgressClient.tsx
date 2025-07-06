'use client';

import { useSearchParams } from 'next/navigation';
import MVPGenerationProgress from './MVPGenerationProgress';

export default function MVPGenerationProgressClient() {
  const searchParams = useSearchParams();

  const prompt = searchParams.get('prompt') || '';
  const userId = searchParams.get('userId') || '';
  const projectName = searchParams.get('projectName') || '';
  const formData = searchParams.get('formData') || '';

  return (
    <MVPGenerationProgress
      prompt={prompt}
      userId={userId}
      projectName={projectName}
      formData={formData}
    />
  );
}
