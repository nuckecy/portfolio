import { HomeIcon } from "./_components/HomeIcon";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        html, body {
          overflow: hidden !important;
          background: #0A0A0A !important;
        }
      `}</style>

      <HomeIcon />

      {children}
    </>
  );
}
