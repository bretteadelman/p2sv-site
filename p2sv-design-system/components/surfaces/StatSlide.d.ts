import * as React from 'react';
/**
 * 1920×1080 framed slide with a statement and a row of display figures.
 * @startingPoint section="Surfaces" subtitle="Statement + four figures slide" viewport="700x400"
 */
export interface StatSlideProps {
  label?: React.ReactNode;
  /** Roman part of the statement */
  statement: React.ReactNode;
  /** Italic continuation */
  emphasis?: React.ReactNode;
  stats?: { value: React.ReactNode; label: React.ReactNode }[];
  /** "Med Spa Market Brief · 03" */
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}
export function StatSlide(props: StatSlideProps): JSX.Element;
