import type { ReactNode } from 'react';
import { cn } from '@/src/utils';

export type NoticeTone = 'info' | 'warning' | 'danger' | 'success';

interface NoticeBannerProps {
  tone?: NoticeTone;
  title?: string;
  children: ReactNode;
  className?: string;
}

const toneClasses: Record<NoticeTone, string> = {
  info: 'bg-[var(--eit-color-status-info-bg)] text-[var(--eit-color-status-info-text)] border-[var(--eit-color-border-strong)]',
  warning:
    'bg-[var(--eit-color-status-warning-bg)] text-[var(--eit-color-status-warning-text)] border-transparent',
  danger:
    'bg-[var(--eit-color-status-danger-bg)] text-[var(--eit-color-status-danger-text)] border-transparent',
  success:
    'bg-[var(--eit-color-status-success-bg)] text-[var(--eit-color-status-success-text)] border-transparent',
};

export function NoticeBanner({
  tone = 'info',
  title,
  children,
  className,
}: NoticeBannerProps) {
  return (
    <div
      role="status"
      className={cn(
        'rounded-[var(--eit-radius-md)] border px-4 py-3 text-sm',
        toneClasses[tone],
        className
      )}
    >
      {title && <p className="mb-1 font-semibold">{title}</p>}
      <div>{children}</div>
    </div>
  );
}
