import * as React from 'react';
/** The P2SV wordmark, set live in Climate Crisis (YEAR 1979). */
export interface WordmarkProps {
  /** px; 80 is the wordmark step */
  size?: number;
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function Wordmark(props: WordmarkProps): JSX.Element;
