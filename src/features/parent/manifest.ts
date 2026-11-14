import { Users } from 'lucide-react';
import { InstitutionalRole, LoginGateway, PortalId, PortalManifest } from '@/src/types';

export const parentManifest: PortalManifest = {
  id: PortalId.PARENT,
  order: 10,
  name: 'Parent/Guardian Portal',
  shortName: 'Parent / Guardian',
  description: 'Ward academic progress, attendance notifications, and fee visibility.',
  basePath: '/portals/parent',
  gateway: LoginGateway.PARENT,
  allowedRoles: [InstitutionalRole.PARENT_GUARDIAN],
  icon: Users,
  navigation: [
    { id: 'overview', label: 'Overview', path: '/portals/parent', phaseImplemented: false },
  ],
};
