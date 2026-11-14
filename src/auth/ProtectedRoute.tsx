import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthStatus, InstitutionalRole, LoginGateway, PortalId } from '@/src/types';
import { useAuth } from './AuthContext';
import { canPrincipalAccessPortal } from './portalAccess';

interface ProtectedRouteProps {
  portalId: PortalId;
  requiredGateway: LoginGateway;
  allowedRoles: InstitutionalRole[];
  children: ReactNode;
}

/**
 * Fail-closed route guard for all ten EIT CAMS portals.
 * Never allows unauthenticated, unconfigured, or unauthorized access.
 */
export function ProtectedRoute({
  portalId,
  requiredGateway,
  allowedRoles,
  children,
}: ProtectedRouteProps) {
  const { status, principal } = useAuth();
  const location = useLocation();

  if (status === AuthStatus.INITIALIZING) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--eit-color-bg-canvas)] text-sm text-[var(--eit-color-text-secondary)]">
        Verifying session...
      </div>
    );
  }

  if (status !== AuthStatus.AUTHENTICATED || !principal) {
    return (
      <Navigate
        to={`/login/${requiredGateway}`}
        replace
        state={{ from: location.pathname, portalId }}
      />
    );
  }

  if (!canPrincipalAccessPortal(principal, portalId, allowedRoles)) {
    return <Navigate to="/unauthorized" replace state={{ portalId }} />;
  }

  return <>{children}</>;
}
