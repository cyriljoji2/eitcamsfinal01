import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PUBLIC_GATEWAY_LIST } from '@/src/auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  NoticeBanner,
} from '@/src/components/shared';
import { PORTAL_MANIFESTS } from '@/src/features';
import { PublicLayout } from '@/src/layouts';

export function HomePage() {
  return (
    <PublicLayout>
      <div className="space-y-8">
        <section className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--eit-color-text-muted)]">
            Electrix Institute of Technology
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-[var(--eit-color-text-primary)] sm:text-3xl">
            EIT CAMS — Phase 1 Foundation Shell
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-[var(--eit-color-text-secondary)]">
            Structural foundation for the Electrix Institute of Technology Campus Administration
            Management System. Visual styling, original EIT branding assets, institutional workflows,
            and live Firebase connectivity will be applied in subsequent phases using the GitHub
            reference repository.
          </p>
        </section>

        <NoticeBanner tone="info" title="Phase 1 Boundary Notice">
          Authentication and portal modules are scaffolded behind server-verified RBAC guards.
          Firebase is intentionally unconfigured in Phase 1 until project provisioning and
          reference integration begin.
        </NoticeBanner>

        {/* Three Public Login Gateways */}
        <section aria-labelledby="public-gateways-heading" className="space-y-4">
          <div>
            <h2
              id="public-gateways-heading"
              className="text-lg font-semibold text-[var(--eit-color-text-primary)]"
            >
              Public Login Gateways
            </h2>
            <p className="text-sm text-[var(--eit-color-text-secondary)]">
              All institutional offices and faculty authenticate through the unified Employee Login
              gateway.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {PUBLIC_GATEWAY_LIST.map((gateway) => (
              <Card key={gateway.id} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>{gateway.label}</CardTitle>
                  <CardDescription>{gateway.audienceSummary}</CardDescription>
                </CardHeader>
                <CardContent className="text-xs text-[var(--eit-color-text-muted)]">
                  Route: <code className="font-mono">{gateway.routePath}</code>
                </CardContent>
                <CardFooter>
                  <Link
                    to={gateway.routePath}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--eit-radius-md)] bg-[var(--eit-color-brand-primary)] px-4 py-2 text-sm font-medium text-[var(--eit-color-text-inverse)] transition-colors hover:bg-[var(--eit-color-brand-primary-hover)]"
                  >
                    <span>Open {gateway.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Registered Portal Architecture (10 Portals) */}
        <section aria-labelledby="portal-architecture-heading" className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[var(--eit-color-text-secondary)]" />
            <h2
              id="portal-architecture-heading"
              className="text-lg font-semibold text-[var(--eit-color-text-primary)]"
            >
              Registered Institutional Portal Modules (10)
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {PORTAL_MANIFESTS.map((portal) => {
              const Icon = portal.icon;
              return (
                <Card key={portal.id}>
                  <CardContent className="space-y-2 p-4">
                    <div className="flex items-center gap-2">
                      {Icon && (
                        <Icon className="h-4 w-4 shrink-0 text-[var(--eit-color-text-secondary)]" />
                      )}
                      <span className="text-sm font-semibold text-[var(--eit-color-text-primary)]">
                        {portal.order}. {portal.name}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--eit-color-text-secondary)]">
                      {portal.description}
                    </p>
                    <p className="text-[11px] text-[var(--eit-color-text-muted)]">
                      Gateway: <span className="font-medium capitalize">{portal.gateway}</span>
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
