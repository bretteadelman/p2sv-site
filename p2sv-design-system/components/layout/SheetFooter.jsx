import React from 'react';
export function SheetFooter({ left='P2SV — Push to Start Ventures', right, size=13, style }) {
  return <footer style={{ borderTop:'var(--border-rule) solid var(--border-rule-color)', paddingTop:12, display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:24, ...style }}>
    <span style={{ fontVariant:'small-caps', letterSpacing:'var(--tracking-label)', fontSize:size, color:'var(--text-secondary)' }}>{left}</span>
    {right && <span style={{ fontStyle:'italic', fontSize:size, color:'var(--text-caption)', textAlign:'right' }}>{right}</span>}
  </footer>;
}
