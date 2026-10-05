import React from 'react';
import { Label } from './Label.jsx';
export function Headline({ label, fact, reframe, dek, size='h1', inverse=false, style }) {
  const fs = { h1:'var(--text-h1)', h2:'var(--text-h2)', display:'var(--text-display)' }[size] || size;
  return <div style={{ display:'flex', flexDirection:'column', gap:12, ...style }}>
    {label && <Label inverse={inverse}>{label}</Label>}
    <h2 style={{ margin:0, fontFamily:'var(--font-serif)', fontWeight:400, fontSize:fs, lineHeight:'var(--leading-heading)', color: inverse ? 'var(--paper)' : 'var(--ink)', textWrap:'balance' }}>
      {fact}{reframe && <><br /><i>{reframe}</i></>}
    </h2>
    {dek && <p style={{ margin:0, maxWidth:'var(--measure)', fontSize:'var(--text-body-lg)', lineHeight:'var(--leading-body)', color: inverse ? 'var(--inverse-muted)' : 'var(--text-secondary)', textWrap:'pretty' }}>{dek}</p>}
  </div>;
}
