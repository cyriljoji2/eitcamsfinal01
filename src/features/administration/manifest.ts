import { Building2 } from 'lucide-react';
import { InstitutionalRole, LoginGateway, PortalId, PortalManifest } from '@/src/types';

export const administrationManifest: PortalManifest = {
  id: PortalId.ADMINISTRATION,
  order: 1,
  name: 'Administration Office',
  shortName: 'Administration',
  description: 'Central institutional governance, staff oversight, and administrative records.',
  basePath: '/portals/administration',
  gateway: LoginGateway.EMPLOYEE,
  allowedRoles: [InstitutionalRole.SUPER_ADMIN, InstitutionalRole.ADMIN_OFFICE],
  icon: Building2,
  navigation: [
    { id: 'overview', label: 'Overview', path: '/portals/administration', phaseImplemented: false },
  ],
};
