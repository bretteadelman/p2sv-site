import * as React from 'react';
/** Hatched stand-in for photography (none exists yet). With src, renders the photo in black & white. */
export interface ImagePlaceholderProps {
  /** What belongs here — "Treatment room", "Founder portrait" */
  label?: string;
  /** CSS aspect-ratio, default "4 / 3" */
  ratio?: string;
  height?: number | string;
  /** Real image; rendered grayscale(1) contrast(1.08) */
  src?: string;
  style?: React.CSSProperties;
}
export function ImagePlaceholder(props: ImagePlaceholderProps): JSX.Element;
