import { SidebarProvider } from "../shadcn/components/ui/Sidebar";
import { Topbar } from "../Component/dashboard/Topbar";
import { DashboardSidebar as Sidebar } from "../Component/Non-Pofit/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileForm from "../Component/Non-Pofit/Profile/Profile";

export function NonprofitDashboard() {
  const { section } = useParams();
  const [isOpen, setIsOpen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  // solving merge confilts
  return (
    <SidebarProvider className="">
      <div className="flex min-h-screen w-full">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex-1 flex flex-col`}>
          <Topbar section={section} />
          <main className="flex-1 overflow-auto p-4">
            {section === "My profile" && <ProfileForm />}
            {section === "services"}
            {section === "application"}
            {section === "messages"}
            {section === "accounting"}
            {section === "Corporate Tickets"}
            {section === "Industry Relations"}

            {section === "livechat"}
            {section === "MyPropertyServices"}
            {/* temperory routing */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
