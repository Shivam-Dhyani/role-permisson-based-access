import Header from "../layout/Header";

export default function PageWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full">
      {/* 🔥 Sticky Header */}
      <div className="sticky top-0 z-10 bg-gray-50">
        <Header title={title} />
      </div>

      {/* 🔥 Scrollable Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
