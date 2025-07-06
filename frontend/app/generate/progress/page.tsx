import MVPGenerationProgress from '@/components/MVPGenerationProgress';

interface PageProps {
  searchParams: Record<string, string | undefined>;
}

export default function Page({ searchParams }: PageProps) {
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
