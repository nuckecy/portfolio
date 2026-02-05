import React from 'react';
import { STYLE, typeStyle } from '../styles/tokens';
import { navIcons } from '../styles/icons';
import { usePresentation } from '../hooks/usePresentation';
import { slideData } from '../data/slides';

// Import all slide components
import {
  SlideHero, SlideAbout, SlideCost, SlideWhyRepeats, SlideTopFive,
  SlideResearch, SlideInsight1, SlideInsight2, SlideInsight3, SlideEntryPoints,
  SlidePrinciples, SlideDecisions, SlideTesting, SlideStakeholders,
  SlideArchitecture, SlideIdentification, SlideFlows, SlideEscalation, SlideBeforeAfter,
  SlideResultsCustomer, SlideResultsBusiness, SlideMetricsComparison,
  SlideKeyLesson, SlideClosing,
} from './slides';

// Map component names to actual components
const componentMap = {
  SlideHero, SlideAbout, SlideCost, SlideWhyRepeats, SlideTopFive,
  SlideResearch, SlideInsight1, SlideInsight2, SlideInsight3, SlideEntryPoints,
  SlidePrinciples, SlideDecisions, SlideTesting, SlideStakeholders,
  SlideArchitecture, SlideIdentification, SlideFlows, SlideEscalation, SlideBeforeAfter,
  SlideResultsCustomer, SlideResultsBusiness, SlideMetricsComparison,
  SlideKeyLesson, SlideClosing,
};

// Build slides array with resolved components
const slides = slideData.map((s) => ({
  ...s,
  component: componentMap[s.componentName],
}));

const { width: BASE_W, height: BASE_H } = STYLE.canvas;
const CONTROLS_H = 56;
const PROGRESS_H = 3;
const BOTTOM_H = CONTROLS_H + PROGRESS_H;

