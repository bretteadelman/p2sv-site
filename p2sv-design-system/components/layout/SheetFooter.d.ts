import * as React from 'react';
/** 1.5px ink rule with small-caps colophon left and italic source/page right. */
export interface SheetFooterProps {
  left?: React.ReactNode;
  /** "Source: Solomon Partners MedSpa Market Overview, Q2 2024" or "Med Spa Market Brief · 03" */
  right?: React.ReactNode;
  /** Text size px; 13 web/print, 22 slides */
  size?: number;
  style?: React.CSSProperties;
}
export function SheetFooter(props: SheetFooterProps): JSX.Element;
