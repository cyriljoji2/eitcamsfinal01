/**
 * Server-side Auth & RBAC Guard Specification (Phase 1 Blueprint)
 *
 * Security Invariants:
 * - Never trust client-supplied user IDs, portal IDs, or role arrays.
 * - Extract uid exclusively from verified Firebase ID token (`auth.verifyIdToken`).
 * - Resolve effective roles from server-controlled custom claims and/or trusted
 *   server-only Firestore RBAC documents.
 */

export interface VerifiedServerCaller {
  uid: string;
  email: string | null;
  emailVerified: boolean;
  gateway: 'student' | 'employee' | 'parent';
  roles: string[];
}

export interface RequiredAccessPolicy {
  allowedGateways: Array<'student' | 'employee' | 'parent'>;
  requiredRoles: string[];
  requireEmailVerified?: boolean;
}
