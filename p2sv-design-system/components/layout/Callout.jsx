import React from 'react';
import { Label } from '../core/Label.jsx';
import { Button } from '../core/Button.jsx';
export function Callout({ variant='reports', title='Key Reports', items=[], statement, action='Start a conversation', href='#', style }) {
  const box = { background:'var(--surface-inverse)', color:'var(--paper)', padding:'24px 28px', ...style };
  if (variant === 'cta') return <div style={{ ...box, display:'flex', alignItems:'center', justifyContent:'space-between', gap:24, flexWrap:'wrap' }}>
    <div style={{ fontStyle:'italic', fontSize:'var(--text-body-lg)', lineHeight:1.35, maxWidth:'32ch' }}>{statement}</div>
    <Button variant="link" arrow href={href} style={{ color:'var(--paper)' }}>{action}</Button>
  </div>;
  return <div style={{ ...box, display:'flex', flexDirection:'column', gap:12 }}>
    <Label variant="caps" inverse style={{ color:'var(--inverse-muted)', fontSize:14 }}>{title}</Label>
    {items.map((it, i) => <div key={i} style={{ fontSize:'var(--text-body-lg)', lineHeight:1.4, display:'flex', gap:10 }}>
      <span style={{ color:'var(--inverse-muted)' }}>—</span><span><a href={it.href || '#'} onClick={it.onClick} style={{ color:'var(--paper)' }}>{it.title}</a>{it.desc && <> {it.desc}</>}</span>
    </div>)}
  </div>;
}
