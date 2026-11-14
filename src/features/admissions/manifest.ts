import { UserPlus } from 'lucide-react';
import { InstitutionalRole, LoginGateway, PortalId, PortalManifest } from '@/src/types';

export const admissionsManifest: PortalManifest = {
  id: PortalId.ADMISSIONS,
  order: 2,
  name: 'Admissions Office',
  shortName: 'Admissions',
  description: 'Applicant intake, verification, seat allocation, and onboarding workflows.',
  basePath: '/portals/admissions',
  gateway: LoginGateway.EMPLOYEE,
  allowedRoles: [InstitutionalRole.SUPER_ADMIN, InstitutionalRole.ADMISSIONS_OFFICER],
  icon: UserPlus,
  navigation: [
    { id: 'overview', label: 'Overview', path: '/portals/admissions', phaseImplemented: false },
  ],
};
