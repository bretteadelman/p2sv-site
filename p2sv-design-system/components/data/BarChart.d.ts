import * as React from 'react';
/**
 * Horizontal monochrome bars: ink actual, grey comparison/context, hatched projected.
 * @startingPoint section="Data" subtitle="Monochrome bar chart with projection" viewport="700x220"
 */
export interface BarChartProps {
  rows: { label: string; value: number; kind?: 'actual' | 'comparison' | 'context' | 'projected' }[];
  max?: number;
  /** Italic source line — "US med spa locations. Source: Solomon Partners, Q2 2024." */
  caption?: string;
  format?: (v: number) => string;
  style?: React.CSSProperties;
}
export function BarChart(props: BarChartProps): JSX.Element;
