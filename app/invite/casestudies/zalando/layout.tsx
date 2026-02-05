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

        /* Mobile portrait: rotate wrapper to simulate landscape */
        @media screen and (orientation: portrait) and (max-width: 1024px) {
          .presentation-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vh;
            height: 100vw;
            transform: rotate(90deg) translateY(-100%);
            transform-origin: top left;
            overflow: hidden;
          }
        }

        .presentation-wrapper {
          width: 100vw;
          height: 100vh;
        }
      `}</style>
      <div className="presentation-wrapper">
        {children}
      </div>
    </>
  );
}
