import * as React from 'react';
/**
 * Grid of white cells separated by 1px grey-200 gaps — not borders on each card.
 * @startingPoint section="Data" subtitle="Numbered tailwinds grid" viewport="700x200"
 */
export interface CardGridProps {
  items: { title: React.ReactNode; body?: React.ReactNode }[];
  columns?: number;
  /** 01 02 03 numerals in the display face */
  numbered?: boolean;
  /** Tighter handout density */
  compact?: boolean;
  style?: React.CSSProperties;
}
export function CardGrid(props: CardGridProps): JSX.Element;
