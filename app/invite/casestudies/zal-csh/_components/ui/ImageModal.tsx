'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import { STYLE } from '../styles/tokens';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src, alt }) => {
  const [zoomLevel, setZoomLevel] = React.useState(0.75);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Reset zoom when modal opens/closes
  React.useEffect(() => {
    if (!isOpen) {
      setZoomLevel(0.75);
    }
  }, [isOpen]);

  // Block keyboard navigation when modal is open
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Block navigation keys
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' ', 'Space'].includes(e.key)) {
        e.stopPropagation();
        e.preventDefault();
      }
      // Escape to close
      if (e.key === 'Escape') {
        onClose();
      }
      // + to zoom in
      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        setZoomLevel(z => Math.min(3, z + 0.25));
      }
      // - to zoom out
      if (e.key === '-') {
        e.preventDefault();
        setZoomLevel(z => Math.max(0.5, z - 0.25));
      }
      // 0 to reset
      if (e.key === '0') {
        e.preventDefault();
        setZoomLevel(0.75);
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [isOpen, onClose]);

  const zoomIn = () => setZoomLevel(z => Math.min(3, z + 0.25));
  const zoomOut = () => setZoomLevel(z => Math.max(0.5, z - 0.25));
  const resetZoom = () => setZoomLevel(0.75);

  // Extract filename from src path (without extension)
  const filename = src.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'Image';

  const buttonStyle: React.CSSProperties = {
    width: 40,
    height: 40,
    borderRadius: 8,
    background: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    transition: 'background 0.2s ease',
  };

  if (!isOpen || typeof document === 'undefined') return null;

  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 9999,
      }}
    >
      {/* Top control bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          background: 'rgba(0, 0, 0, 0.5)',
          flexShrink: 0,
        }}
      >
        {/* Title with pill styling */}
        <div
          style={{
            color: 'white',
            fontFamily: STYLE.fonts.body,
            fontSize: 16,
            fontWeight: 500,
            padding: '8px 16px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 20,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '40%',
          }}
        >
          {filename}
        </div>

        {/* Zoom controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, justifyContent: 'center' }}>
          <button
            onClick={zoomOut}
            disabled={zoomLevel <= 0.5}
            style={{
              ...buttonStyle,
              opacity: zoomLevel <= 0.5 ? 0.4 : 1,
              cursor: zoomLevel <= 0.5 ? 'not-allowed' : 'pointer',
            }}
            onMouseEnter={(e) => {
              if (zoomLevel > 0.5) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            title="Zoom out (−)"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>

          <div
            style={{
              minWidth: 64,
              padding: '8px 12px',
              borderRadius: 8,
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontFamily: STYLE.fonts.body,
              fontSize: 14,
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            {Math.round(zoomLevel * 100)}%
          </div>

          <button
            onClick={zoomIn}
            disabled={zoomLevel >= 3}
            style={{
              ...buttonStyle,
              opacity: zoomLevel >= 3 ? 0.4 : 1,
              cursor: zoomLevel >= 3 ? 'not-allowed' : 'pointer',
            }}
            onMouseEnter={(e) => {
              if (zoomLevel < 3) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            title="Zoom in (+)"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>

          <button
            onClick={resetZoom}
            disabled={zoomLevel === 0.75}
            style={{
              ...buttonStyle,
              width: 'auto',
              padding: '8px 16px',
              opacity: zoomLevel === 0.75 ? 0.4 : 1,
              cursor: zoomLevel === 0.75 ? 'not-allowed' : 'pointer',
              fontFamily: STYLE.fonts.body,
              fontSize: 13,
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              if (zoomLevel !== 1) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            title="Reset zoom (0)"
          >
            Reset
          </button>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          }}
          title="Close (Esc)"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Scrollable image container */}
      <div
        ref={containerRef}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
        style={{
          flex: 1,
          overflow: 'auto',
          position: 'relative',
        }}
      >
        {/* Inner wrapper that expands with zoom to create scrollable area */}
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
          style={{
            minWidth: `${100 * zoomLevel}%`,
            minHeight: `${100 * zoomLevel}%`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
          }}
        >
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            draggable={false}
            style={{
              maxWidth: `${90 * zoomLevel}%`,
              maxHeight: `${90 * zoomLevel}%`,
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              border: 'none',
              outline: 'none',
              cursor: zoomLevel > 1 ? 'grab' : 'default',
              transition: 'max-width 0.2s ease, max-height 0.2s ease',
            }}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};
