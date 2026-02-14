export default async function InviteCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontSize: '2.25rem',
          lineHeight: '2.5rem',
          fontWeight: 700,
          color: '#FFFFFF',
        }}>
          Zalando Case Study
        </h1>
        <p style={{
          marginTop: '1rem',
          color: '#888888',
        }}>
          Slug: {slug}
        </p>
      </div>
    </main>
  );
}
