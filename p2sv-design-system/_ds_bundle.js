/* @ds-bundle: {"format":4,"namespace":"P2SVDesignSystem_92a7d1","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Headline","sourcePath":"components/core/Headline.jsx"},{"name":"ImagePlaceholder","sourcePath":"components/core/ImagePlaceholder.jsx"},{"name":"Label","sourcePath":"components/core/Label.jsx"},{"name":"List","sourcePath":"components/core/List.jsx"},{"name":"BarChart","sourcePath":"components/data/BarChart.jsx"},{"name":"CardGrid","sourcePath":"components/data/CardGrid.jsx"},{"name":"StatRow","sourcePath":"components/data/StatRow.jsx"},{"name":"Callout","sourcePath":"components/layout/Callout.jsx"},{"name":"Masthead","sourcePath":"components/layout/Masthead.jsx"},{"name":"SheetFooter","sourcePath":"components/layout/SheetFooter.jsx"},{"name":"Wordmark","sourcePath":"components/layout/Wordmark.jsx"},{"name":"Handout","sourcePath":"components/surfaces/Handout.jsx"},{"name":"SectionSlide","sourcePath":"components/surfaces/SectionSlide.jsx"},{"name":"StatSlide","sourcePath":"components/surfaces/StatSlide.jsx"},{"name":"TitleSlide","sourcePath":"components/surfaces/TitleSlide.jsx"}],"sourceHashes":{"components/core/Button.jsx":"a1c06709a3ca","components/core/Headline.jsx":"663f53656c14","components/core/ImagePlaceholder.jsx":"6fd68bc74dfc","components/core/Label.jsx":"dc0f52279114","components/core/List.jsx":"062b00aae656","components/data/BarChart.jsx":"67c397a0b1c7","components/data/CardGrid.jsx":"d51432c2fd73","components/data/StatRow.jsx":"70cea5ed09c4","components/layout/Callout.jsx":"2f6ea0ad4b80","components/layout/Masthead.jsx":"4449174de4ce","components/layout/SheetFooter.jsx":"98fd45fb6eb9","components/layout/Wordmark.jsx":"8f0b9d7591ef","components/surfaces/Handout.jsx":"b9a3b293c4b3","components/surfaces/SectionSlide.jsx":"9e9a08d69c9b","components/surfaces/StatSlide.jsx":"32fcfd23938d","components/surfaces/TitleSlide.jsx":"63fb4368b6c8","ui_kits/website/HandoutView.jsx":"e11859ec1d08","ui_kits/website/HomeSheet.jsx":"941f7136e6cb","ui_kits/website/ReportPage.jsx":"1577042d6ebd","ui_kits/website/data.js":"8ed345c87741"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.P2SVDesignSystem_92a7d1 = window.P2SVDesignSystem_92a7d1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  arrow = false,
  href,
  onClick,
  disabled = false,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const outline = variant === 'outline',
    link = variant === 'link';
  const bg = link ? 'transparent' : outline ? hover ? 'var(--ink)' : 'transparent' : hover ? 'var(--ink-2)' : 'var(--ink)';
  const fg = link ? 'inherit' : outline ? hover ? 'var(--paper)' : 'var(--ink)' : 'var(--paper)';
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'var(--font-serif)',
    fontVariant: 'small-caps',
    textTransform: 'lowercase',
    fontSize: 16,
    letterSpacing: 'var(--tracking-caps)',
    lineHeight: 1,
    padding: link ? 0 : '13px 22px',
    borderRadius: 0,
    border: link ? 'none' : '1.5px solid var(--ink)',
    background: bg,
    color: fg,
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? .4 : 1,
    textDecoration: link ? 'underline' : 'none',
    textDecorationThickness: link && hover ? 2 : 1,
    textUnderlineOffset: 4,
    transition: 'background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease), text-decoration-thickness var(--dur-fast) var(--ease)',
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children, arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariant: 'normal'
    }
  }, "\u2193"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ImagePlaceholder.jsx
try { (() => {
function ImagePlaceholder({
  label = 'Image',
  ratio = '4 / 3',
  height,
  src,
  style
}) {
  if (src) return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label,
    style: {
      display: 'block',
      width: '100%',
      aspectRatio: height ? undefined : ratio,
      height,
      objectFit: 'cover',
      filter: 'grayscale(1) contrast(1.08)',
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: height ? undefined : ratio,
      height,
      background: 'var(--hatch-light)',
      border: '1px solid var(--grey-300)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--paper)',
      padding: '4px 12px',
      fontFamily: 'var(--font-serif)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--grey-700)'
    }
  }, label));
}
Object.assign(__ds_scope, { ImagePlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ImagePlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/core/Label.jsx
try { (() => {
function Label({
  variant = 'sc',
  rule = false,
  inverse = false,
  children,
  style
}) {
  const base = variant === 'caps' ? {
    fontWeight: 600,
    fontSize: 'var(--text-caps)',
    letterSpacing: 'var(--tracking-caps)',
    textTransform: 'uppercase',
    color: inverse ? 'var(--paper)' : 'var(--ink)'
  } : {
    fontVariant: 'small-caps',
    textTransform: 'lowercase',
    fontSize: 'var(--text-label)',
    letterSpacing: 'var(--tracking-label)',
    color: inverse ? 'var(--inverse-muted)' : 'var(--text-label)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      lineHeight: 1.5,
      ...base,
      ...(rule ? {
        borderBottom: '1px solid ' + (inverse ? 'var(--inverse-rule)' : 'var(--border-hair-color)'),
        paddingBottom: 8
      } : {}),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Label.jsx", error: String((e && e.message) || e) }); }

// components/core/Headline.jsx
try { (() => {
function Headline({
  label,
  fact,
  reframe,
  dek,
  size = 'h1',
  inverse = false,
  style
}) {
  const fs = {
    h1: 'var(--text-h1)',
    h2: 'var(--text-h2)',
    display: 'var(--text-display)'
  }[size] || size;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement(__ds_scope.Label, {
    inverse: inverse
  }, label), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: fs,
      lineHeight: 'var(--leading-heading)',
      color: inverse ? 'var(--paper)' : 'var(--ink)',
      textWrap: 'balance'
    }
  }, fact, reframe && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, reframe))), dek && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--measure)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-body)',
      color: inverse ? 'var(--inverse-muted)' : 'var(--text-secondary)',
      textWrap: 'pretty'
    }
  }, dek));
}
Object.assign(__ds_scope, { Headline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Headline.jsx", error: String((e && e.message) || e) }); }

// components/core/List.jsx
try { (() => {
function List({
  marker = 'dash',
  items = [],
  inverse = false,
  style
}) {
  const mk = i => marker === 'number' ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontVariationSettings: 'var(--display-variation)',
      fontSize: 20,
      lineHeight: 1.2,
      minWidth: 30
    }
  }, String(i + 1).padStart(2, '0')) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: inverse ? 'var(--inverse-muted)' : 'var(--text-decorative)',
      minWidth: marker === 'dash' ? 22 : 14
    }
  }, marker === 'dash' ? '—' : '·');
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'baseline',
      color: inverse ? 'var(--paper)' : 'var(--ink)'
    }
  }, mk(i), /*#__PURE__*/React.createElement("span", null, it))));
}
Object.assign(__ds_scope, { List });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/List.jsx", error: String((e && e.message) || e) }); }

