import { UserCheck } from 'lucide-react';
import { InstitutionalRole, LoginGateway, PortalId, PortalManifest } from '@/src/types';

export const studentManifest: PortalManifest = {
  id: PortalId.STUDENT,
  order: 9,
  name: 'Student Portal',
  shortName: 'Student',
  description: 'Academic profile, courses, attendance, examination records, and fee status.',
  basePath: '/portals/student',
  gateway: LoginGateway.STUDENT,
  allowedRoles: [InstitutionalRole.STUDENT],
  icon: UserCheck,
  navigation: [
    { id: 'overview', label: 'Overview', path: '/portals/student', phaseImplemented: false },
  ],
};
