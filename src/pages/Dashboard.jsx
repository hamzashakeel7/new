import { SidebarProvider } from "../shadcn/components/ui/Sidebar";
import { Topbar } from "../Component/dashboard/Topbar";
import { Mainform } from "../Component/dashboard/Myprofile.jsx/Mainform";
import { DashboardSidebar as Sidebar } from "../Component/dashboard/Sidebar";
import { useParams } from "react-router-dom";
import { Servicesform } from "../Component/dashboard/services/Servicesform";
import { RentalApplicationForm } from "../Component/dashboard/services/RentalApplication/RentalForm";
import { useEffect, useState } from "react";

export function Dashboard() {
  const { section } = useParams();
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen((open) => !open);
    console.log("Sidebar state:", !isOpen);
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col">
          <Topbar toggleSidebar={toggleSidebar} />
          <main className="flex-1 overflow-auto p-4">
            {section === "profile" && <Mainform />}
            {section === "services" && <Servicesform />}
            {section === "application" && <RentalApplicationForm />}
          </main>
        </div>
        {isOpen && window.innerWidth < 1024 && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </SidebarProvider>
  );
}
