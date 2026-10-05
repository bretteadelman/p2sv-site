import React from 'react';
import { Masthead } from '../layout/Masthead.jsx';
import { SheetFooter } from '../layout/SheetFooter.jsx';
import { Headline } from '../core/Headline.jsx';
import { Label } from '../core/Label.jsx';
import { StatRow } from '../data/StatRow.jsx';
import { CardGrid } from '../data/CardGrid.jsx';
export function Handout({ meta, label, fact, reframe, dek, stats=[], gridLabel, grid=[], positioning, url='pushtostart.ventures', source, style }) {
  return <Masthead frame={14} band={132} mark={72} meta={meta} width={816} style={{ height:1056, ...style }}>
    <div style={{ flex:1, padding:'40px 56px 36px', display:'flex', flexDirection:'column', gap:28 }}>
      <Headline label={label} fact={fact} reframe={reframe} />
      {dek && <p style={{ margin:0, borderLeft:'1px solid var(--grey-300)', paddingLeft:24, maxWidth:'62ch', fontSize:15, lineHeight:1.75, color:'var(--text-secondary)' }}>{dek}</p>}
      {stats.length > 0 && <StatRow stats={stats} />}
      {grid.length > 0 && <div style={{ display:'flex', flexDirection:'column', gap:12 }}><Label rule>{gridLabel}</Label><CardGrid compact items={grid} /></div>}
      {positioning && <div style={{ background:'var(--surface-inverse)', color:'var(--paper)', padding:'18px 24px', display:'flex', justifyContent:'space-between', alignItems:'center', gap:24 }}>
        <i style={{ fontSize:16 }}>{positioning}</i><a href={'https://' + url} style={{ color:'var(--paper)', fontSize:12, letterSpacing:'var(--tracking-label)', textTransform:'uppercase', whiteSpace:'nowrap' }}>{url}</a></div>}
      <SheetFooter right={source} style={{ marginTop:'auto' }} />
    </div>
  </Masthead>;
}
