import * as React from 'react';
/**
 * Two-beat headline: a roman fact, then an italic reframe. Regular weight, never bold.
 * @startingPoint section="Core" subtitle="Label + two-beat headline + dek" viewport="700x260"
 */
export interface HeadlineProps {
  label?: React.ReactNode;
  /** Line one — the fact. "A $32B Market. 90% Independent." */
  fact: React.ReactNode;
  /** Line two, italic — the reframe. "The Differentiator Is the Room." */
  reframe?: React.ReactNode;
  dek?: React.ReactNode;
  /** h1 32px (default) · h2 22px · display 64px (slides) · or any CSS size */
  size?: 'h1' | 'h2' | 'display' | string;
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function Headline(props: HeadlineProps): JSX.Element;
