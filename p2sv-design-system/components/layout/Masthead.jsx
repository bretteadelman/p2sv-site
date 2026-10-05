import React from 'react';
import { Wordmark } from './Wordmark.jsx';
export function Masthead({ meta, frame=10, band=128, mark=64, width, children, style }) {
  return <div style={{ border: frame + 'px solid var(--border-frame-color)', background:'var(--surface-sheet)', width, flex:'none', overflow:'hidden', display:'flex', flexDirection:'column', ...style }}>
    <header style={{ height:band, flex:'none', background:'var(--surface-inverse)', display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, padding:'0 ' + Math.round(mark*0.5) + 'px ' + Math.round(mark*0.3) + 'px' }}>
      <Wordmark size={mark} inverse style={{ flexShrink:0 }} />
      {meta && <div style={{ fontStyle:'italic', fontSize:Math.max(14, Math.round(mark*0.22)), lineHeight:1.4, color:'var(--inverse-muted)', textAlign:'right', whiteSpace:'nowrap', flex:'none' }}>{meta}</div>}
    </header>
    {children && <div style={{ flex:1, display:'flex', flexDirection:'column' }}>{children}</div>}
  </div>;
}
