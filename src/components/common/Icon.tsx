import type { CSSProperties } from 'react';

/**
 * FontAwesome 6 Pro icon — the ONLY icon set allowed by the GHN Design System.
 *
 * Rules baked in (see AGENTS.md):
 *  - Regular (400) is the default weight; use `variant` for Solid/Light/Thin.
 *  - Size follows the text size: 12 (caption) · 16 (body14) · 20 (body16) · 24 (title).
 *  - Colour via tokens through `tone`; never hardcode a hex.
 *  - Decorative icons are aria-hidden; pass `label` for a meaningful / icon-only icon.
 *
 * `name` is the glyph without the `fa-` prefix, e.g. <Icon name="truck-fast" />.
 */
export type IconVariant = 'regular' | 'solid' | 'light' | 'thin';
export type IconTone = 'default' | 'muted' | 'primary' | 'inverse';
export type IconSize = 12 | 16 | 20 | 24 | number;

const VARIANT_CLASS: Record<IconVariant, string> = {
  regular: 'fa-regular',
  solid: 'fa-solid',
  light: 'fa-light',
  thin: 'fa-thin',
};

const TONE_CLASS: Record<IconTone, string> = {
  default: '',
  muted: 'is-muted',
  primary: 'is-primary',
  inverse: 'is-inverse',
};

export interface IconProps {
  name: string;
  variant?: IconVariant;
  tone?: IconTone;
  size?: IconSize;
  /** Accessible name. When provided the icon is exposed to AT; otherwise it is decorative. */
  label?: string;
  spin?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export function Icon({
  name,
  variant = 'regular',
  tone = 'default',
  size = 16,
  label,
  spin = false,
  className = '',
  style,
  onClick,
}: IconProps) {
  const classes = [
    'fa',
    `fa-${name}`,
    VARIANT_CLASS[variant],
    TONE_CLASS[tone],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <i
      className={classes}
      onClick={onClick}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
      style={{
        fontSize: size,
        width: size,
        height: size,
        textAlign: 'center',
        animation: spin ? 'ghn-spin 1s linear infinite' : undefined,
        ...style,
      }}
    />
  );
}

export default Icon;
