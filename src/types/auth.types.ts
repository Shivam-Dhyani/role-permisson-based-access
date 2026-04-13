export type Role = "SUPER_ADMIN" | "CUSTOMER_ADMIN";

export type Module =
  | "dashboard"
  | "customers"
  | "engineers"
  | "sites"
  | "jobs"
  | "equipments"
  | "settings";

export interface Permission {
  module: Module;
  canView: boolean;
  canEdit: boolean;
}

export interface User {
  id: string;
  name: string;
  role: Role;
  permissions: Permission[];
  access_token: string;
}
