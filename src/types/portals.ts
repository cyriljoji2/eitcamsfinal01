import type { LucideIcon } from 'lucide-react';
import { InstitutionalRole, LoginGateway } from './rbac';

export enum PortalId {
  ADMINISTRATION = 'administration',
  ADMISSIONS = 'admissions',
  ACADEMIC = 'academic',
  COE = 'coe',
  FINANCE = 'finance',
  HOSTEL = 'hostel',
  IT = 'it',
  FACULTY = 'faculty',
  STUDENT = 'student',
  PARENT = 'parent',
}

export interface PortalNavItem {
  id: string;
  label: string;
  path: string;
  iconName?: string;
  badgeSlot?: string;
  phaseImplemented?: boolean;
}

export interface PortalManifest {
  id: PortalId;
  order: number;
  name: string;
  shortName: string;
  description: string;
  basePath: string;
  gateway: LoginGateway;
  allowedRoles: InstitutionalRole[];
  icon?: LucideIcon;
  navigation: PortalNavItem[];
}
