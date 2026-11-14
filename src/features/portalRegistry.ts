import { PortalId, PortalManifest } from '@/src/types';
import { administrationManifest } from './administration/manifest';
import { admissionsManifest } from './admissions/manifest';
import { academicManifest } from './academic/manifest';
import { coeManifest } from './coe/manifest';
import { financeManifest } from './finance/manifest';
import { hostelManifest } from './hostel/manifest';
import { itManifest } from './it/manifest';
import { facultyManifest } from './faculty/manifest';
import { studentManifest } from './student/manifest';
import { parentManifest } from './parent/manifest';

export const PORTAL_MANIFESTS: PortalManifest[] = [
  administrationManifest,
  admissionsManifest,
  academicManifest,
  coeManifest,
  financeManifest,
  hostelManifest,
  itManifest,
  facultyManifest,
  studentManifest,
  parentManifest,
].sort((a, b) => a.order - b.order);

export const PORTAL_BY_ID: Record<PortalId, PortalManifest> = {
  [PortalId.ADMINISTRATION]: administrationManifest,
  [PortalId.ADMISSIONS]: admissionsManifest,
  [PortalId.ACADEMIC]: academicManifest,
  [PortalId.COE]: coeManifest,
  [PortalId.FINANCE]: financeManifest,
  [PortalId.HOSTEL]: hostelManifest,
  [PortalId.IT]: itManifest,
  [PortalId.FACULTY]: facultyManifest,
  [PortalId.STUDENT]: studentManifest,
  [PortalId.PARENT]: parentManifest,
};
