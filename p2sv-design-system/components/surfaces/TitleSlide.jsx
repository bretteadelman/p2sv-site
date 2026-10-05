import React from 'react';
import { Masthead } from '../layout/Masthead.jsx';
import { SheetFooter } from '../layout/SheetFooter.jsx';
import { Headline } from '../core/Headline.jsx';
export function TitleSlide({ eyebrow, fact, reframe, footer, style }) {
  return <Masthead frame={20} band={400} mark={240} width={1920} style={{ height:1080, ...style }}>
    <div style={{ flex:1, padding:'72px 96px 48px', display:'flex', flexDirection:'column' }}>
      <Headline label={eyebrow} fact={fact} reframe={reframe} size="88px" />
      <SheetFooter size={22} right={footer} style={{ marginTop:'auto' }} />
    </div>
  </Masthead>;
}
