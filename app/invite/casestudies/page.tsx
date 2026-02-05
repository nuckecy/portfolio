import Link from "next/link";

export default function InviteCaseStudiesPage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0A0A0A',
      overflow: 'hidden',
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 16,
        padding: '48px 64px',
        textAlign: 'center',
      }}>
        <h1 style={{
          color: 'white',
          fontSize: 28,
          fontWeight: 600,
          marginBottom: 8,
        }}>
          Transforming Customer Support
        </h1>
        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: 16,
          marginBottom: 32,
        }}>
          Otobong Okoko
        </p>
        <Link
          href="/invite/casestudies/zal-csh"
          style={{
            color: '#FF6B35',
            fontSize: 14,
            textDecoration: 'none',
          }}
        >
          View Presentation →
        </Link>
      </div>
    </main>
  );
}
