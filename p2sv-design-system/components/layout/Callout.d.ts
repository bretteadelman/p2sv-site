import * as React from 'react';
/**
 * Ink callout: a list of key reports, or an italic statement with a call to action.
 * @startingPoint section="Layout" subtitle="Key reports and CTA callouts" viewport="700x200"
 */
export interface CalloutProps {
  variant?: 'reports' | 'cta';
  /** reports: caps title */
  title?: string;
  /** reports: linked titles with optional trailing description */
  items?: { title: React.ReactNode; desc?: React.ReactNode; href?: string; onClick?: (e: React.MouseEvent) => void }[];
  /** cta: italic statement */
  statement?: React.ReactNode;
  /** cta: link text, rendered with ↓ */
  action?: string;
  href?: string;
  style?: React.CSSProperties;
}
export function Callout(props: CalloutProps): JSX.Element;
