import * as React from 'react';
/**
 * The framed surface: ink frame, thickened header band with wordmark bottom-left, white sheet below.
 * @startingPoint section="Layout" subtitle="Framed sheet with header band" viewport="700x300"
 */
export interface MastheadProps {
  /** Italic right-aligned band text — "Market Brief · Med Spa / Los Angeles, CA" */
  meta?: React.ReactNode;
  /** Frame width: 10 web · 14 letter · 20 slide */
  frame?: number;
  /** Band height: 128 web · 132 letter · 260 slide */
  band?: number;
  /** Wordmark size in px */
  mark?: number;
  width?: number | string;
  /** Sheet content */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Masthead(props: MastheadProps): JSX.Element;
