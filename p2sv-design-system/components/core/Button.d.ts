import * as React from 'react';
/**
 * Small-caps serif button. Square, ink-filled or outlined; hover changes colour only.
 * @startingPoint section="Core" subtitle="Primary, outline and link buttons" viewport="700x220"
 */
export interface ButtonProps {
  /** primary = ink fill; outline = ink border, fills on hover; link = underlined text */
  variant?: 'primary' | 'outline' | 'link';
  /** Append the ↓ arrow glyph (the brand's only icon) */
  arrow?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
