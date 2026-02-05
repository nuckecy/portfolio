import React from 'react';
import { STYLE, typeStyle } from '../../styles/tokens';

/**
 * Basic card with dark surface background and border.
 */
export const Card = ({ children, style = {} }) => (
  <div style={{
    background: STYLE.colors.surface,
    border: `1px solid ${STYLE.colors.border}`,
    borderRadius: STYLE.radius.card,
    ...style,
  }}>{children}</div>
);

/**
 * Gradient card with variant-aware color propagation.
 * Children can be a function: (textColor, textSecondaryColor) => JSX
 */
export const BentoCard = ({ variant = 'gradientDark', children, style = {} }) => {
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
 */
export const IconBox = ({ icon, size }) => (
  <div style={{
    color: STYLE.colors.gray500,
    width: size || STYLE.icon.size,
    height: size || STYLE.icon.size,
    flexShrink: 0,
  }}>{icon}</div>
);

/**
 * Placeholder for images not yet added.
 * Replace these with actual <img> tags when assets are ready.
 */
export const ImagePlaceholder = ({ label = 'Image placeholder', style = {} }) => (
  <div style={{
    background: `repeating-linear-gradient(45deg, ${STYLE.colors.border}, ${STYLE.colors.border} 1px, transparent 1px, transparent 16px)`,
    backgroundColor: STYLE.colors.surface,
    border: `2px dashed ${STYLE.colors.gray800}`,
    borderRadius: STYLE.radius.card,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...typeStyle('paragraph3', STYLE.colors.gray600),
    ...style,
  }}>{label}</div>
);
