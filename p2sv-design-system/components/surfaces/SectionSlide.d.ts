import * as React from 'react';
/**
 * Ink section divider with a 220px display numeral.
 * @startingPoint section="Surfaces" subtitle="Ink section divider" viewport="700x400"
 */
export interface SectionSlideProps {
  /** Two-digit numeral — "02" */
  number?: string;
  title: React.ReactNode;
  kicker?: React.ReactNode;
  style?: React.CSSProperties;
}
export function SectionSlide(props: SectionSlideProps): JSX.Element;
