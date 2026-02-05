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

        /* Mobile portrait: show rotate message */
        .rotate-message {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #0A0A0A;
          z-index: 99999;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          color: white;
          font-family: system-ui, -apple-system, sans-serif;
          text-align: center;
          padding: 40px;
          box-sizing: border-box;
        }

        .rotate-icon {
          width: 64px;
          height: 64px;
          animation: rotate-hint 2s ease-in-out infinite;
        }

        @keyframes rotate-hint {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(90deg); }
        }

        @media screen and (orientation: portrait) and (max-width: 1024px) {
          .rotate-message {
            display: flex;
          }
          .presentation-content {
            display: none;
          }
        }
      `}</style>
      <div className="rotate-message">
        <svg className="rotate-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div style={{ fontSize: 20, fontWeight: 500 }}>Please rotate your device</div>
        <div style={{ fontSize: 14, opacity: 0.6 }}>This presentation is best viewed in landscape mode</div>
      </div>
      <div className="presentation-content">
        {children}
      </div>
    </>
  );
}
