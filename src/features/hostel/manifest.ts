import { BedDouble } from 'lucide-react';
import { InstitutionalRole, LoginGateway, PortalId, PortalManifest } from '@/src/types';

export const hostelManifest: PortalManifest = {
  id: PortalId.HOSTEL,
  order: 6,
  name: 'Hostel Office',
  shortName: 'Hostel',
  description: 'Residential blocks, room allotment, mess administration, and gate passes.',
  basePath: '/portals/hostel',
  gateway: LoginGateway.EMPLOYEE,
  allowedRoles: [InstitutionalRole.SUPER_ADMIN, InstitutionalRole.HOSTEL_WARDEN],
  icon: BedDouble,
  navigation: [
    { id: 'overview', label: 'Overview', path: '/portals/hostel', phaseImplemented: false },
  ],
};
