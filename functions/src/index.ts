/**
 * EIT CAMS — Cloud Functions Entry Point (Phase 1 Skeleton)
 *
 * All sensitive institutional operations (role assignment, admissions approval,
 * COE result publication, finance settlement, audit log writes) must execute
 * server-side with verified Firebase ID tokens and server-enforced RBAC.
 *
 * Feature handlers will be implemented in Phase 2+ after Firebase provisioning.
 */

export const FUNCTIONS_ARCHITECTURE_VERSION = 'phase-1-skeleton';

export interface ServerCallableResponse<T = unknown> {
  ok: boolean;
  data?: T;
  errorCode?: string;
  message?: string;
}
