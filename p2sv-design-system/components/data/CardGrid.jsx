import React from 'react';
export function CardGrid({ items=[], columns=3, numbered=false, compact=false, style }) {
  return <div style={{ display:'grid', gridTemplateColumns:'repeat(' + columns + ', minmax(0,1fr))', gap:1, background:'var(--border-hair-color)', border:'1px solid var(--border-hair-color)', ...style }}>
    {items.map((it, i) => <div key={i} style={{ background:'var(--surface-sheet)', padding: compact ? '12px 14px' : '20px 22px', display:'flex', flexDirection:'column', gap: compact ? 2 : 8 }}>
      {numbered && <div style={{ fontFamily:'var(--font-display)', fontVariationSettings:'var(--display-variation)', fontSize:22, lineHeight:1 }}>{String(i+1).padStart(2,'0')}</div>}
      <div style={{ fontSize: compact ? 15 : 'var(--text-h3)', fontWeight: compact ? 400 : 500, lineHeight:1.3 }}>{it.title}</div>
      {it.body && <div style={{ fontSize: compact ? 14 : 15, lineHeight:1.5, color:'var(--text-secondary)' }}>{it.body}</div>}
    </div>)}
  </div>;
}
