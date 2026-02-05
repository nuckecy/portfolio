'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import { STYLE } from '../styles/tokens';

interface CanvasModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export const CanvasModal: React.FC<CanvasModalProps> = ({ isOpen, onClose, src, alt }) => {
  const [zoom, setZoom] = React.useState(1);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);

  // Reset state when modal opens/closes
  React.useEffect(() => {
    if (!isOpen) {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
      setIsDragging(false);
    }
  }, [isOpen]);

  // Keyboard handler
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Block presentation navigation keys
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
        setZoom(z => Math.min(5, z + 0.25));
      }
      // - to zoom out
      if (e.key === '-') {
        e.preventDefault();
        setZoom(z => Math.max(0.25, z - 0.25));
      }
      // 0 to reset
      if (e.key === '0') {
        e.preventDefault();
        setZoom(1);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [isOpen, onClose]);

  // Mouse wheel zoom
  const handleWheel = React.useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom(z => Math.min(5, Math.max(0.25, z + delta)));
  }, []);

  // Drag to pan
  const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left click
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  }, [position]);

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  }, [isDragging, dragStart]);

  const handleMouseUp = React.useCallback(() => {
    setIsDragging(false);
  }, []);

  // Also handle mouse leaving the window
  React.useEffect(() => {
    if (!isOpen) return;

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [isOpen]);

  // Extract filename from src path
  const filename = src.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'Image';

  // Fit to width function
  const fitToWidth = React.useCallback(() => {
    if (!imageRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const imageNaturalWidth = imageRef.current.naturalWidth;

    // Calculate zoom to fit width with some padding
    const newZoom = (containerWidth * 0.95) / imageNaturalWidth;
    setZoom(Math.min(5, Math.max(0.1, newZoom)));
    setPosition({ x: 0, y: 0 });
  }, []);

  const zoomIn = () => setZoom(z => Math.min(5, z + 0.25));
  const zoomOut = () => setZoom(z => Math.max(0.25, z - 0.25));

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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.92)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 9999,
      }}
    >
      {/* Top control bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          background: 'rgba(0, 0, 0, 0.5)',
          flexShrink: 0,
        }}
      >
        {/* Title */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            onClick={zoomOut}
            disabled={zoom <= 0.25}
            style={{
              ...buttonStyle,
              opacity: zoom <= 0.25 ? 0.4 : 1,
              cursor: zoom <= 0.25 ? 'not-allowed' : 'pointer',
            }}
            onMouseEnter={(e) => {
              if (zoom > 0.25) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
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
            {Math.round(zoom * 100)}%
          </div>

          <button
            onClick={zoomIn}
            disabled={zoom >= 5}
            style={{
              ...buttonStyle,
              opacity: zoom >= 5 ? 0.4 : 1,
              cursor: zoom >= 5 ? 'not-allowed' : 'pointer',
            }}
            onMouseEnter={(e) => {
              if (zoom < 5) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
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
            onClick={fitToWidth}
            style={{
              ...buttonStyle,
              width: 'auto',
              padding: '8px 16px',
              fontFamily: STYLE.fonts.body,
              fontSize: 13,
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            title="Fit to width"
          >
            Fit Width
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

      {/* Canvas area */}
      <div
        ref={containerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          flex: 1,
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          draggable={false}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            transformOrigin: 'center center',
            maxWidth: 'none',
            maxHeight: 'none',
            width: 'auto',
            height: 'auto',
            pointerEvents: 'none',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
          }}
        />
      </div>

      {/* Bottom help text */}
      <div
        style={{
          padding: '12px 24px',
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
          flexShrink: 0,
        }}
      >
        <span style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontFamily: STYLE.fonts.body,
          fontSize: 13,
        }}>
          Scroll to zoom
        </span>
        <span style={{
          color: 'rgba(255, 255, 255, 0.3)',
        }}>•</span>
        <span style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontFamily: STYLE.fonts.body,
          fontSize: 13,
        }}>
          Drag to pan
        </span>
        <span style={{
          color: 'rgba(255, 255, 255, 0.3)',
        }}>•</span>
        <span style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontFamily: STYLE.fonts.body,
          fontSize: 13,
        }}>
          Esc to close
        </span>
      </div>
    </div>,
    document.body
  );
};
