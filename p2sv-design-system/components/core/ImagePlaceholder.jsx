import React from 'react';
export function ImagePlaceholder({ label='Image', ratio='4 / 3', height, src, style }) {
  if (src) return <img src={src} alt={label} style={{ display:'block', width:'100%', aspectRatio: height ? undefined : ratio, height, objectFit:'cover', filter:'grayscale(1) contrast(1.08)', ...style }} />;
  return <div style={{ width:'100%', aspectRatio: height ? undefined : ratio, height, background:'var(--hatch-light)', border:'1px solid var(--grey-300)', display:'flex', alignItems:'center', justifyContent:'center', ...style }}>
    <span style={{ background:'var(--paper)', padding:'4px 12px', fontFamily:'var(--font-serif)', fontSize:12, letterSpacing:'var(--tracking-label)', textTransform:'uppercase', color:'var(--grey-700)' }}>{label}</span>
  </div>;
}
