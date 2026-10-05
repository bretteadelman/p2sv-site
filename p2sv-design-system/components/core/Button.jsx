import React from 'react';
export function Button({ variant='primary', arrow=false, href, onClick, disabled=false, children, style }) {
  const [hover, setHover] = React.useState(false);
  const outline = variant === 'outline', link = variant === 'link';
  const bg = link ? 'transparent' : outline ? (hover ? 'var(--ink)' : 'transparent') : (hover ? 'var(--ink-2)' : 'var(--ink)');
  const fg = link ? 'inherit' : outline ? (hover ? 'var(--paper)' : 'var(--ink)') : 'var(--paper)';
  const s = {
    display:'inline-flex', alignItems:'center', gap:8, fontFamily:'var(--font-serif)', fontVariant:'small-caps', textTransform:'lowercase',
    fontSize:16, letterSpacing:'var(--tracking-caps)', lineHeight:1, padding: link ? 0 : '13px 22px', borderRadius:0,
    border: link ? 'none' : '1.5px solid var(--ink)', background:bg, color:fg, cursor: disabled ? 'default' : 'pointer', opacity: disabled ? .4 : 1,
    textDecoration: link ? 'underline' : 'none', textDecorationThickness: link && hover ? 2 : 1, textUnderlineOffset:4,
    transition:'background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease), text-decoration-thickness var(--dur-fast) var(--ease)', ...style };
  const Tag = href ? 'a' : 'button';
  return <Tag href={href} onClick={disabled ? undefined : onClick} disabled={Tag==='button' ? disabled : undefined} style={s}
    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{children}{arrow && <span style={{fontVariant:'normal'}}>↓</span>}</Tag>;
}
