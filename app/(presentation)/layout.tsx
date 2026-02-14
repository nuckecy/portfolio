import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study Presentations",
  description: "Interactive case study presentations",
};

export default function PresentationRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={{ overflow: 'hidden', background: '#0A0A0A' }}>
      <body style={{ margin: 0, padding: 0, background: '#0A0A0A' }}>
        {children}
      </body>
    </html>
  );
}
