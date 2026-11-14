export enum LoginGateway {
  STUDENT = 'student',
  EMPLOYEE = 'employee',
  PARENT = 'parent',
}

export enum InstitutionalRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN_OFFICE = 'admin_office',
  ADMISSIONS_OFFICER = 'admissions_officer',
  ACADEMIC_OFFICER = 'academic_officer',
  COE_OFFICER = 'coe_officer',
  FINANCE_OFFICER = 'finance_officer',
  HOSTEL_WARDEN = 'hostel_warden',
  IT_ADMINISTRATOR = 'it_administrator',
  FACULTY = 'faculty',
  STUDENT = 'student',
  PARENT_GUARDIAN = 'parent_guardian',
}

export enum PermissionCode {
  PORTAL_ACCESS = 'portal:access',
  RECORDS_READ = 'records:read',
  RECORDS_WRITE = 'records:write',
  APPROVALS_EXECUTE = 'approvals:execute',
  FINANCE_SETTLE = 'finance:settle',
  EXAM_PUBLISH = 'exam:publish',
  RBAC_MANAGE = 'rbac:manage',
  AUDIT_VIEW = 'audit:view',
}

export interface RoleDefinition {
  role: InstitutionalRole;
  label: string;
  gateway: LoginGateway;
  defaultPermissions: PermissionCode[];
}
