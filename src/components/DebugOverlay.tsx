import React, { useState, useEffect } from 'react';
import { getCurrentBreakpoint } from '../utils/constants';

export const DebugOverlay = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (typeof window === 'undefined') return null;

  const activeBreakpoint = getCurrentBreakpoint(windowSize.width);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        padding: '8px 12px',
        borderRadius: '8px',
        fontSize: '12px',
        fontFamily: 'monospace',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.1)',
        pointerEvents: 'none', // Mouse tıklamalarını engellemez
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <span style={{ color: '#aaa' }}>Breakpoint:</span>
        <span style={{ color: '#00ff00', fontWeight: 'bold' }}>{activeBreakpoint.toUpperCase()}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: '#aaa' }}>Width:</span>
        <span>{windowSize.width}px</span>
      </div>
    </div>
  );
};