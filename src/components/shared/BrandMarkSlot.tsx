import { EIT_ASSETS } from '@/src/assets';
import { cn } from '@/src/utils';

interface BrandMarkSlotProps {
  variant?: 'primary' | 'compact';
  className?: string;
}

/**
 * Structural logo slot for EIT CAMS branding.
 * Renders the original EIT asset once imported into src/assets/index.ts.
 */
export function BrandMarkSlot({ variant = 'primary', className }: BrandMarkSlotProps) {
  const asset = variant === 'compact' ? EIT_ASSETS.compactMark : EIT_ASSETS.primaryLogo;

  if (asset.src) {
    return (
      <img
        src={asset.src}
        alt={asset.alt}
        className={cn(variant === 'compact' ? 'h-8 w-auto' : 'h-10 w-auto', className)}
      />
    );
  }

  return (
    <div className={cn('inline-flex items-center gap-3', className)}>
      <span
        aria-hidden="true"
        className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--eit-radius-md)] border border-[var(--eit-color-border-strong)] bg-[var(--eit-color-bg-subtle)] text-xs font-semibold tracking-wider text-[var(--eit-color-text-primary)]"
      >
        EIT
      </span>
      {variant === 'primary' && (
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-[var(--eit-color-text-primary)]">
            EIT CAMS
          </span>
          <span className="text-xs text-[var(--eit-color-text-muted)]">
            Electrix Institute of Technology
          </span>
        </div>
      )}
    </div>
  );
}
