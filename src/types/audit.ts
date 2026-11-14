import { PortalId } from './portals';
import { InstitutionalRole } from './rbac';

export enum AuditOutcome {
  SUCCESS = 'SUCCESS',
  DENIED = 'DENIED',
  ERROR = 'ERROR',
}

export interface AuditLogEntry {
  id: string;
  timestampIso: string;
  actorUid: string;
  actorRoles: InstitutionalRole[];
  portalId: PortalId;
  action: string;
  resourcePath: string;
  outcome: AuditOutcome;
  summary?: string;
}
