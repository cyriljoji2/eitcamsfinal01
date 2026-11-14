/**
 * Typed Design System Token Map
 * Maps semantic UI layers to CSS custom properties defined in tokens.css.
 */
export const designTokens = {
  colors: {
    bgCanvas: 'var(--eit-color-bg-canvas)',
    bgSurface: 'var(--eit-color-bg-surface)',
    bgSubtle: 'var(--eit-color-bg-subtle)',
    bgSidebar: 'var(--eit-color-bg-sidebar)',
    bgHeader: 'var(--eit-color-bg-header)',
    bgFooter: 'var(--eit-color-bg-footer)',
    textPrimary: 'var(--eit-color-text-primary)',
    textSecondary: 'var(--eit-color-text-secondary)',
    textMuted: 'var(--eit-color-text-muted)',
    textInverse: 'var(--eit-color-text-inverse)',
    borderSubtle: 'var(--eit-color-border-subtle)',
    borderStrong: 'var(--eit-color-border-strong)',
    brandPrimary: 'var(--eit-color-brand-primary)',
    brandPrimaryHover: 'var(--eit-color-brand-primary-hover)',
  },
  layout: {
    headerHeight: 'var(--eit-layout-header-height)',
    sidebarWidth: 'var(--eit-layout-sidebar-width)',
    maxWidth: 'var(--eit-layout-max-width)',
  },
  radius: {
    sm: 'var(--eit-radius-sm)',
    md: 'var(--eit-radius-md)',
    lg: 'var(--eit-radius-lg)',
  },
} as const;
