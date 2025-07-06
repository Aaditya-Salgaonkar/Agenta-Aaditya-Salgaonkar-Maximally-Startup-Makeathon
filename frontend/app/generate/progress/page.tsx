import MVPGenerationProgress from '@/components/MVPGenerationProgress';

export default async function Page({
  searchParams,
}: {
  searchParams: { prompt?: string; userId?: string; projectName?: string; formData?: string };
}) {
  const prompt = searchParams.prompt ?? '';
  const userId = searchParams.userId ?? '';
  const projectName = searchParams.projectName ?? '';
  const formData = searchParams.formData ?? '';

  return (
    <MVPGenerationProgress
      prompt={prompt}
      userId={userId}
      projectName={projectName}
      formData={formData}
    />
  );
}
