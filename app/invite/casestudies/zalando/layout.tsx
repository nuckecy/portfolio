import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zalando Case Study | Otobong Okoko",
  description: "Transforming Customer Support - Context-aware self-help platform at Zalando",
};

export default function ZalandoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Fonts for presentation */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Zalando+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
        rel="stylesheet"
      />
      {/* Override body styles for standalone presentation */}
      <style>{`
        html, body {
          background: #0A0A0A !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
      {children}
    </>
  );
}
