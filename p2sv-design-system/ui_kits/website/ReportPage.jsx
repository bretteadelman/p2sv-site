function ReportPage({ go }) {
  const { Headline, StatRow, BarChart, CardGrid, Label, Callout, SheetFooter, Wordmark, Button } = window.P2SVDesignSystem_92a7d1;
  const D = window.P2SV_DATA;
  return <article style={{ maxWidth:'var(--report-width)', margin:'0 auto', display:'flex', flexDirection:'column', gap:36 }}>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'var(--border-rule) solid var(--ink)', paddingBottom:14 }}>
      <a href="#" onClick={(e)=>{e.preventDefault();go('home');}} style={{ textDecoration:'none' }}><Wordmark size={28} /></a>
      <Button variant="link" onClick={()=>go('handout')}>Print handout</Button>
    </div>
    <Headline label="Market Context" fact="A $32B Market. 90% Independent." reframe="The Differentiator Is the Room." dek={D.dek} />
    <StatRow stats={D.stats} />
    <section style={{ display:'flex', flexDirection:'column', gap:14 }}><Label rule>Locations</Label><BarChart rows={D.locations} caption="US med spa locations. Source: Solomon Partners, Q2 2024." /></section>
    <section style={{ display:'flex', flexDirection:'column', gap:14 }}><Label rule>Tailwinds</Label><CardGrid columns={2} items={D.tailwinds} /></section>
    <Callout variant="cta" statement={D.positioning} href="#" />
    <SheetFooter right={D.source} />
  </article>;
}
window.ReportPage = ReportPage;
