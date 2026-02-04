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
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
      {/* Override body styles for standalone presentation */}
      <style>{`
        html, body {
          overflow: hidden !important;
          background: #0A0A0A !important;
          margin: 0 !important;
          padding: 0 !important;
          height: 100vh !important;
          width: 100vw !important;
        }
      `}</style>
      {children}
    </>
  );
}
