import * as React from 'react';
/**
 * Row of display-face figures with italic labels, divided by hairlines.
 * @startingPoint section="Data" subtitle="Four headline figures" viewport="700x160"
 */
export interface StatRowProps {
  stats: { value: React.ReactNode; label: React.ReactNode }[];
  /** Figure size in px; 30 web/handout, 64 on slides */
  size?: number;
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function StatRow(props: StatRowProps): JSX.Element;
