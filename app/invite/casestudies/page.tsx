import Link from "next/link";

export default function InviteCaseStudiesPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Link
          href="/invite/casestudies/zalando"
          className="text-2xl font-medium hover:underline"
        >
          Zalando: Contextual Self-Help
        </Link>
      </div>
    </main>
  );
}
