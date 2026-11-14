/**
 * Institutional Audit Log Contract (Phase 1 Blueprint)
 *
 * Sensitive operations must produce an append-only audit entry written solely
 * by trusted server code (`firebase-admin`) to `/auditLogs/{logId}`.
 */

export interface ServerAuditRecordInput {
  actorUid: string;
  actorRoles: string[];
  portalId: string;
  action: string;
  targetCollection: string;
  targetDocumentId: string;
  outcome: 'SUCCESS' | 'DENIED' | 'ERROR';
  metadata?: Record<string, string | number | boolean | null>;
}
