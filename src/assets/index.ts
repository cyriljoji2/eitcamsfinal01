/**
 * EIT CAMS — Asset Registry (Phase 1 Placeholder)
 *
 * Original EIT logos, institutional emblems, and background assets will be
 * imported here once the reference repository is provided.
 * Do not invent final branding graphics before visual reference verification.
 */

export interface BrandAssetSlot {
  id: string;
  label: string;
  src: string | null;
  alt: string;
}

export const EIT_ASSETS: Record<'primaryLogo' | 'compactMark' | 'loginBackdrop', BrandAssetSlot> = {
  primaryLogo: {
    id: 'eit-primary-logo',
    label: 'EIT Primary Logo Slot',
    src: null,
    alt: 'Electrix Institute of Technology',
  },
  compactMark: {
    id: 'eit-compact-mark',
    label: 'EIT Compact Mark Slot',
    src: null,
    alt: 'EIT',
  },
  loginBackdrop: {
    id: 'eit-login-backdrop',
    label: 'Gateway Backdrop Slot',
    src: null,
    alt: 'Electrix Institute of Technology Campus',
  },
};
