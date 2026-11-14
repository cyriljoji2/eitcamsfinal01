import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/src/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--eit-color-brand-primary)] text-[var(--eit-color-text-inverse)] hover:bg-[var(--eit-color-brand-primary-hover)] border border-transparent',
  secondary:
    'bg-[var(--eit-color-bg-subtle)] text-[var(--eit-color-text-primary)] hover:bg-[var(--eit-color-border-subtle)] border border-transparent',
  outline:
    'bg-[var(--eit-color-bg-surface)] text-[var(--eit-color-text-primary)] border border-[var(--eit-color-border-strong)] hover:bg-[var(--eit-color-bg-subtle)]',
  ghost:
    'bg-transparent text-[var(--eit-color-text-secondary)] hover:bg-[var(--eit-color-bg-subtle)] border border-transparent',
  danger:
    'bg-[var(--eit-color-status-danger-bg)] text-[var(--eit-color-status-danger-text)] border border-transparent hover:opacity-90',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[var(--eit-radius-md)] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--eit-color-brand-primary)] disabled:pointer-events-none disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    />
  );
}
