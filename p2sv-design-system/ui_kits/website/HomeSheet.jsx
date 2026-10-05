function HomeSheet({ go }) {
  const { Masthead, Callout, Label, SheetFooter } = window.P2SVDesignSystem_92a7d1;
  const [sent, setSent] = React.useState(false);
  return <Masthead meta={<>Venture studio<br/>Los Angeles, CA</>} style={{ maxWidth:'var(--sheet-width)', margin:'0 auto' }}>
    <div style={{ padding:'28px 32px 28px', display:'flex', flexDirection:'column', gap:24 }}>
      <div>
        <div style={{ fontSize:26, fontWeight:600, lineHeight:1.2 }}>Push to Start Ventures</div>
        <i style={{ color:'var(--text-secondary)' }}>/pʊʃ tə stɑːrt ˈventʃərz/ · venture studio</i>
      </div>
      <p style={{ margin:0, fontSize:'var(--text-body-lg)', textWrap:'pretty' }}>A health and wellness venture studio in Los Angeles. P2SV builds technology for independent operators.</p>
      <Callout items={[{ title:'Med Spa Market Brief:', desc:'US market overview', href:'#report', onClick:(e)=>{e.preventDefault();go('report');} }]} />
      <div style={{ display:'flex', flexDirection:'column', gap:8 }} id="contact">
        <Label variant="caps">Contact</Label>
        {sent ? <i>Thank you. We will be in touch.</i> : <form onSubmit={(e)=>{e.preventDefault();setSent(true);}} style={{ display:'flex', gap:0 }}>
          <input required type="email" placeholder="you@yourspa.com" style={{ flex:1, minWidth:0, font:'inherit', fontSize:16, padding:'11px 14px', border:'1px solid var(--border-input-color)', borderRight:'none', borderRadius:0, background:'var(--white)', outline:'none' }} />
          <button style={{ font:'inherit', fontVariant:'small-caps', textTransform:'lowercase', letterSpacing:'var(--tracking-caps)', fontSize:16, padding:'0 20px', background:'var(--ink)', color:'var(--paper)', border:'1.5px solid var(--ink)', borderRadius:0, cursor:'pointer' }}>Start a conversation</button>
        </form>}
      </div>
      <SheetFooter right={<a href="https://pushtostart.ventures">pushtostart.ventures</a>} />
    </div>
  </Masthead>;
}
window.HomeSheet = HomeSheet;
