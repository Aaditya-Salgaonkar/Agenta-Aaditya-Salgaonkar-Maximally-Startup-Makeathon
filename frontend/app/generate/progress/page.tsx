import { Suspense } from 'react';
import MVPGenerationProgressPage from '@/components/MVPGenerationProgressPage';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading progress...</div>}>
      <MVPGenerationProgressPage />
    </Suspense>
  );
}
