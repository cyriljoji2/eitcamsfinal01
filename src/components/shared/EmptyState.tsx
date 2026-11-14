import type { ReactNode } from 'react';
import { cn } from '@/src/utils';

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-[var(--eit-radius-lg)] border border-dashed border-[var(--eit-color-border-strong)] bg-[var(--eit-color-bg-surface)] px-6 py-10 text-center',
        className
      )}
    >
      <h3 className="text-sm font-semibold text-[var(--eit-color-text-primary)]">{title}</h3>
      <p className="mt-1 max-w-md text-sm text-[var(--eit-color-text-secondary)]">
        {description}
      </p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
