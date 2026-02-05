import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Zalando Case Study | Otobong Okoko",
  description: "Transforming Customer Support - Context-aware self-help platform at Zalando",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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

        /* Force landscape orientation on mobile by rotating content when in portrait */
        @media screen and (orientation: portrait) and (max-width: 1024px) {
          html {
            transform: rotate(-90deg);
            transform-origin: left top;
            width: 100vh;
            height: 100vw;
            overflow-x: hidden;
            position: absolute;
            top: 100%;
            left: 0;
          }
        }
      `}</style>
      {children}
    </>
  );
}
