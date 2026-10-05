import * as React from 'react';
/**
 * US-letter one-page handout (816×1056): 14px frame, 132px band, headline, stats, tailwinds grid, positioning bar, sourced footer.
 * @startingPoint section="Surfaces" subtitle="One-page market brief handout" viewport="700x400"
 */
export interface HandoutProps {
  meta?: React.ReactNode;
  label?: React.ReactNode;
  fact: React.ReactNode;
  reframe?: React.ReactNode;
  dek?: React.ReactNode;
  stats?: { value: React.ReactNode; label: React.ReactNode }[];
  gridLabel?: React.ReactNode;
  grid?: { title: React.ReactNode; body?: React.ReactNode }[];
  positioning?: React.ReactNode;
  url?: string;
  source?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Handout(props: HandoutProps): JSX.Element;
