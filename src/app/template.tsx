import { SidebarNav } from "@/components/common/sidebar-nav";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-row">
      <SidebarNav />
      <div className="ml-[300px] grow outline">{children}</div>
    </div>
  );
}
