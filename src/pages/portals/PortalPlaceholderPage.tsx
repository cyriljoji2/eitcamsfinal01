import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  EmptyState,
} from '@/src/components/shared';
import { PortalShellLayout } from '@/src/layouts';
import type { PortalManifest } from '@/src/types';

interface PortalPlaceholderPageProps {
  manifest: PortalManifest;
}

export function PortalPlaceholderPage({ manifest }: PortalPlaceholderPageProps) {
  return (
    <PortalShellLayout manifest={manifest}>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{manifest.name}</CardTitle>
            <CardDescription>{manifest.description}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-[var(--eit-color-text-secondary)]">
            This portal route is protected by server-verified authentication and RBAC guards.
            Detailed institutional workflows and views will be implemented in subsequent phases.
          </CardContent>
        </Card>

        <EmptyState
          title="Phase 1 Portal Shell Ready"
          description="Portal module boundaries, layout slots, and access policies are prepared for feature implementation."
        />
      </div>
    </PortalShellLayout>
  );
}
