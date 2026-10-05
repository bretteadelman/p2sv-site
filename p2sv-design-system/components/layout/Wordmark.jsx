import React from 'react';
export function Wordmark({ size=80, inverse=false, style }) {
  return <span style={{ fontFamily:'var(--font-display)', fontVariationSettings:'var(--display-variation)', fontWeight:400, fontSize:size, lineHeight:.8, letterSpacing:'var(--tracking-display)', color: inverse ? 'var(--paper)' : 'var(--ink)', display:'inline-block', ...style }}>P2SV</span>;
}
