import * as React from 'react';
/**
 * 1920×1080 title slide: 20px frame, tall band with the wordmark, two-beat headline.
 * @startingPoint section="Surfaces" subtitle="Deck title slide" viewport="700x400"
 */
export interface TitleSlideProps {
  /** Small-caps eyebrow — "Market Brief · Med Spa" */
  eyebrow?: React.ReactNode;
  fact: React.ReactNode;
  reframe?: React.ReactNode;
  /** Italic right footer — "Med Spa Market Brief · Los Angeles, CA · 2026" */
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}
export function TitleSlide(props: TitleSlideProps): JSX.Element;
