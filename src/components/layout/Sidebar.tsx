// import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { useAuth } from "../../hooks/useAuth";
// import { hasViewAccess } from "../../utils/permission";
// import { Link } from "react-router-dom";

// const modules = [
//   { name: "dashboard", label: "Dashboard" },
//   { name: "customers", label: "Customers" },
//   { name: "engineers", label: "Engineers" },
//   { name: "sites", label: "Sites" },
//   { name: "jobs", label: "Jobs" },
//   { name: "equipments", label: "Equipments" },
//   { name: "settings", label: "Settings" },
// ];

// export default function Sidebar() {
//   const { user } = useAuth();

//   if (!user) return null;

//   return (
//     <ProSidebar>
//       <Menu>
//         {modules.map((mod) =>
//           hasViewAccess(user, mod.name as any) ? (
//             <MenuItem key={mod.name}>
//               <Link to={`/${mod.name}`}>{mod.label}</Link>
//             </MenuItem>
//           ) : null,
//         )}
//       </Menu>
//     </ProSidebar>
//   );
// }

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  UserCog,
  Map,
  Briefcase,
  Wrench,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useAuth } from "../../hooks/useAuth";
import { hasViewAccess } from "../../utils/permission";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "customers", label: "Customers", icon: Users },
  { key: "engineers", label: "Engineers", icon: UserCog },
  { key: "sites", label: "Sites", icon: Map },
  { key: "jobs", label: "Jobs", icon: Briefcase },
  { key: "equipments", label: "Equipments", icon: Wrench },
  { key: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  if (!user) return null;

  return (
    <div
      className={`h-screen bg-[#0B2545] text-white transition-all duration-300 flex flex-col ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Top Logo */}
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h1 className="text-lg font-bold">My App</h1>}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-blue-800"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 px-2 space-y-2">
        {menuItems.map((item) => {
          if (!hasViewAccess(user, item.key as any)) return null;

          const Icon = item.icon;
          const isActive = location.pathname === `/${item.key}`;

          return (
            <Link
              key={item.key}
              to={`/${item.key}`}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all
                ${isActive ? "bg-blue-600" : "hover:bg-blue-800"}
              `}
            >
              <Icon size={20} />

              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </div>

      {/* Bottom Card */}
      {!collapsed && (
        <div className="p-4">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl p-4 text-center">
            <p className="text-sm mb-2">Pro Sidebar</p>
            <button className="bg-white text-black text-sm px-3 py-1 rounded">
              View code
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
