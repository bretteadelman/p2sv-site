import React from 'react';
export function Label({ variant='sc', rule=false, inverse=false, children, style }) {
  const base = variant === 'caps'
    ? { fontWeight:600, fontSize:'var(--text-caps)', letterSpacing:'var(--tracking-caps)', textTransform:'uppercase', color: inverse ? 'var(--paper)' : 'var(--ink)' }
    : { fontVariant:'small-caps', textTransform:'lowercase', fontSize:'var(--text-label)', letterSpacing:'var(--tracking-label)', color: inverse ? 'var(--inverse-muted)' : 'var(--text-label)' };
  return <div style={{ fontFamily:'var(--font-serif)', lineHeight:1.5, ...base,
    ...(rule ? { borderBottom:'1px solid ' + (inverse ? 'var(--inverse-rule)' : 'var(--border-hair-color)'), paddingBottom:8 } : {}), ...style }}>{children}</div>;
}
