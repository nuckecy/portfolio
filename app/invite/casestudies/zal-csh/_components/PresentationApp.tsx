'use client';

import React from 'react';
import { STYLE } from './styles/tokens';
import { navIcons } from './styles/icons';
import { usePresentation } from './hooks/usePresentation';
import { slideData } from './data/slides';
import { ExitModal } from './ui/ExitModal';

// Import all slide components
import {
  SlideHero, SlideAbout, SlideCost, SlideWhyRepeats, SlideTopFive,
  SlideResearch, SlideInsight1, SlideInsight2, SlideInsight3, SlideEntryPoints,
  SlidePrinciples, SlideDecisions, SlideTesting, SlideStakeholders,
  SlideArchitecture, SlideIdentification, SlideFlows, SlideEscalation, SlideBeforeAfter,
  SlideResultsCustomer, SlideResultsBusiness, SlideMetricsComparison,
  SlideKeyLesson, SlideClosing, SlideThankYou,
} from './slides';

// Map component names to actual components
const componentMap: Record<string, React.FC> = {
  SlideHero, SlideAbout, SlideCost, SlideWhyRepeats, SlideTopFive,
  SlideResearch, SlideInsight1, SlideInsight2, SlideInsight3, SlideEntryPoints,
  SlidePrinciples, SlideDecisions, SlideTesting, SlideStakeholders,
  SlideArchitecture, SlideIdentification, SlideFlows, SlideEscalation, SlideBeforeAfter,
  SlideResultsCustomer, SlideResultsBusiness, SlideMetricsComparison,
  SlideKeyLesson, SlideClosing, SlideThankYou,
};

// Build slides array with resolved components, filtering out hidden slides
const slides = slideData
  .filter((s) => !s.hidden)
  .map((s) => ({
    ...s,
    component: componentMap[s.componentName],
  }));

const { width: BASE_W, height: BASE_H } = STYLE.canvas;
const CONTROLS_H = 56;
const PROGRESS_H = 0.5;
const BOTTOM_H = CONTROLS_H + PROGRESS_H;

