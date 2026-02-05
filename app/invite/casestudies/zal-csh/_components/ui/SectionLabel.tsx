'use client';

import React from 'react';
import { STYLE, typeStyle } from '../styles/tokens';

/**
 * Section label pattern used at top of most slides.
 * Renders: "SECTION | Sub Section" or just "SECTION"
 */
export const SectionLabel = ({ section, subSection }: { section: string; subSection?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <span style={typeStyle('pageCaption', STYLE.colors.gray600)}>{section}</span>
    {subSection && (
      <>
        <span style={{ color: STYLE.colors.gray700, fontSize: 14 }}>·</span>
        <span style={{ ...typeStyle('pageCaption', STYLE.colors.gray500), fontWeight: 400, letterSpacing: '2px' }}>{subSection}</span>
      </>
    )}
  </div>
);
