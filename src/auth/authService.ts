import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  type Unsubscribe,
  type User,
} from 'firebase/auth';
import { getFirebaseAuth } from '@/src/lib/firebase';
import {
  AuthenticatedPrincipal,
  GatewaySignInPayload,
  InstitutionalRole,
  LoginGateway,
  PermissionCode,
  PortalId,
} from '@/src/types';

function parseStringArray(claimValue: unknown): string[] {
  if (!Array.isArray(claimValue)) {
    return [];
  }
  return claimValue.filter((item): item is string => typeof item === 'string');
}

function parseLoginGateway(claimValue: unknown): LoginGateway | null {
  if (
    claimValue === LoginGateway.STUDENT ||
    claimValue === LoginGateway.EMPLOYEE ||
    claimValue === LoginGateway.PARENT
  ) {
    return claimValue;
  }
  return null;
}

/**
 * Extracts verified principal metadata exclusively from the Firebase Auth ID token's
 * server-issued custom claims. Never reads or trusts browser-supplied role values.
 */
export async function resolvePrincipalFromFirebaseUser(
  user: User,
  forceRefresh = false
): Promise<AuthenticatedPrincipal> {
  const tokenResult = await user.getIdTokenResult(forceRefresh);
  const claims = tokenResult.claims;

  const validRoles = new Set<string>(Object.values(InstitutionalRole));
  const validPortals = new Set<string>(Object.values(PortalId));
  const validPermissions = new Set<string>(Object.values(PermissionCode));

  const roles = parseStringArray(claims.roles).filter((role): role is InstitutionalRole =>
    validRoles.has(role)
  );
  const assignedPortals = parseStringArray(claims.portals).filter(
    (portal): portal is PortalId => validPortals.has(portal)
  );
  const permissions = parseStringArray(claims.permissions).filter(
    (permission): permission is PermissionCode => validPermissions.has(permission)
  );

  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    emailVerified: user.emailVerified,
    gateway: parseLoginGateway(claims.gateway),
    roles,
    assignedPortals,
    permissions,
  };
}

export async function authenticateWithGateway(
  payload: GatewaySignInPayload
): Promise<AuthenticatedPrincipal> {
  const auth = getFirebaseAuth();
  if (!auth) {
    throw new Error(
      'Firebase Authentication is not configured yet. Configure Firebase before signing in.'
    );
  }

  const credential = await signInWithEmailAndPassword(
    auth,
    payload.identifier.trim(),
    payload.password
  );

  const principal = await resolvePrincipalFromFirebaseUser(credential.user, true);

  // Enforce server-claimed gateway alignment when claims are provisioned.
  if (principal.gateway !== null && principal.gateway !== payload.gateway) {
    await firebaseSignOut(auth);
    throw new Error('This account is not authorized for the selected login gateway.');
  }

  return principal;
}

export async function signOutFromSession(): Promise<void> {
  const auth = getFirebaseAuth();
  if (!auth) {
    return;
  }
  await firebaseSignOut(auth);
}

export function subscribeToAuthSession(
  onUserChanged: (user: User | null) => void
): Unsubscribe {
  const auth = getFirebaseAuth();
  if (!auth) {
    return () => {};
  }
  return onAuthStateChanged(auth, onUserChanged);
}
