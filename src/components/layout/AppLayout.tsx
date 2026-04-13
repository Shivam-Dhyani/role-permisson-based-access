import Sidebar from "./Sidebar";

export default function AppLayout({ children }: any) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 bg-gray-50 flex flex-col">{children}</div>
    </div>
  );
}
