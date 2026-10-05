import * as React from 'react';
/** Text list with brand markers. Never icon bullets. */
export interface ListProps {
  /** dash = em-dash (brand), dot = middle dot (report), number = 01 02 03 in the display face */
  marker?: 'dash' | 'dot' | 'number';
  items: React.ReactNode[];
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function List(props: ListProps): JSX.Element;
