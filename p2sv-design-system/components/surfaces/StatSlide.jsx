import React from 'react';
import { SheetFooter } from '../layout/SheetFooter.jsx';
import { Label } from '../core/Label.jsx';
import { StatRow } from '../data/StatRow.jsx';
export function StatSlide({ label, statement, emphasis, stats=[], footer, style }) {
  return <div style={{ width:1920, height:1080, border:'20px solid var(--border-frame-color)', background:'var(--surface-sheet)', padding:'96px 96px 48px', display:'flex', flexDirection:'column', gap:56, ...style }}>
    <Label rule style={{ fontSize:26 }}>{label}</Label>
    <div style={{ fontSize:72, lineHeight:1.15, maxWidth:'26ch', textWrap:'balance' }}>{statement}{emphasis && <> <i>{emphasis}</i></>}</div>
    <StatRow stats={stats} size={96} style={{ padding:'48px 0' }} />
    <SheetFooter size={22} right={footer} style={{ marginTop:'auto' }} />
  </div>;
}
