import { BookOpen } from 'lucide-react';
import { InstitutionalRole, LoginGateway, PortalId, PortalManifest } from '@/src/types';

export const academicManifest: PortalManifest = {
  id: PortalId.ACADEMIC,
  order: 3,
  name: 'Academic Office',
  shortName: 'Academic',
  description: 'Programs, departments, curricula, timetables, and academic regulations.',
  basePath: '/portals/academic',
  gateway: LoginGateway.EMPLOYEE,
  allowedRoles: [InstitutionalRole.SUPER_ADMIN, InstitutionalRole.ACADEMIC_OFFICER],
  icon: BookOpen,
  navigation: [
    { id: 'overview', label: 'Overview', path: '/portals/academic', phaseImplemented: false },
  ],
};
