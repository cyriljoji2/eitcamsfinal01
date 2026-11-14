import {
  AuthenticatedPrincipal,
  InstitutionalRole,
  LoginGateway,
  PortalId,
} from '@/src/types';

export interface LoginGatewayConfig {
  id: LoginGateway;
  label: string;
  routePath: string;
  audienceSummary: string;
  identifierLabel: string;
  identifierPlaceholder: string;
  eligiblePortals: PortalId[];
}

/**
 * Public website authentication gateways.
 * Strictly limited to three gateways: Student, Employee, and Parent/Guardian.
 * All institutional offices and faculty authenticate through Employee Login.
 */
export const PUBLIC_LOGIN_GATEWAYS: Record<LoginGateway, LoginGatewayConfig> = {
  [LoginGateway.STUDENT]: {
    id: LoginGateway.STUDENT,
    label: 'Student Login',
    routePath: '/login/student',
    audienceSummary: 'For enrolled Electrix Institute of Technology students.',
    identifierLabel: 'Institutional Email / Registration ID',
    identifierPlaceholder: 'student@eit.edu',
    eligiblePortals: [PortalId.STUDENT],
  },
  [LoginGateway.EMPLOYEE]: {
    id: LoginGateway.EMPLOYEE,
    label: 'Employee Login',
    routePath: '/login/employee',
    audienceSummary:
      'Unified staff gateway for Faculty and all Administration, Admissions, Academic, COE, Finance, Hostel, and IT offices.',
    identifierLabel: 'Staff Email / Employee ID',
    identifierPlaceholder: 'staff@eit.edu',
    eligiblePortals: [
      PortalId.ADMINISTRATION,
      PortalId.ADMISSIONS,
      PortalId.ACADEMIC,
      PortalId.COE,
      PortalId.FINANCE,
      PortalId.HOSTEL,
      PortalId.IT,
      PortalId.FACULTY,
    ],
  },
  [LoginGateway.PARENT]: {
    id: LoginGateway.PARENT,
    label: 'Parent / Guardian Login',
    routePath: '/login/parent',
    audienceSummary: 'For registered parents and guardians of enrolled students.',
    identifierLabel: 'Registered Guardian Email',
    identifierPlaceholder: 'guardian@example.com',
    eligiblePortals: [PortalId.PARENT],
  },
};

export const PUBLIC_GATEWAY_LIST: LoginGatewayConfig[] = [
  PUBLIC_LOGIN_GATEWAYS[LoginGateway.STUDENT],
  PUBLIC_LOGIN_GATEWAYS[LoginGateway.EMPLOYEE],
  PUBLIC_LOGIN_GATEWAYS[LoginGateway.PARENT],
];

export function isValidLoginGateway(value: string | undefined): value is LoginGateway {
  return (
    value === LoginGateway.STUDENT ||
    value === LoginGateway.EMPLOYEE ||
    value === LoginGateway.PARENT
  );
}

export function canPrincipalAccessPortal(
  principal: AuthenticatedPrincipal | null,
  portalId: PortalId,
  allowedRoles: InstitutionalRole[]
): boolean {
  if (!principal) {
    return false;
  }

  const hasExplicitPortal = principal.assignedPortals.includes(portalId);
  const hasSuperAdmin = principal.roles.includes(InstitutionalRole.SUPER_ADMIN);
  const hasMatchingRole = principal.roles.some((role) => allowedRoles.includes(role));

  return hasSuperAdmin || hasExplicitPortal || hasMatchingRole;
}
