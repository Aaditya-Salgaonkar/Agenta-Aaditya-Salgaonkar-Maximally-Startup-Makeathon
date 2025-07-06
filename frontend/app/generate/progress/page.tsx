// app/generate/progress/page.tsx
import MVPGenerationProgress from '@/components/MVPGenerationProgress';

type PageProps = {
  searchParams: {
    prompt?: string;
    userId?: string;
    projectName?: string;
    formData?: string;
  };
};

export default function Page({ searchParams }: PageProps) {
  const prompt = searchParams.prompt || '';
  const userId = searchParams.userId || '';
  const projectName = searchParams.projectName || '';
  const formData = searchParams.formData || '';

  return (
    <MVPGenerationProgress
      prompt={prompt}
      userId={userId}
      projectName={projectName}
      formData={formData}
    />
  );
}
