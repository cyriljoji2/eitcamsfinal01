import { Landmark } from 'lucide-react';
import { InstitutionalRole, LoginGateway, PortalId, PortalManifest } from '@/src/types';

export const financeManifest: PortalManifest = {
  id: PortalId.FINANCE,
  order: 5,
  name: 'Finance Office',
  shortName: 'Finance',
  description: 'Fee structures, billing ledgers, concessions, receipts, and reconciliation.',
  basePath: '/portals/finance',
  gateway: LoginGateway.EMPLOYEE,
  allowedRoles: [InstitutionalRole.SUPER_ADMIN, InstitutionalRole.FINANCE_OFFICER],
  icon: Landmark,
  navigation: [
    { id: 'overview', label: 'Overview', path: '/portals/finance', phaseImplemented: false },
  ],
};
