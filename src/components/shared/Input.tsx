import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import { cn } from '@/src/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, helperText, error, className, id, ...props },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-[var(--eit-color-text-primary)]"
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={cn(
          'h-10 w-full rounded-[var(--eit-radius-md)] border bg-[var(--eit-color-bg-surface)] px-3 text-sm text-[var(--eit-color-text-primary)] placeholder:text-[var(--eit-color-text-muted)] focus:outline-2 focus:outline-offset-0 focus:outline-[var(--eit-color-brand-primary)] disabled:cursor-not-allowed disabled:opacity-60',
          error
            ? 'border-[var(--eit-color-status-danger-text)]'
            : 'border-[var(--eit-color-border-strong)]',
          className
        )}
        aria-invalid={error ? 'true' : undefined}
        {...props}
      />
      {error ? (
        <p className="text-xs text-[var(--eit-color-status-danger-text)]">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-[var(--eit-color-text-muted)]">{helperText}</p>
      ) : null}
    </div>
  );
});