// components/data/BarChart.jsx
try { (() => {
const fills = {
  actual: 'var(--data-1)',
  comparison: 'var(--data-2)',
  context: 'var(--data-3)',
  projected: 'var(--hatch)'
};
function BarChart({
  rows = [],
  max,
  caption,
  format = v => v.toLocaleString('en-US'),
  style
}) {
  const m = max || Math.max(...rows.map(r => r.value));
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr 72px',
      alignItems: 'center',
      gap: 16,
      padding: '8px 0',
      borderBottom: '1px solid var(--border-hair-color)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22,
      width: r.value / m * 100 + '%',
      background: fills[r.kind || 'actual'],
      border: r.kind === 'projected' ? '1px solid var(--ink)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontSize: 17
    }
  }, format(r.value))))), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 12,
      fontStyle: 'italic',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-caption)'
    }
  }, caption));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/CardGrid.jsx
try { (() => {
function CardGrid({
  items = [],
  columns = 3,
  numbered = false,
  compact = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ', minmax(0,1fr))',
      gap: 1,
      background: 'var(--border-hair-color)',
      border: '1px solid var(--border-hair-color)',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-sheet)',
      padding: compact ? '12px 14px' : '20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: compact ? 2 : 8
    }
  }, numbered && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontVariationSettings: 'var(--display-variation)',
      fontSize: 22,
      lineHeight: 1
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: compact ? 15 : 'var(--text-h3)',
      fontWeight: compact ? 400 : 500,
      lineHeight: 1.3
    }
  }, it.title), it.body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: compact ? 14 : 15,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, it.body))));
}
Object.assign(__ds_scope, { CardGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CardGrid.jsx", error: String((e && e.message) || e) }); }

// components/data/StatRow.jsx
try { (() => {
function StatRow({
  stats = [],
  size = 30,
  inverse = false,
  style
}) {
  const rule = inverse ? 'var(--inverse-rule)' : 'var(--border-hair-color)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      containerType: 'inline-size',
      display: 'grid',
      gridTemplateColumns: 'repeat(' + stats.length + ', minmax(0,1fr))',
      borderTop: '1px solid ' + rule,
      borderBottom: '1px solid ' + rule,
      padding: '20px 0',
      ...style
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      minWidth: 0,
      padding: '0 12px 0 ' + (i ? 16 : 0) + 'px',
      borderLeft: i ? '1px solid ' + rule : 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontVariationSettings: 'var(--display-variation)',
      fontSize: 'min(' + size + 'px, calc(100cqw / ' + stats.length + ' * 0.17))',
      lineHeight: 1,
      color: inverse ? 'var(--paper)' : 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontStyle: 'italic',
      fontSize: 'var(--text-caption)',
      lineHeight: 'var(--leading-caption)',
      color: inverse ? 'var(--inverse-muted)' : 'var(--text-secondary)'
    }
  }, s.label))));
}
Object.assign(__ds_scope, { StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatRow.jsx", error: String((e && e.message) || e) }); }

// components/layout/Callout.jsx
try { (() => {
function Callout({
  variant = 'reports',
  title = 'Key Reports',
  items = [],
  statement,
  action = 'Start a conversation',
  href = '#',
  style
}) {
  const box = {
    background: 'var(--surface-inverse)',
    color: 'var(--paper)',
    padding: '24px 28px',
    ...style
  };
  if (variant === 'cta') return /*#__PURE__*/React.createElement("div", {
    style: {
      ...box,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontStyle: 'italic',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.35,
      maxWidth: '32ch'
    }
  }, statement), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "link",
    arrow: true,
    href: href,
    style: {
      color: 'var(--paper)'
    }
  }, action));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...box,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    variant: "caps",
    inverse: true,
    style: {
      color: 'var(--inverse-muted)',
      fontSize: 14
    }
  }, title), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.4,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--inverse-muted)'
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: it.href || '#',
    onClick: it.onClick,
    style: {
      color: 'var(--paper)'
    }
  }, it.title), it.desc && /*#__PURE__*/React.createElement(React.Fragment, null, " ", it.desc)))));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Callout.jsx", error: String((e && e.message) || e) }); }

