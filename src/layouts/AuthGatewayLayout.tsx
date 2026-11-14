import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BrandMarkSlot } from '@/src/components/shared';

interface AuthGatewayLayoutProps {
  children: ReactNode;
}

export function AuthGatewayLayout({ children }: AuthGatewayLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--eit-color-bg-canvas)] text-[var(--eit-color-text-primary)]">
      <header className="border-b border-[var(--eit-color-border-subtle)] bg-[var(--eit-color-bg-header)]">
        <div className="mx-auto flex h-[var(--eit-layout-header-height)] max-w-[var(--eit-layout-max-width)] items-center justify-between px-4 sm:px-6">
          <Link to="/" className="focus-visible:outline-none">
            <BrandMarkSlot variant="primary" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--eit-color-text-secondary)] hover:text-[var(--eit-color-text-primary)]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
