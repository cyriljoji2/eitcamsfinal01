import { useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '@/src/auth';
import { BrandMarkSlot, Button } from '@/src/components/shared';
import type { PortalManifest } from '@/src/types';
import { cn } from '@/src/utils';

interface PortalShellLayoutProps {
  manifest: PortalManifest;
  children: ReactNode;
}

export function PortalShellLayout({ manifest, children }: PortalShellLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { principal, signOut } = useAuth();
  const location = useLocation();

  const Icon = manifest.icon;

  return (
    <div className="flex min-h-screen bg-[var(--eit-color-bg-canvas)] text-[var(--eit-color-text-primary)]">
      {/* Sidebar (Desktop + Slide-over Mobile) */}
      <aside
        aria-label={`${manifest.name} navigation`}
        className={cn(
          'fixed inset-y-0 left-0 z-30 flex w-[var(--eit-layout-sidebar-width)] flex-col border-r border-[var(--eit-color-border-subtle)] bg-[var(--eit-color-bg-sidebar)] transition-transform lg:static lg:translate-x-0',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-[var(--eit-layout-header-height)] items-center justify-between border-b border-[var(--eit-color-border-subtle)] px-4">
          <BrandMarkSlot variant="primary" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-[var(--eit-radius-sm)] p-1 text-[var(--eit-color-text-secondary)] hover:bg-[var(--eit-color-bg-subtle)] lg:hidden"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="border-b border-[var(--eit-color-border-subtle)] px-4 py-3">
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4 text-[var(--eit-color-text-secondary)]" />}
            <span className="text-sm font-semibold text-[var(--eit-color-text-primary)]">
              {manifest.name}
            </span>
          </div>
        </div>

        <nav className="flex-1 space-y-1 p-3">
          {manifest.navigation.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'flex items-center justify-between rounded-[var(--eit-radius-md)] px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-[var(--eit-color-bg-subtle)] text-[var(--eit-color-text-primary)]'
                    : 'text-[var(--eit-color-text-secondary)] hover:bg-[var(--eit-color-bg-subtle)]/70 hover:text-[var(--eit-color-text-primary)]'
                )}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[var(--eit-color-border-subtle)] p-4 text-xs text-[var(--eit-color-text-muted)]">
          <p className="truncate font-medium text-[var(--eit-color-text-primary)]">
            {principal?.displayName ?? principal?.email ?? 'Authenticated User'}
          </p>
          <p className="mt-0.5 truncate">EIT CAMS Portal Shell</p>
        </div>
      </aside>

      {/* Main Column */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[var(--eit-layout-header-height)] items-center justify-between border-b border-[var(--eit-color-border-subtle)] bg-[var(--eit-color-bg-header)] px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-[var(--eit-radius-sm)] p-1.5 text-[var(--eit-color-text-secondary)] hover:bg-[var(--eit-color-bg-subtle)] lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-base font-semibold text-[var(--eit-color-text-primary)]">
              {manifest.name}
            </h1>
          </div>

          <Button variant="outline" size="sm" onClick={() => void signOut()}>
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </Button>
        </header>

        <main className="flex-1 p-4 sm:p-6">{children}</main>

        <footer className="border-t border-[var(--eit-color-border-subtle)] bg-[var(--eit-color-bg-footer)] px-4 py-3 text-xs text-[var(--eit-color-text-muted)] sm:px-6">
          Electrix Institute of Technology — {manifest.name}
        </footer>
      </div>
    </div>
  );
}
