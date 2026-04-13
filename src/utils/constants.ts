import type { User } from "../types/auth.types";

export const SUPER_ADMIN: User = {
  id: "1",
  name: "Super Admin",
  role: "SUPER_ADMIN",
  access_token: "super_token",
  permissions: [
    { module: "dashboard", canView: true, canEdit: true },
    { module: "customers", canView: true, canEdit: true },
    { module: "engineers", canView: true, canEdit: true },
    { module: "sites", canView: true, canEdit: true },
    { module: "jobs", canView: true, canEdit: true },
    { module: "equipments", canView: true, canEdit: true },
    { module: "settings", canView: true, canEdit: true },
  ],
};

export const CUSTOMER_ADMIN: User = {
  id: "2",
  name: "Customer Admin",
  role: "CUSTOMER_ADMIN",
  access_token: "customer_token",
  permissions: [
    { module: "dashboard", canView: true, canEdit: false },
    { module: "sites", canView: true, canEdit: true },
    { module: "jobs", canView: true, canEdit: false },
    { module: "equipments", canView: true, canEdit: false },
    { module: "settings", canView: true, canEdit: true },
    { module: "customers", canView: false, canEdit: false },
    { module: "engineers", canView: false, canEdit: false },
  ],
};
