import MVPGenerationProgress from "@/components/MVPGenerationProgress";

export default function Page({ searchParams }: { searchParams: Record<string, string> }) {
  const prompt = searchParams.prompt;
  const userId = searchParams.userId;
  const projectName = searchParams.projectName;
  const formData = searchParams.formData;

  return (
    <MVPGenerationProgress
      prompt={prompt}
      userId={userId}
      projectName={projectName}
      formData={formData}
    />
  );
}
