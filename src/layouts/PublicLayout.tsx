import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_GATEWAY_LIST } from '@/src/auth';
import { BrandMarkSlot } from '@/src/components/shared';

interface PublicLayoutProps {
  children: ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--eit-color-bg-canvas)] text-[var(--eit-color-text-primary)]">
      <header className="border-b border-[var(--eit-color-border-subtle)] bg-[var(--eit-color-bg-header)]">
        <div className="mx-auto flex h-[var(--eit-layout-header-height)] max-w-[var(--eit-layout-max-width)] items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="focus-visible:outline-none">
            <BrandMarkSlot variant="primary" />
          </Link>

          <nav aria-label="Public login gateways" className="flex flex-wrap items-center gap-2">
            {PUBLIC_GATEWAY_LIST.map((gateway) => (
              <Link
                key={gateway.id}
                to={gateway.routePath}
                className="rounded-[var(--eit-radius-md)] border border-[var(--eit-color-border-strong)] bg-[var(--eit-color-bg-surface)] px-3 py-1.5 text-xs font-medium text-[var(--eit-color-text-primary)] transition-colors hover:bg-[var(--eit-color-bg-subtle)] sm:text-sm"
              >
                {gateway.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[var(--eit-layout-max-width)] flex-1 px-4 py-8 sm:px-6 sm:py-10">
        {children}
      </main>

      <footer className="border-t border-[var(--eit-color-border-subtle)] bg-[var(--eit-color-bg-footer)]">
        <div className="mx-auto flex max-w-[var(--eit-layout-max-width)] flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-[var(--eit-color-text-muted)] sm:flex-row sm:items-center sm:px-6">
          <span>Electrix Institute of Technology — Campus Administration Management System</span>
          <span>Phase 1 Foundation Architecture</span>
        </div>
      </footer>
    </div>
  );
}
