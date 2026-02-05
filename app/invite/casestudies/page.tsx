'use client';

import Link from "next/link";
import { useState } from "react";

export default function InviteCaseStudiesPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0A0A0A',
      overflow: 'hidden',
    }}>
      <Link
        href="/invite/casestudies/zal-csh"
        style={{
          display: 'block',
          background: 'rgba(255, 255, 255, 0.03)',
          border: `1px solid ${isHovered ? 'rgba(232, 147, 47, 0.5)' : '#2A2A2A'}`,
          borderRadius: 8,
          padding: 16,
          maxWidth: 400,
          width: '90%',
          textDecoration: 'none',
          position: 'relative',
          transition: 'border-color 0.3s ease',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* CASE STUDY PRESENTATION caption */}
        <p style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: 8,
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#888888',
          margin: '0 0 16px',
        }}>
          Case Study Presentation
        </p>

        {/* Title */}
        <h1 style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: 32,
          fontWeight: 700,
          lineHeight: 1.0,
          letterSpacing: '-0.5px',
          color: '#FFFFFF',
          margin: '0 0 6px',
        }}>
          Transforming<br />Customer Support
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: "'Zalando Sans', 'Source Sans 3', sans-serif",
          fontSize: 16,
          fontWeight: 300,
          lineHeight: 1.4,
          color: '#E8932F',
          margin: '0 0 16px',
        }}>
          Context-aware self-help platform at Zalando
        </p>

        {/* Name */}
        <p style={{
          fontFamily: "'Zalando Sans', 'Source Sans 3', sans-serif",
          fontSize: 12,
          fontWeight: 700,
          color: '#FFFFFF',
          margin: 0,
        }}>
          By Otobong Okoko
        </p>

        {/* Chevron button - bottom right */}
        <div style={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          width: 24,
          height: 24,
          borderRadius: '50%',
          border: `1px solid ${isHovered ? 'rgba(232, 147, 47, 0.5)' : '#2A2A2A'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: isHovered ? 'rgba(232, 147, 47, 0.5)' : '#888888',
          transition: 'all 0.3s ease',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </div>
      </Link>
    </main>
  );
}
