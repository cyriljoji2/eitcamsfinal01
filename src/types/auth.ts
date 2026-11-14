import type { User } from 'firebase/auth';
import { InstitutionalRole, LoginGateway, PermissionCode } from './rbac';
import { PortalId } from './portals';

export enum AuthStatus {
  UNCONFIGURED = 'unconfigured',
  INITIALIZING = 'initializing',
  UNAUTHENTICATED = 'unauthenticated',
  AUTHENTICATED = 'authenticated',
  ERROR = 'error',
}

/**
 * Server-verified user profile & RBAC resolution.
 * Role and gateway claims must originate exclusively from Firebase ID token
 * custom claims or server-managed Firestore user documents—never client inputs.
 */
export interface AuthenticatedPrincipal {
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  gateway: LoginGateway | null;
  roles: InstitutionalRole[];
  assignedPortals: PortalId[];
  permissions: PermissionCode[];
}

export interface GatewaySignInPayload {
  gateway: LoginGateway;
  identifier: string;
  password: string;
}

export interface AuthContextValue {
  status: AuthStatus;
  firebaseReady: boolean;
  firebaseUser: User | null;
  principal: AuthenticatedPrincipal | null;
  errorMessage: string | null;
  signInWithGateway: (payload: GatewaySignInPayload) => Promise<void>;
  signOut: () => Promise<void>;
  refreshClaims: () => Promise<void>;
}
