'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import { useRouter } from 'next/navigation';
import { STYLE } from '../styles/tokens';

interface ExitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExitModal({ isOpen, onClose }: ExitModalProps) {
  const router = useRouter();

  // Handle keyboard events
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      // Block navigation keys while modal is open
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' ', 'Space'].includes(e.key)) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [isOpen, onClose]);

  const handleLeave = () => {
    router.push('/invite/casestudies');
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: STYLE.colors.surface,
          border: `1px solid ${STYLE.colors.border}`,
          borderRadius: 8,
          padding: 16,
          maxWidth: 360,
          width: '90%',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Header - Icon and Title inline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 8,
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: `1px solid ${STYLE.colors.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={STYLE.colors.accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: STYLE.fonts.heading,
              fontSize: 18,
              fontWeight: 500,
              color: STYLE.colors.white,
              margin: 0,
            }}
          >
            Leave presentation?
          </h2>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: STYLE.fonts.body,
            fontSize: 13,
            fontWeight: 400,
            color: STYLE.colors.gray500,
            margin: '0 0 16px',
            lineHeight: 1.5,
            paddingLeft: 44,
          }}
        >
          You'll return to the case studies page.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
          }}
        >
          {/* Stay Button */}
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: '12px 24px',
              borderRadius: 8,
              background: 'transparent',
              border: `1px solid ${STYLE.colors.border}`,
              color: STYLE.colors.gray400,
              fontFamily: STYLE.fonts.body,
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = STYLE.colors.gray600;
              e.currentTarget.style.color = STYLE.colors.white;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = STYLE.colors.border;
              e.currentTarget.style.color = STYLE.colors.gray400;
            }}
          >
            Stay
          </button>

          {/* Leave Button */}
          <button
            onClick={handleLeave}
            style={{
              flex: 1,
              padding: '12px 24px',
              borderRadius: 8,
              background: STYLE.colors.accent,
              border: 'none',
              color: '#000',
              fontFamily: STYLE.fonts.body,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F5A04A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = STYLE.colors.accent;
            }}
          >
            Leave
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
