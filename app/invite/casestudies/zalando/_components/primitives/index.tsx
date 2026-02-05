'use client';

import React from 'react';
import { STYLE, typeStyle } from '../styles/tokens';

/**
 * Basic card with dark surface background and border.
 */
export const Card = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{
    background: STYLE.colors.surface,
    border: `1px solid ${STYLE.colors.border}`,
    borderRadius: STYLE.radius.card,
    ...style,
  }}>{children}</div>
);

type CardVariant = keyof typeof STYLE.cardStyles;

/**
 * Gradient card with variant-aware color propagation.
 * Children can be a function: (textColor, textSecondaryColor) => JSX
 */
export const BentoCard = ({
  variant = 'gradientDark',
  children,
  style = {}
}: {
  variant?: CardVariant;
  children: React.ReactNode | ((textColor: string, textSecondaryColor: string) => React.ReactNode);
  style?: React.CSSProperties
}) => {
  const cs = STYLE.cardStyles[variant];
  return (
    <div style={{
      background: cs.background,
      border: `1px solid ${cs.border}`,
      borderRadius: 20,
      color: cs.text,
      ...style,
    }}>
      {typeof children === 'function' ? children(cs.text, cs.textSecondary) : children}
    </div>
  );
};

/**
 * Icon wrapper with consistent sizing and color.
 * Clones the icon SVG to override its width/height attributes.
 */
export const IconBox = ({ icon, size }: { icon: React.ReactNode; size?: number }) => {
  const s = size || STYLE.icon.size;
  return (
    <div style={{
      color: STYLE.colors.gray500,
      width: s,
      height: s,
      flexShrink: 0,
    }}>
      {React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement<{ width?: number; height?: number }>, { width: s, height: s })
        : icon}
    </div>
  );
};

/**
 * Placeholder for images not yet added.
 * Replace these with actual <img> tags when assets are ready.
 * Includes role="img" for accessibility.
 */
export const ImagePlaceholder = ({ label = 'Image placeholder', style = {} }: { label?: string; style?: React.CSSProperties }) => (
  <div 
    role="img" 
    aria-label={label}
    style={{
      background: `repeating-linear-gradient(45deg, ${STYLE.colors.border}, ${STYLE.colors.border} 1px, transparent 1px, transparent 16px)`,
      backgroundColor: STYLE.colors.surface,
      border: `2px dashed ${STYLE.colors.gray800}`,
      borderRadius: STYLE.radius.card,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...typeStyle('paragraph3', STYLE.colors.gray600),
      ...style,
    }}
  >{label}</div>
);
