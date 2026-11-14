import { ServerCog } from 'lucide-react';
import { InstitutionalRole, LoginGateway, PortalId, PortalManifest } from '@/src/types';

export const itManifest: PortalManifest = {
  id: PortalId.IT,
  order: 7,
  name: 'IT Department',
  shortName: 'IT Dept',
  description: 'Account provisioning, access policies, system configuration, and audit oversight.',
  basePath: '/portals/it',
  gateway: LoginGateway.EMPLOYEE,
  allowedRoles: [InstitutionalRole.SUPER_ADMIN, InstitutionalRole.IT_ADMINISTRATOR],
  icon: ServerCog,
  navigation: [
    { id: 'overview', label: 'Overview', path: '/portals/it', phaseImplemented: false },
  ],
};
