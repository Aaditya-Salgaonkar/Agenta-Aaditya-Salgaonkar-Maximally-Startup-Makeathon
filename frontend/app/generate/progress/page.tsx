import dynamic from 'next/dynamic';

const MVPGenerationProgressClient = dynamic(
  () => import('@/components/MVPGenerationProgressClient'),
  { ssr: false } // Because it uses EventSource or hooks
);

export default function Page() {
  return <MVPGenerationProgressClient />;
}
