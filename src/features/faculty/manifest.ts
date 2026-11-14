import { GraduationCap } from 'lucide-react';
import { InstitutionalRole, LoginGateway, PortalId, PortalManifest } from '@/src/types';

export const facultyManifest: PortalManifest = {
  id: PortalId.FACULTY,
  order: 8,
  name: 'Faculty Portal',
  shortName: 'Faculty',
  description: 'Course instruction, attendance, internal assessments, and mentoring.',
  basePath: '/portals/faculty',
  gateway: LoginGateway.EMPLOYEE,
  allowedRoles: [InstitutionalRole.SUPER_ADMIN, InstitutionalRole.FACULTY],
  icon: GraduationCap,
  navigation: [
    { id: 'overview', label: 'Overview', path: '/portals/faculty', phaseImplemented: false },
  ],
};
