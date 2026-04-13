import type { User, Module } from "../types/auth.types";

export const hasViewAccess = (user: User, module: Module) => {
  return user.permissions.find((p) => p.module === module)?.canView;
};

export const hasEditAccess = (user: User, module: Module) => {
  return user.permissions.find((p) => p.module === module)?.canEdit;
};
