import React from 'react';
export function List({ marker='dash', items=[], inverse=false, style }) {
  const mk = (i) => marker === 'number'
    ? <span style={{ fontFamily:'var(--font-display)', fontVariationSettings:'var(--display-variation)', fontSize:20, lineHeight:1.2, minWidth:30 }}>{String(i+1).padStart(2,'0')}</span>
    : <span style={{ color: inverse ? 'var(--inverse-muted)' : 'var(--text-decorative)', minWidth: marker==='dash' ? 22 : 14 }}>{marker==='dash' ? '—' : '·'}</span>;
  return <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:6, ...style }}>
    {items.map((it, i) => <li key={i} style={{ display:'flex', gap:8, alignItems:'baseline', color: inverse ? 'var(--paper)' : 'var(--ink)' }}>{mk(i)}<span>{it}</span></li>)}
  </ul>;
}
