import { Bell, UserCircle, ChevronRight } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";

const formatBreadcrumb = (path: string) => {
  return path
    .split("/")
    .filter(Boolean)
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1));
};

export default function Header({ title }: { title: string }) {
  const { user } = useAuth();
  const location = useLocation();

  const breadcrumbs = formatBreadcrumb(location.pathname);

  return (
    <div className="flex items-center justify-between px-6 bg-amber-300 sticky w-full">
      {/* LEFT SIDE */}
      <div>
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <span>Home</span>

          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              <ChevronRight size={14} className="mx-2" />
              <span
                className={
                  index === breadcrumbs.length - 1
                    ? "text-gray-800 font-medium"
                    : ""
                }
              >
                {crumb}
              </span>
            </div>
          ))}
        </div>

        {/* Page Title */}
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Bell className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <UserCircle className="text-gray-600" />
          <div className="text-sm">
            <p className="font-medium text-gray-800">{user?.name}</p>
            <p className="text-gray-500 text-xs">{user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
