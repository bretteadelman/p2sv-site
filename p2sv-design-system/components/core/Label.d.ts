import * as React from 'react';
/** Section label: small caps (report) or semibold caps (homepage). Short nouns only. */
export interface LabelProps {
  /** sc = small caps 13px .12em grey; caps = 15px 600 .06em ink */
  variant?: 'sc' | 'caps';
  /** Hairline rule beneath */
  rule?: boolean;
  /** For ink surfaces */
  inverse?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Label(props: LabelProps): JSX.Element;