// components/layout/SheetFooter.jsx
try { (() => {
function SheetFooter({
  left = 'P2SV — Push to Start Ventures',
  right,
  size = 13,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: 'var(--border-rule) solid var(--border-rule-color)',
      paddingTop: 12,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariant: 'small-caps',
      letterSpacing: 'var(--tracking-label)',
      fontSize: size,
      color: 'var(--text-secondary)'
    }
  }, left), right && /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontSize: size,
      color: 'var(--text-caption)',
      textAlign: 'right'
    }
  }, right));
}
Object.assign(__ds_scope, { SheetFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SheetFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/Wordmark.jsx
try { (() => {
function Wordmark({
  size = 80,
  inverse = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontVariationSettings: 'var(--display-variation)',
      fontWeight: 400,
      fontSize: size,
      lineHeight: .8,
      letterSpacing: 'var(--tracking-display)',
      color: inverse ? 'var(--paper)' : 'var(--ink)',
      display: 'inline-block',
      ...style
    }
  }, "P2SV");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/layout/Masthead.jsx
try { (() => {
function Masthead({
  meta,
  frame = 10,
  band = 128,
  mark = 64,
  width,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: frame + 'px solid var(--border-frame-color)',
      background: 'var(--surface-sheet)',
      width,
      flex: 'none',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: band,
      flex: 'none',
      background: 'var(--surface-inverse)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      padding: '0 ' + Math.round(mark * 0.5) + 'px ' + Math.round(mark * 0.3) + 'px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: mark,
    inverse: true,
    style: {
      flexShrink: 0
    }
  }), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontStyle: 'italic',
      fontSize: Math.max(14, Math.round(mark * 0.22)),
      lineHeight: 1.4,
      color: 'var(--inverse-muted)',
      textAlign: 'right',
      whiteSpace: 'nowrap',
      flex: 'none'
    }
  }, meta)), children && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, children));
}
Object.assign(__ds_scope, { Masthead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Masthead.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Handout.jsx
try { (() => {
function Handout({
  meta,
  label,
  fact,
  reframe,
  dek,
  stats = [],
  gridLabel,
  grid = [],
  positioning,
  url = 'pushtostart.ventures',
  source,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Masthead, {
    frame: 14,
    band: 132,
    mark: 72,
    meta: meta,
    width: 816,
    style: {
      height: 1056,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '40px 56px 36px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Headline, {
    label: label,
    fact: fact,
    reframe: reframe
  }), dek && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      borderLeft: '1px solid var(--grey-300)',
      paddingLeft: 24,
      maxWidth: '62ch',
      fontSize: 15,
      lineHeight: 1.75,
      color: 'var(--text-secondary)'
    }
  }, dek), stats.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.StatRow, {
    stats: stats
  }), grid.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    rule: true
  }, gridLabel), /*#__PURE__*/React.createElement(__ds_scope.CardGrid, {
    compact: true,
    items: grid
  })), positioning && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--paper)',
      padding: '18px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      fontSize: 16
    }
  }, positioning), /*#__PURE__*/React.createElement("a", {
    href: 'https://' + url,
    style: {
      color: 'var(--paper)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, url)), /*#__PURE__*/React.createElement(__ds_scope.SheetFooter, {
    right: source,
    style: {
      marginTop: 'auto'
    }
  })));
}
Object.assign(__ds_scope, { Handout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Handout.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/SectionSlide.jsx
try { (() => {
function SectionSlide({
  number = '01',
  title,
  kicker,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1920,
      height: 1080,
      background: 'var(--surface-inverse)',
      color: 'var(--paper)',
      padding: 96,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 40,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontVariationSettings: 'var(--display-variation)',
      fontSize: 220,
      lineHeight: .85
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1.5px solid var(--inverse-rule)',
      paddingTop: 32,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 72,
      lineHeight: 1.1
    }
  }, title), kicker && /*#__PURE__*/React.createElement("i", {
    style: {
      fontSize: 30,
      color: 'var(--inverse-muted)'
    }
  }, kicker)));
}
Object.assign(__ds_scope, { SectionSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/SectionSlide.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatSlide.jsx
try { (() => {
function StatSlide({
  label,
  statement,
  emphasis,
  stats = [],
  footer,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1920,
      height: 1080,
      border: '20px solid var(--border-frame-color)',
      background: 'var(--surface-sheet)',
      padding: '96px 96px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 56,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    rule: true,
    style: {
      fontSize: 26
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 72,
      lineHeight: 1.15,
      maxWidth: '26ch',
      textWrap: 'balance'
    }
  }, statement, emphasis && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("i", null, emphasis))), /*#__PURE__*/React.createElement(__ds_scope.StatRow, {
    stats: stats,
    size: 96,
    style: {
      padding: '48px 0'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.SheetFooter, {
    size: 22,
    right: footer,
    style: {
      marginTop: 'auto'
    }
  }));
}
Object.assign(__ds_scope, { StatSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatSlide.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/TitleSlide.jsx
try { (() => {
function TitleSlide({
  eyebrow,
  fact,
  reframe,
  footer,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Masthead, {
    frame: 20,
    band: 400,
    mark: 240,
    width: 1920,
    style: {
      height: 1080,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '72px 96px 48px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Headline, {
    label: eyebrow,
    fact: fact,
    reframe: reframe,
    size: "88px"
  }), /*#__PURE__*/React.createElement(__ds_scope.SheetFooter, {
    size: 22,
    right: footer,
    style: {
      marginTop: 'auto'
    }
  })));
}
Object.assign(__ds_scope, { TitleSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/TitleSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HandoutView.jsx
try { (() => {
function HandoutView({
  go
}) {
  const {
    Handout,
    Button
  } = window.P2SVDesignSystem_92a7d1;
  const D = window.P2SV_DATA;
  const ref = React.useRef(null);
  const [s, setS] = React.useState(1);
  React.useEffect(() => {
    const f = () => setS(Math.min(1, ref.current.clientWidth / 816));
    f();
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 816 * s,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => go('report')
  }, "Back to the brief"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => window.print()
  }, "Print")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 816 * s,
      height: 1056 * s
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'scale(' + s + ')',
      transformOrigin: '0 0'
    }
  }, /*#__PURE__*/React.createElement(Handout, {
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, "Market Brief \xB7 Med Spa", /*#__PURE__*/React.createElement("br", null), "Los Angeles, CA"),
    label: "Market Context",
    fact: "A $32B Market. 90% Independent.",
    reframe: "The Differentiator Is the Room.",
    dek: D.dek,
    stats: D.stats,
    gridLabel: "Tailwinds",
    grid: D.tailwinds,
    positioning: D.positioning,
    source: D.source
  }))));
}
window.HandoutView = HandoutView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HandoutView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeSheet.jsx
try { (() => {
function HomeSheet({
  go
}) {
  const {
    Masthead,
    Callout,
    Label,
    SheetFooter
  } = window.P2SVDesignSystem_92a7d1;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(Masthead, {
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, "Venture studio", /*#__PURE__*/React.createElement("br", null), "Los Angeles, CA"),
    style: {
      maxWidth: 'var(--sheet-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 600,
      lineHeight: 1.2
    }
  }, "Push to Start Ventures"), /*#__PURE__*/React.createElement("i", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "/p\u028A\u0283 t\u0259 st\u0251\u02D0rt \u02C8vent\u0283\u0259rz/ \xB7 venture studio")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-lg)',
      textWrap: 'pretty'
    }
  }, "A health and wellness venture studio in Los Angeles. P2SV builds technology for independent operators."), /*#__PURE__*/React.createElement(Callout, {
    items: [{
      title: 'Med Spa Market Brief:',
      desc: 'US market overview',
      href: '#report',
      onClick: e => {
        e.preventDefault();
        go('report');
      }
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    },
    id: "contact"
  }, /*#__PURE__*/React.createElement(Label, {
    variant: "caps"
  }, "Contact"), sent ? /*#__PURE__*/React.createElement("i", null, "Thank you. We will be in touch.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "email",
    placeholder: "you@yourspa.com",
    style: {
      flex: 1,
      minWidth: 0,
      font: 'inherit',
      fontSize: 16,
      padding: '11px 14px',
      border: '1px solid var(--border-input-color)',
      borderRight: 'none',
      borderRadius: 0,
      background: 'var(--white)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      font: 'inherit',
      fontVariant: 'small-caps',
      textTransform: 'lowercase',
      letterSpacing: 'var(--tracking-caps)',
      fontSize: 16,
      padding: '0 20px',
      background: 'var(--ink)',
      color: 'var(--paper)',
      border: '1.5px solid var(--ink)',
      borderRadius: 0,
      cursor: 'pointer'
    }
  }, "Start a conversation"))), /*#__PURE__*/React.createElement(SheetFooter, {
    right: /*#__PURE__*/React.createElement("a", {
      href: "https://pushtostart.ventures"
    }, "pushtostart.ventures")
  })));
}
window.HomeSheet = HomeSheet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ReportPage.jsx
try { (() => {
function ReportPage({
  go
}) {
  const {
    Headline,
    StatRow,
    BarChart,
    CardGrid,
    Label,
    Callout,
    SheetFooter,
    Wordmark,
    Button
  } = window.P2SVDesignSystem_92a7d1;
  const D = window.P2SV_DATA;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 'var(--report-width)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: 'var(--border-rule) solid var(--ink)',
      paddingBottom: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 28
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => go('handout')
  }, "Print handout")), /*#__PURE__*/React.createElement(Headline, {
    label: "Market Context",
    fact: "A $32B Market. 90% Independent.",
    reframe: "The Differentiator Is the Room.",
    dek: D.dek
  }), /*#__PURE__*/React.createElement(StatRow, {
    stats: D.stats
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Label, {
    rule: true
  }, "Locations"), /*#__PURE__*/React.createElement(BarChart, {
    rows: D.locations,
    caption: "US med spa locations. Source: Solomon Partners, Q2 2024."
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Label, {
    rule: true
  }, "Tailwinds"), /*#__PURE__*/React.createElement(CardGrid, {
    columns: 2,
    items: D.tailwinds
  })), /*#__PURE__*/React.createElement(Callout, {
    variant: "cta",
    statement: D.positioning,
    href: "#"
  }), /*#__PURE__*/React.createElement(SheetFooter, {
    right: D.source
  }));
}
window.ReportPage = ReportPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ReportPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.P2SV_DATA = {
  stats: [{
    value: '$32B',
    label: 'US MedSpa TAM by 2027'
  }, {
    value: '14.7%',
    label: 'Market CAGR 2023–2027'
  }, {
    value: '90%',
    label: 'Independently owned'
  }, {
    value: '$536',
    label: 'Avg. spend per visit'
  }],
  tailwinds: [{
    title: 'Aging Population',
    body: 'Restorative treatments on top of preventative routines.'
  }, {
    title: 'Cultural Acceptance',
    body: 'Procedures that were "secret" are now social currency.'
  }, {
    title: 'GLP-1 / Ozempic Effect',
    body: 'New demand for skin tightening and body contouring.'
  }, {
    title: 'Zoom & Appearance',
    body: 'Appearance consciousness is now baseline.'
  }, {
    title: 'Social Media Loop',
    body: 'Content drives visits; visits drive content.'
  }, {
    title: 'Skintellectual Demand',
    body: 'Consumers arrive educated.'
  }],
  locations: [{
    label: '2018',
    value: 4800,
    kind: 'comparison'
  }, {
    label: '2023',
    value: 9400
  }, {
    label: '2027 proj.',
    value: 12000,
    kind: 'projected'
  }],
  source: 'Source: Solomon Partners MedSpa Market Overview, Q2 2024',
  positioning: 'P2SV partners with independent med spa operators competing on experience, not scale.',
  dek: 'The US med spa market is growing from $19B to $32B by 2027 — fragmented, cash-pay, and increasingly decided by a single factor: how the room feels.'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Headline = __ds_scope.Headline;

__ds_ns.ImagePlaceholder = __ds_scope.ImagePlaceholder;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.List = __ds_scope.List;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.CardGrid = __ds_scope.CardGrid;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Masthead = __ds_scope.Masthead;

__ds_ns.SheetFooter = __ds_scope.SheetFooter;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Handout = __ds_scope.Handout;

__ds_ns.SectionSlide = __ds_scope.SectionSlide;

__ds_ns.StatSlide = __ds_scope.StatSlide;

__ds_ns.TitleSlide = __ds_scope.TitleSlide;

})();
