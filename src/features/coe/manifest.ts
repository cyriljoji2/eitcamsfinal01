import { FileSpreadsheet } from 'lucide-react';
import { InstitutionalRole, LoginGateway, PortalId, PortalManifest } from '@/src/types';

export const coeManifest: PortalManifest = {
  id: PortalId.COE,
  order: 4,
  name: 'COE Office',
  shortName: 'COE',
  description: 'Controller of Examinations schedules, hall tickets, evaluations, and results.',
  basePath: '/portals/coe',
  gateway: LoginGateway.EMPLOYEE,
  allowedRoles: [InstitutionalRole.SUPER_ADMIN, InstitutionalRole.COE_OFFICER],
  icon: FileSpreadsheet,
  navigation: [
    { id: 'overview', label: 'Overview', path: '/portals/coe', phaseImplemented: false },
  ],
};
