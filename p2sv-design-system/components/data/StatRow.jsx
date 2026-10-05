import React from 'react';
export function StatRow({ stats=[], size=30, inverse=false, style }) {
  const rule = inverse ? 'var(--inverse-rule)' : 'var(--border-hair-color)';
  return <div style={{ containerType:'inline-size', display:'grid', gridTemplateColumns:'repeat(' + stats.length + ', minmax(0,1fr))', borderTop:'1px solid ' + rule, borderBottom:'1px solid ' + rule, padding:'20px 0', ...style }}>
    {stats.map((s, i) => <div key={i} style={{ minWidth:0, padding:'0 12px 0 ' + (i ? 16 : 0) + 'px', borderLeft: i ? '1px solid ' + rule : 'none', display:'flex', flexDirection:'column', gap:6 }}>
      <div style={{ fontFamily:'var(--font-display)', fontVariationSettings:'var(--display-variation)', fontSize:'min(' + size + 'px, calc(100cqw / ' + stats.length + ' * 0.17))', lineHeight:1, color: inverse ? 'var(--paper)' : 'var(--ink)', whiteSpace:'nowrap' }}>{s.value}</div>
      <div style={{ fontStyle:'italic', fontSize:'var(--text-caption)', lineHeight:'var(--leading-caption)', color: inverse ? 'var(--inverse-muted)' : 'var(--text-secondary)' }}>{s.label}</div>
    </div>)}
  </div>;
}
