function HandoutView({ go }) {
  const { Handout, Button } = window.P2SVDesignSystem_92a7d1;
  const D = window.P2SV_DATA;
  const ref = React.useRef(null); const [s, setS] = React.useState(1);
  React.useEffect(() => { const f = () => setS(Math.min(1, (ref.current.clientWidth) / 816)); f(); window.addEventListener('resize', f); return () => window.removeEventListener('resize', f); }, []);
  return <div ref={ref} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:16 }}>
    <div style={{ width:816*s, display:'flex', justifyContent:'space-between' }}><Button variant="link" onClick={()=>go('report')}>Back to the brief</Button><Button variant="outline" onClick={()=>window.print()}>Print</Button></div>
    <div style={{ width:816*s, height:1056*s }}><div style={{ transform:'scale(' + s + ')', transformOrigin:'0 0' }}>
      <Handout meta={<>Market Brief · Med Spa<br/>Los Angeles, CA</>} label="Market Context" fact="A $32B Market. 90% Independent." reframe="The Differentiator Is the Room." dek={D.dek} stats={D.stats} gridLabel="Tailwinds" grid={D.tailwinds} positioning={D.positioning} source={D.source} />
    </div></div>
  </div>;
}
window.HandoutView = HandoutView;