export default function PresentationApp() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showPresentTooltip, setShowPresentTooltip] = React.useState(false);
  const [showPrevTooltip, setShowPrevTooltip] = React.useState(false);
  const [showNextTooltip, setShowNextTooltip] = React.useState(false);
  const [showExitTooltip, setShowExitTooltip] = React.useState(false);
  const [showExitModal, setShowExitModal] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  
  const {
    currentSlide, setCurrentSlide,
    isPresenting, showNotes, setShowNotes,
    windowSize, isMounted,
    goNext, goPrev, togglePresent, exitPresent,
    onTouchStart, onTouchEnd, progress,
  } = usePresentation(slides.length);

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const btnStyle = (active = false, disabled = false): React.CSSProperties => ({
    background: active ? STYLE.colors.surface : 'none',
    border: `1px solid ${active ? STYLE.colors.gray700 : STYLE.colors.border}`,
    borderRadius: STYLE.radius.small,
    padding: '8px 12px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    color: disabled ? STYLE.colors.gray700 : active ? STYLE.colors.white : STYLE.colors.gray500,
    display: 'flex', alignItems: 'center', gap: '6px',
    fontFamily: STYLE.fonts.body, fontSize: '13px', fontWeight: 400,
    transition: 'all 0.15s ease',
    outline: 'none',
  });

  // Show loading state until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div style={{ width: '100vw', height: '100vh', background: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 40, height: 40, border: '3px solid #2A2A2A', borderTopColor: '#E8932F', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const CurrentSlideComponent = slides[currentSlide]?.component;

  // Safety check - if no component found, show error
  if (!CurrentSlideComponent) {
    return (
      <div style={{ width: '100vw', height: '100vh', background: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
        <div style={{ color: '#E8932F', fontSize: 24, fontFamily: 'sans-serif' }}>Slide component not found</div>
        <div style={{ color: '#888', fontSize: 14, fontFamily: 'sans-serif' }}>Slide {currentSlide + 1}: {slides[currentSlide]?.componentName || 'Unknown'}</div>
      </div>
    );
  }

  // PRESENT MODE: Fullscreen
  // Note: Portrait mobile is now handled by CSS rotation in layout.tsx - content always displays in landscape
  if (isPresenting) {
    // In present mode, use FULL viewport for slide scaling (controls will overlay at bottom)
    const fitScale = Math.min(windowSize.w / BASE_W, windowSize.h / BASE_H);

    return (
      <div style={{ width: '100vw', height: '100vh', background: '#000', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Focus styles */}
        <style>{`
          .slide-nav-dot:focus-visible { outline: 2px solid ${STYLE.colors.accent}; outline-offset: 2px; }
          .slide-btn:focus-visible { outline: 2px solid ${STYLE.colors.accent}; outline-offset: 2px; }
          .slide-menu-dropdown::-webkit-scrollbar { display: none; }
          @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }
        `}</style>

        {/* Slide area */}
        <main
          role="region"
          aria-label={`Slide ${currentSlide + 1} of ${slides.length}: ${slides[currentSlide].title}`}
          aria-live="polite"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'ArrowRight' || e.key === ' ') goNext(); if (e.key === 'ArrowLeft') goPrev(); }}
          onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
          style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', outline: 'none', position: 'relative' }}
        >
          {/* Left chevron */}
          {currentSlide > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous slide"
              style={{
                position: 'absolute',
                left: 24,
                zIndex: 10,
                background: 'rgba(0,0,0,0.5)',
                border: `1px solid ${STYLE.colors.border}`,
                borderRadius: '50%',
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: 0.6,
                transition: 'opacity 0.2s ease',
                color: STYLE.colors.white,
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}
          
          {/* Right chevron */}
          {currentSlide < slides.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next slide"
              style={{
                position: 'absolute',
                right: 24,
                zIndex: 10,
                background: 'rgba(0,0,0,0.5)',
                border: `1px solid ${STYLE.colors.border}`,
                borderRadius: '50%',
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: 0.6,
                transition: 'opacity 0.2s ease',
                color: STYLE.colors.white,
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          <div style={{
            width: BASE_W, height: BASE_H,
            transform: `scale(${fitScale})`, transformOrigin: 'center center',
            background: STYLE.colors.bg, flexShrink: 0,
          }}>
            <CurrentSlideComponent />
          </div>
        </main>

        {/* Progress + Controls */}
        <div
          role="progressbar"
          aria-valuenow={currentSlide + 1}
          aria-valuemin={1}
          aria-valuemax={slides.length}
          aria-label="Presentation progress"
          style={{ height: PROGRESS_H, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }}
        >
          <div style={{ height: '100%', width: `${progress}%`, background: 'rgba(255,255,255,0.25)', transition: 'width 0.3s ease' }} />
        </div>
        <nav aria-label="Presentation controls" style={{
          height: CONTROLS_H, background: '#0A0A0A', flexShrink: 0,
          display: 'flex', alignItems: 'center', padding: '0 24px',
          position: 'relative',
        }}>
          {/* LEFT: Menu + Info */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Menu button */}
            <button
              onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }}
              aria-label="Toggle slide menu"
              aria-expanded={isMenuOpen}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '6px 8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: STYLE.colors.gray500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = STYLE.colors.white}
              onMouseLeave={(e) => e.currentTarget.style.color = STYLE.colors.gray500}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            
            {/* Slide counter */}
            <span aria-live="polite" style={{ fontFamily: STYLE.fonts.heading, fontSize: 14, fontWeight: 400, color: STYLE.colors.gray500 }}>
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
          
          {/* Dropdown menu */}
          {isMenuOpen && (
            <div
              style={{
                position: 'absolute',
                bottom: CONTROLS_H + 8,
                left: 24,
                background: '#1A1A1A',
                border: `1px solid ${STYLE.colors.border}`,
                borderRadius: 12,
                padding: '12px 0',
                minWidth: 280,
                maxHeight: 400,
                overflowY: 'auto',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                zIndex: 1000,
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
              className="slide-menu-dropdown"
              onClick={(e) => e.stopPropagation()}
            >
              {slides.map((slide, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(i);
                    setIsMenuOpen(false);
                  }}
                  style={{
                    width: '100%',
                    padding: '10px 20px',
                    background: i === currentSlide ? 'rgba(255,255,255,0.08)' : 'transparent',
                    border: 'none',
                    color: i === currentSlide ? STYLE.colors.white : STYLE.colors.gray400,
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: STYLE.fonts.body,
                    fontSize: 14,
                    fontWeight: i === currentSlide ? 500 : 400,
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                  }}
                  onMouseEnter={(e) => {
                    if (i !== currentSlide) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                      e.currentTarget.style.color = STYLE.colors.white;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (i !== currentSlide) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = STYLE.colors.gray400;
                    }
                  }}
                >
                  <span style={{ color: STYLE.colors.gray600, minWidth: 32, fontFamily: STYLE.fonts.heading }}>
                    {i + 1}
                  </span>
                  <span style={{ flex: 1 }}>{slide.title}</span>
                </button>
              ))}
            </div>
          )}

          {/* CENTER: Page Indicators */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div role="tablist" aria-label="Slide navigation" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {(() => {
                const isMobile = windowSize.w < 1024 || windowSize.h < 500;
                const total = slides.length;

                // On mobile, show only 5 indicators: home + 4 surrounding slides
                if (isMobile) {
                  const visibleCount = 4;
                  let start: number, end: number;

                  if (currentSlide <= 2) {
                    start = 1;
                    end = Math.min(visibleCount, total - 1);
                  } else if (currentSlide >= total - 3) {
                    start = Math.max(1, total - visibleCount);
                    end = total - 1;
                  } else {
                    start = currentSlide - 1;
                    end = currentSlide + 2;
                  }

                  const items: React.ReactNode[] = [];

                  // Always add home button
                  items.push(
                    <button
                      key={0}
                      className="slide-nav-dot"
                      role="tab"
                      aria-selected={0 === currentSlide}
                      aria-label="Go to first slide"
                      onClick={(e) => { e.stopPropagation(); setCurrentSlide(0); }}
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: 0 === currentSlide ? 'rgba(255,255,255,0.5)' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: STYLE.fonts.heading,
                        fontSize: 11,
                        fontWeight: 500,
                        color: 0 === currentSlide ? '#0A0A0A' : 'rgba(255,255,255,0.25)',
                        transition: 'all 0.2s ease',
                        padding: 0,
                      }}
                    >
                      {navIcons.home}
                    </button>
                  );

                  if (start > 1) {
                    items.push(
                      <span key="ellipsis-start" style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11, padding: '0 2px' }}>…</span>
                    );
                  }

                  for (let i = start; i <= end; i++) {
                    items.push(
                      <button
                        key={i}
                        className="slide-nav-dot"
                        role="tab"
                        aria-selected={i === currentSlide}
                        aria-label={`Go to slide ${i + 1}: ${slides[i].title}`}
                        onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          background: i === currentSlide ? 'rgba(255,255,255,0.5)' : 'transparent',
                          border: i === currentSlide ? '1px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.15)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: STYLE.fonts.heading,
                          fontSize: 11,
                          fontWeight: 500,
                          color: i === currentSlide ? '#0A0A0A' : 'rgba(255,255,255,0.25)',
                          transition: 'all 0.2s ease',
                          padding: 0,
                        }}
                      >
                        {i + 1}
                      </button>
                    );
                  }

                  if (end < total - 1) {
                    items.push(
                      <span key="ellipsis-end" style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11, padding: '0 2px' }}>…</span>
                    );
                  }

                  // Add exit button at the end
                  items.push(
                    <button
                      key="exit"
                      className="slide-nav-dot"
                      aria-label="Exit presentation"
                      onClick={(e) => { e.stopPropagation(); setShowExitModal(true); }}
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255,255,255,0.25)',
                        transition: 'all 0.2s ease',
                        padding: 0,
                        marginLeft: 4,
                      }}
                    >
                      {navIcons.exit}
                    </button>
                  );

                  return items;
                }

                // Desktop: show all slides
                return (
                  <>
                    {slides.map((slide, i) => (
                      <button
                        key={i}
                        className="slide-nav-dot"
                        role="tab"
                        aria-selected={i === currentSlide}
                        aria-label={i === 0 ? "Go to first slide" : `Go to slide ${i + 1}: ${slide.title}`}
                        onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          background: i === currentSlide ? 'rgba(255,255,255,0.5)' : 'transparent',
                          border: i === 0 ? 'none' : (i === currentSlide ? '1px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.15)'),
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: STYLE.fonts.heading,
                          fontSize: 11,
                          fontWeight: 500,
                          color: i === currentSlide ? '#0A0A0A' : 'rgba(255,255,255,0.25)',
                          transition: 'all 0.2s ease',
                          padding: 0,
                        }}
                      >
                        {i === 0 ? navIcons.home : i + 1}
                      </button>
                    ))}
                    {/* Exit button */}
                    <button
                      key="exit"
                      className="slide-nav-dot"
                      aria-label="Exit presentation"
                      onClick={(e) => { e.stopPropagation(); setShowExitModal(true); }}
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255,255,255,0.25)',
                        transition: 'all 0.2s ease',
                        padding: 0,
                        marginLeft: 4,
                      }}
                    >
                      {navIcons.exit}
                    </button>
                  </>
                );
              })()}
            </div>
          </div>

          {/* RIGHT: Buttons */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <div style={{ position: 'relative' }}>
              <button
                className="slide-btn"
                onClick={(e) => { e.stopPropagation(); exitPresent(); }}
                aria-label="Exit presentation mode"
                style={btnStyle()}
                onMouseEnter={() => setShowExitTooltip(true)}
                onMouseLeave={() => setShowExitTooltip(false)}
              >
                {navIcons.shrink}<span>Exit</span>
              </button>
              {showExitTooltip && (
                <div style={{
                  position: 'absolute',
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginBottom: 8,
                  padding: '6px 12px',
                  background: '#1A1A1A',
                  border: `1px solid ${STYLE.colors.border}`,
                  borderRadius: 6,
                  whiteSpace: 'nowrap',
                  fontSize: 12,
                  fontFamily: STYLE.fonts.body,
                  color: STYLE.colors.gray400,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  zIndex: 1000,
                }}>
                  Press <span style={{ color: STYLE.colors.white, fontWeight: 500 }}>Esc</span> to exit
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }

  // NORMAL MODE
  // Calculate scale to fit slide in available viewport space
  const notesHeight = showNotes ? 240 : 0;
  const availH = windowSize.h - BOTTOM_H - notesHeight;
  const fitScale = Math.min(windowSize.w / BASE_W, availH / BASE_H);

  return (
    <div style={{
      width: '100%', height: '100vh', background: '#0A0A0A',
      display: 'flex', flexDirection: 'column',
      fontFamily: STYLE.fonts.body, userSelect: 'none',
      overflow: 'hidden',
    }}>
      {/* Focus and reduced motion styles */}
      <style>{`
        .slide-nav-dot:focus-visible { outline: 2px solid ${STYLE.colors.accent}; outline-offset: 2px; }
        .slide-btn:focus-visible { outline: 2px solid ${STYLE.colors.accent}; outline-offset: 2px; }
        @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }
      `}</style>

      {/* Slide canvas */}
      <main
        role="region"
        aria-label={`Slide ${currentSlide + 1} of ${slides.length}: ${slides[currentSlide].title}`}
        aria-live="polite"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext(); } if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); } }}
        style={{
          flex: 1,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          outline: 'none',
          position: 'relative',
        }}
      >
        {/* Left chevron */}
        {currentSlide > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous slide"
            style={{
              position: 'absolute',
              left: 24,
              zIndex: 10,
              background: 'rgba(0,0,0,0.5)',
              border: `1px solid ${STYLE.colors.border}`,
              borderRadius: '50%',
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              opacity: 0.6,
              transition: 'opacity 0.2s ease',
              color: STYLE.colors.white,
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}
        
        {/* Right chevron */}
        {currentSlide < slides.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next slide"
            style={{
              position: 'absolute',
              right: 24,
              zIndex: 10,
              background: 'rgba(0,0,0,0.5)',
              border: `1px solid ${STYLE.colors.border}`,
              borderRadius: '50%',
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              opacity: 0.6,
              transition: 'opacity 0.2s ease',
              color: STYLE.colors.white,
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}

        <div
          style={{
            width: BASE_W,
            height: BASE_H,
            transform: `scale(${fitScale})`,
            transformOrigin: 'center center',
            background: STYLE.colors.bg,
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <CurrentSlideComponent />
        </div>
      </main>

      {/* Notes panel */}
      {showNotes && (
        <aside aria-label="Speaker notes" style={{ maxHeight: 240, background: '#0D0D0D', borderTop: `1px solid ${STYLE.colors.border}`, padding: '16px 32px', overflowY: 'auto', flexShrink: 0 }}>
          <span style={{ fontFamily: STYLE.fonts.heading, fontSize: 12, fontWeight: 700, color: STYLE.colors.gray700, letterSpacing: '2px', textTransform: 'uppercase' }}>Speaker Notes</span>
          <p style={{ fontFamily: STYLE.fonts.body, fontSize: 15, fontWeight: 300, color: STYLE.colors.gray400, lineHeight: 1.7, margin: '8px 0 0 0', whiteSpace: 'pre-wrap' }}>
            {slides[currentSlide].notes}
          </p>
        </aside>
      )}

      {/* Progress bar */}
      <div
        role="progressbar"
        aria-valuenow={currentSlide + 1}
        aria-valuemin={1}
        aria-valuemax={slides.length}
        aria-label="Presentation progress"
        style={{ height: PROGRESS_H, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }}
      >
        <div style={{ height: '100%', width: `${progress}%`, background: 'rgba(255,255,255,0.25)', transition: 'width 0.3s ease' }} />
      </div>

      {/* Controls */}
      <nav aria-label="Presentation controls" style={{
        height: 56, background: '#0A0A0A', flexShrink: 0,
        display: 'flex', alignItems: 'center', padding: '0 24px',
        position: 'relative',
      }}>
        {/* LEFT: Menu + Info */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12 }} ref={menuRef}>
          {/* Menu button */}
          <button
            onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }}
            aria-label="Toggle slide menu"
            aria-expanded={isMenuOpen}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '6px 8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: STYLE.colors.gray500,
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = STYLE.colors.white}
            onMouseLeave={(e) => e.currentTarget.style.color = STYLE.colors.gray500}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <span aria-live="polite" style={{ fontFamily: STYLE.fonts.heading, fontSize: 14, fontWeight: 400, color: STYLE.colors.gray500 }}>
            {currentSlide + 1} / {slides.length}
          </span>
          <span style={{ fontFamily: STYLE.fonts.body, fontSize: 13, fontWeight: 300, color: STYLE.colors.gray700 }}>
            {slides[currentSlide].title}
          </span>

          {/* Dropdown menu - inside menuRef so click-outside detection works correctly */}
          {isMenuOpen && (
          <div
            style={{
              position: 'absolute',
              bottom: 56 + 8,
              left: 24,
              background: '#1A1A1A',
              border: `1px solid ${STYLE.colors.border}`,
              borderRadius: 12,
              padding: '12px 0',
              minWidth: 280,
              maxHeight: 400,
              overflowY: 'auto',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              zIndex: 1000,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            className="slide-menu-dropdown"
            onClick={(e) => e.stopPropagation()}
          >
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(i);
                  setIsMenuOpen(false);
                }}
                style={{
                  width: '100%',
                  padding: '10px 20px',
                  background: i === currentSlide ? 'rgba(255,255,255,0.08)' : 'transparent',
                  border: 'none',
                  color: i === currentSlide ? STYLE.colors.white : STYLE.colors.gray400,
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: STYLE.fonts.body,
                  fontSize: 14,
                  fontWeight: i === currentSlide ? 500 : 400,
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
                onMouseEnter={(e) => {
                  if (i !== currentSlide) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.color = STYLE.colors.white;
                  }
                }}
                onMouseLeave={(e) => {
                  if (i !== currentSlide) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = STYLE.colors.gray400;
                  }
                }}
              >
                <span style={{ color: STYLE.colors.gray600, minWidth: 32, fontFamily: STYLE.fonts.heading }}>
                  {i + 1}
                </span>
                <span style={{ flex: 1 }}>{slide.title}</span>
              </button>
            ))}
          </div>
        )}
        </div>

        {/* CENTER: Page Indicators */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div role="tablist" aria-label="Slide navigation" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {(() => {
              const isMobile = windowSize.w < 1024 || windowSize.h < 500;
              const total = slides.length;

              // On mobile, show only 5 indicators: home + 4 surrounding slides
              if (isMobile) {
                const visibleCount = 4; // excluding home
                let start: number, end: number;

                // Calculate range around current slide
                if (currentSlide <= 2) {
                  // Near start: show 1-4
                  start = 1;
                  end = Math.min(visibleCount, total - 1);
                } else if (currentSlide >= total - 3) {
                  // Near end: show last 4
                  start = Math.max(1, total - visibleCount);
                  end = total - 1;
                } else {
                  // Middle: center around current
                  start = currentSlide - 1;
                  end = currentSlide + 2;
                }

                const items: React.ReactNode[] = [];

                // Always add home button
                items.push(
                  <button
                    key={0}
                    className="slide-nav-dot"
                    role="tab"
                    aria-selected={0 === currentSlide}
                    aria-label="Go to first slide"
                    onClick={(e) => { e.stopPropagation(); setCurrentSlide(0); }}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: STYLE.fonts.heading,
                      fontSize: 11,
                      fontWeight: 500,
                      color: 0 === currentSlide ? STYLE.colors.white : 'rgba(255,255,255,0.25)',
                      transition: 'all 0.2s ease',
                      padding: 0,
                    }}
                  >
                    {navIcons.home}
                  </button>
                );

                // Add ellipsis if there's a gap after home
                if (start > 1) {
                  items.push(
                    <span key="ellipsis-start" style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11, padding: '0 2px' }}>…</span>
                  );
                }

                // Add visible slide numbers
                for (let i = start; i <= end; i++) {
                  items.push(
                    <button
                      key={i}
                      className="slide-nav-dot"
                      role="tab"
                      aria-selected={i === currentSlide}
                      aria-label={`Go to slide ${i + 1}: ${slides[i].title}`}
                      onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: STYLE.fonts.heading,
                        fontSize: 11,
                        fontWeight: 500,
                        color: i === currentSlide ? STYLE.colors.white : 'rgba(255,255,255,0.25)',
                        transition: 'all 0.2s ease',
                        padding: 0,
                      }}
                    >
                      {i + 1}
                    </button>
                  );
                }

                // Add ellipsis if there are more slides after
                if (end < total - 1) {
                  items.push(
                    <span key="ellipsis-end" style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11, padding: '0 2px' }}>…</span>
                  );
                }

                // Add exit button at the end
                items.push(
                  <button
                    key="exit"
                    className="slide-nav-dot"
                    aria-label="Exit presentation"
                    onClick={(e) => { e.stopPropagation(); setShowExitModal(true); }}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255,255,255,0.25)',
                      transition: 'all 0.2s ease',
                      padding: 0,
                      marginLeft: 4,
                    }}
                  >
                    {navIcons.exit}
                  </button>
                );

                return items;
              }

              // Desktop: show all slides
              return (
                <>
                  {slides.map((slide, i) => (
                    <button
                      key={i}
                      className="slide-nav-dot"
                      role="tab"
                      aria-selected={i === currentSlide}
                      aria-label={i === 0 ? "Go to first slide" : `Go to slide ${i + 1}: ${slide.title}`}
                      onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: STYLE.fonts.heading,
                        fontSize: 11,
                        fontWeight: 500,
                        color: i === currentSlide ? STYLE.colors.white : 'rgba(255,255,255,0.25)',
                        transition: 'all 0.2s ease',
                        padding: 0,
                      }}
                    >
                      {i === 0 ? navIcons.home : i + 1}
                    </button>
                  ))}
                  {/* Exit button */}
                  <button
                    key="exit"
                    className="slide-nav-dot"
                    aria-label="Exit presentation"
                    onClick={(e) => { e.stopPropagation(); setShowExitModal(true); }}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255,255,255,0.25)',
                      transition: 'all 0.2s ease',
                      padding: 0,
                      marginLeft: 4,
                    }}
                  >
                    {navIcons.exit}
                  </button>
                </>
              );
            })()}
          </div>
        </div>

        {/* RIGHT: Buttons */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8 }}>
          <div style={{ position: 'relative' }}>
            <button
              className="slide-btn"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              disabled={currentSlide === 0}
              aria-label="Previous slide"
              style={{
                ...btnStyle(false, currentSlide === 0),
                opacity: currentSlide === 0 ? 0.4 : 1,
              }}
              onMouseEnter={() => setShowPrevTooltip(true)}
              onMouseLeave={() => setShowPrevTooltip(false)}
            >
              {navIcons.chevLeft}
            </button>
            {showPrevTooltip && currentSlide > 0 && (
              <div style={{
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginBottom: 8,
                padding: '6px 12px',
                background: '#1A1A1A',
                border: `1px solid ${STYLE.colors.border}`,
                borderRadius: 6,
                whiteSpace: 'nowrap',
                fontSize: 12,
                fontFamily: STYLE.fonts.body,
                color: STYLE.colors.gray400,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                zIndex: 1000,
              }}>
                Press <span style={{ color: STYLE.colors.white, fontWeight: 500 }}>←</span> for previous
              </div>
            )}
          </div>
          <div style={{ position: 'relative' }}>
            <button
              className="slide-btn"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              disabled={currentSlide === slides.length - 1}
              aria-label="Next slide"
              style={{
                ...btnStyle(false, currentSlide === slides.length - 1),
                opacity: currentSlide === slides.length - 1 ? 0.4 : 1,
              }}
              onMouseEnter={() => setShowNextTooltip(true)}
              onMouseLeave={() => setShowNextTooltip(false)}
            >
              {navIcons.chevRight}
            </button>
            {showNextTooltip && currentSlide < slides.length - 1 && (
              <div style={{
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginBottom: 8,
                padding: '6px 12px',
                background: '#1A1A1A',
                border: `1px solid ${STYLE.colors.border}`,
                borderRadius: 6,
                whiteSpace: 'nowrap',
                fontSize: 12,
                fontFamily: STYLE.fonts.body,
                color: STYLE.colors.gray400,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                zIndex: 1000,
              }}>
                Press <span style={{ color: STYLE.colors.white, fontWeight: 500 }}>→</span> for next
              </div>
            )}
          </div>
          <div aria-hidden="true" style={{ width: 1, height: 24, background: STYLE.colors.border, margin: '0 4px' }} />
          <div style={{ position: 'relative' }}>
            <button
              className="slide-btn"
              onClick={(e) => { e.stopPropagation(); togglePresent(); }}
              aria-label="Enter presentation mode"
              style={btnStyle()}
              onMouseEnter={() => setShowPresentTooltip(true)}
              onMouseLeave={() => setShowPresentTooltip(false)}
            >
              {navIcons.expand}<span>Present</span>
            </button>
            {showPresentTooltip && (
              <div style={{
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginBottom: 8,
                padding: '6px 12px',
                background: '#1A1A1A',
                border: `1px solid ${STYLE.colors.border}`,
                borderRadius: 6,
                whiteSpace: 'nowrap',
                fontSize: 12,
                fontFamily: STYLE.fonts.body,
                color: STYLE.colors.gray400,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                zIndex: 1000,
              }}>
                Press <span style={{ color: STYLE.colors.white, fontWeight: 500 }}>F</span> to present
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Exit Modal */}
      <ExitModal isOpen={showExitModal} onClose={() => setShowExitModal(false)} />
    </div>
  );
}
