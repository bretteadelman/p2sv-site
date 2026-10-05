import React from 'react';
const fills = { actual:'var(--data-1)', comparison:'var(--data-2)', context:'var(--data-3)', projected:'var(--hatch)' };
export function BarChart({ rows=[], max, caption, format=(v)=>v.toLocaleString('en-US'), style }) {
  const m = max || Math.max(...rows.map(r => r.value));
  return <figure style={{ margin:0, ...style }}>
    <div style={{ display:'flex', flexDirection:'column' }}>
      {rows.map((r, i) => <div key={i} style={{ display:'grid', gridTemplateColumns:'80px 1fr 72px', alignItems:'center', gap:16, padding:'8px 0', borderBottom:'1px solid var(--border-hair-color)' }}>
        <div style={{ fontSize:15 }}>{r.label}</div>
        <div style={{ height:22, width:(r.value / m * 100) + '%', background: fills[r.kind || 'actual'], border: r.kind === 'projected' ? '1px solid var(--ink)' : 'none' }} />
        <div style={{ textAlign:'right', fontSize:17 }}>{format(r.value)}</div>
      </div>)}
    </div>
    {caption && <figcaption style={{ marginTop:12, fontStyle:'italic', fontSize:'var(--text-caption)', color:'var(--text-caption)' }}>{caption}</figcaption>}
  </figure>;
}
