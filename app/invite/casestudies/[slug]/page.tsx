export default async function InviteCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Zalando Case Study</h1>
        <p className="mt-4 text-muted-foreground">Slug: {slug}</p>
      </div>
    </main>
  );
}
