'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook encapsulating all presentation navigation logic.
 * Handles keyboard, touch, fullscreen, and mobile orientation.
 */
export function usePresentation(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const [windowSize, setWindowSize] = useState({
    w: typeof window !== 'undefined' ? window.innerWidth : 1920,
    h: typeof window !== 'undefined' ? window.innerHeight : 1080,
  });
  const touchStartX = useRef<number | null>(null);

  const goNext = useCallback(
    () => setCurrentSlide((s) => Math.min(s + 1, totalSlides - 1)),
    [totalSlides]
  );
  const goPrev = useCallback(
    () => setCurrentSlide((s) => Math.max(s - 1, 0)),
    []
  );

  const exitPresent = useCallback(async () => {
    try { await document.exitFullscreen?.(); } catch { /* ignore */ }
    try { (screen.orientation as any)?.unlock?.(); } catch { /* ignore */ }
    setIsPresenting(false);
  }, []);

  const togglePresent = useCallback(async () => {
    if (!isPresenting) {
      try { await document.documentElement.requestFullscreen?.(); } catch { /* ignore */ }
      try { await (screen.orientation as any)?.lock?.('landscape'); } catch { /* ignore */ }
      setIsPresenting(true);
      setShowNotes(false);
    } else {
      exitPresent();
    }
  }, [isPresenting, exitPresent]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
      if (e.key === 'f' || e.key === 'F') togglePresent();
      if (e.key === 'n' || e.key === 'N') setShowNotes((v) => !v);
      if (e.key === 'Escape' && isPresenting) exitPresent();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev, isPresenting, togglePresent, exitPresent]);

  // Window resize tracking
  useEffect(() => {
    const resize = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Mobile orientation detection
  useEffect(() => {
    const check = () => {
      const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
      const isPortrait = window.innerHeight > window.innerWidth;
      setIsMobilePortrait(isMobile && isPortrait && isPresenting);
    };
    check();
    window.addEventListener('resize', check);
    window.addEventListener('orientationchange', check);
    return () => {
      window.removeEventListener('resize', check);
      window.removeEventListener('orientationchange', check);
    };
  }, [isPresenting]);

  // Fullscreen exit detection
  useEffect(() => {
    const h = () => { if (!document.fullscreenElement) setIsPresenting(false); };
    document.addEventListener('fullscreenchange', h);
    return () => document.removeEventListener('fullscreenchange', h);
  }, []);

  // Touch swipe handlers
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 60) { diff < 0 ? goNext() : goPrev(); }
    touchStartX.current = null;
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return {
    currentSlide,
    setCurrentSlide,
    isPresenting,
    showNotes,
    setShowNotes,
    isMobilePortrait,
    windowSize,
    goNext,
    goPrev,
    togglePresent,
    exitPresent,
    onTouchStart,
    onTouchEnd,
    progress,
  };
}