export default function PresentationApp() {
  const {
    currentSlide, setCurrentSlide,
    isPresenting, showNotes, setShowNotes,
    isMobilePortrait, windowSize,
    goNext, goPrev, togglePresent, exitPresent,
    onTouchStart, onTouchEnd, progress,
  } = usePresentation(slides.length);

  const CurrentSlideComponent = slides[currentSlide].component;

  const btnStyle = (active = false, disabled = false) => ({
    background: active ? STYLE.colors.surface : 'none',
    border: `1px solid ${active ? STYLE.colors.gray700 : STYLE.colors.border}`,
    borderRadius: STYLE.radius.small,
    padding: '6px 10px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    color: disabled ? STYLE.colors.gray800 : active ? STYLE.colors.white : STYLE.colors.gray500,
    display: 'flex', alignItems: 'center', gap: '6px',
    fontFamily: STYLE.fonts.body, fontSize: '12px', fontWeight: 300,
    transition: 'all 0.15s ease',
  });

  // ─── PRESENT MODE: Mobile portrait ───
  if (isPresenting && isMobilePortrait) {
    return (
      <div style={{
        width: '100vw', height: '100vh', background: '#000',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24,
      }}>
        <div style={{ color: STYLE.colors.gray500, animation: 'spin 2s ease-in-out infinite' }}>{navIcons.rotate}</div>
        <p style={{ ...typeStyle('paragraph2', STYLE.colors.gray500), textAlign: 'center', padding: '0 40px' }}>
          Rotate your device to landscape for the best viewing experience
        </p>
        <button onClick={exitPresent} style={{ ...btnStyle(), marginTop: 16, padding: '10px 20px' }}>Exit presentation</button>
        <style>{`@keyframes spin { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(-90deg); } }`}</style>
      </div>
    );
  }

  // ─── PRESENT MODE: Fullscreen ───
  if (isPresenting) {
    const availH = windowSize.h - BOTTOM_H;
    const fitScale = Math.min(windowSize.w / BASE_W, availH / BASE_H);

    return (
      <div style={{ width: '100vw', height: '100vh', background: '#000', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Slide area */}
        <div
          onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
          onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); if (e.clientX - r.left > r.width / 2) goNext(); else goPrev(); }}
          style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'pointer' }}
        >
          <div style={{
            width: BASE_W, height: BASE_H,
            transform: `scale(${fitScale})`, transformOrigin: 'center center',
            background: STYLE.colors.bg, flexShrink: 0,
          }}>
            <CurrentSlideComponent />
          </div>
        </div>

        {/* Progress + Controls */}
        <div style={{ height: PROGRESS_H, background: 'rgba(255,255,255,0.1)', flexShrink: 0 }}>
          <div style={{ height: '100%', width: `${progress}%`, background: STYLE.colors.white, transition: 'width 0.3s ease' }} />
        </div>
        <div style={{
          height: CONTROLS_H, background: '#0A0A0A', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px',
        }}>
          <span style={{ fontFamily: STYLE.fonts.heading, fontSize: 14, fontWeight: 400, color: STYLE.colors.gray500 }}>
            {currentSlide + 1} / {slides.length}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }} style={{
                width: i === currentSlide ? 24 : 8, height: 8, borderRadius: 4,
                background: i === currentSlide ? STYLE.colors.white : STYLE.colors.gray800,
                border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0,
              }} />
            ))}
          </div>
          <button onClick={(e) => { e.stopPropagation(); exitPresent(); }} style={btnStyle()}>
            {navIcons.shrink}<span>Exit</span>
          </button>
        </div>
      </div>
    );
  }

  // ─── NORMAL MODE ───
  return (
    <div style={{
      width: '100%', minHeight: '100vh', background: '#0A0A0A',
      display: 'flex', flexDirection: 'column',
      fontFamily: STYLE.fonts.body, userSelect: 'none',
    }}>
      {/* Slide canvas */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        <div
          style={{
            width: BASE_W, height: BASE_H, background: STYLE.colors.bg,
            position: 'relative', cursor: 'pointer', margin: '0 auto',
          }}
          onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); if (e.clientX - r.left > r.width / 2) goNext(); else goPrev(); }}
        >
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Notes panel */}
      {showNotes && (
        <div style={{ maxHeight: 240, background: '#0D0D0D', borderTop: `1px solid ${STYLE.colors.border}`, padding: '16px 32px', overflowY: 'auto', flexShrink: 0 }}>
          <span style={{ fontFamily: STYLE.fonts.heading, fontSize: 12, fontWeight: 700, color: STYLE.colors.gray700, letterSpacing: '2px', textTransform: 'uppercase' }}>Speaker Notes</span>
          <p style={{ fontFamily: STYLE.fonts.body, fontSize: 15, fontWeight: 300, color: STYLE.colors.gray400, lineHeight: 1.7, margin: '8px 0 0 0', whiteSpace: 'pre-wrap' }}>
            {slides[currentSlide].notes}
          </p>
        </div>
      )}

      {/* Progress bar */}
      <div style={{ height: 3, background: STYLE.colors.border, flexShrink: 0 }}>
        <div style={{ height: '100%', width: `${progress}%`, background: STYLE.colors.white, transition: 'width 0.3s ease' }} />
      </div>

      {/* Controls */}
      <div style={{
        height: 56, background: '#0A0A0A', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontFamily: STYLE.fonts.heading, fontSize: 14, fontWeight: 400, color: STYLE.colors.gray500 }}>
            {currentSlide + 1} / {slides.length}
          </span>
          <span style={{ fontFamily: STYLE.fonts.body, fontSize: 13, fontWeight: 300, color: STYLE.colors.gray700 }}>
            {slides[currentSlide].title}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {slides.map((_, i) => (
            <button key={i} onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }} style={{
              width: i === currentSlide ? 24 : 8, height: 8, borderRadius: 4,
              background: i === currentSlide ? STYLE.colors.white : STYLE.colors.gray800,
              border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0,
            }} />
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={(e) => { e.stopPropagation(); goPrev(); }} disabled={currentSlide === 0} style={btnStyle(false, currentSlide === 0)}>{navIcons.chevLeft}</button>
          <button onClick={(e) => { e.stopPropagation(); goNext(); }} disabled={currentSlide === slides.length - 1} style={btnStyle(false, currentSlide === slides.length - 1)}>{navIcons.chevRight}</button>
          <div style={{ width: 1, height: 24, background: STYLE.colors.border, margin: '0 4px' }} />
          <button onClick={(e) => { e.stopPropagation(); setShowNotes((v) => !v); }} style={btnStyle(showNotes)}>{navIcons.notes}<span>Notes</span></button>
          <button onClick={(e) => { e.stopPropagation(); togglePresent(); }} style={btnStyle()}>{navIcons.expand}<span>Present</span></button>
        </div>
      </div>
    </div>
  );
}
