import React from 'react';
export function SectionSlide({ number='01', title, kicker, style }) {
  return <div style={{ width:1920, height:1080, background:'var(--surface-inverse)', color:'var(--paper)', padding:96, display:'flex', flexDirection:'column', justifyContent:'flex-end', gap:40, ...style }}>
    <div style={{ fontFamily:'var(--font-display)', fontVariationSettings:'var(--display-variation)', fontSize:220, lineHeight:.85 }}>{number}</div>
    <div style={{ borderTop:'1.5px solid var(--inverse-rule)', paddingTop:32, display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:48 }}>
      <div style={{ fontSize:72, lineHeight:1.1 }}>{title}</div>
      {kicker && <i style={{ fontSize:30, color:'var(--inverse-muted)' }}>{kicker}</i>}
    </div>
  </div>;
}
