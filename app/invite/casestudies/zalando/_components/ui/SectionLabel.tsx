'use client';

import React from 'react';
import { STYLE, typeStyle } from '../styles/tokens';

/**
 * Section label pattern used at top of most slides.
 * Renders: "SECTION | Sub Section" or just "SECTION"
 */
export const SectionLabel = ({ section, subSection }: { section: string; subSection?: string }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
    <span style={typeStyle('pageCaption', STYLE.colors.gray700)}>{section}</span>
    {subSection && (
      <>
        <span style={{ ...typeStyle('pageCaption', STYLE.colors.gray800), letterSpacing: '0' }}>|</span>
        <span style={typeStyle('subCaption', STYLE.colors.gray500)}>{subSection}</span>
      </>
    )}
  </div>
);
