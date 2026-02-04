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
      {children}
    </>
  );
}
