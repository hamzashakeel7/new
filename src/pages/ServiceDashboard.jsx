import { SidebarProvider } from "../shadcn/components/ui/Sidebar";
import { Topbar } from "../Component/dashboard/Topbar";
import { Mainform } from "../Component/dashboard/Myprofile.jsx/Mainform";
import { DashboardSidebar as Sidebar } from "../Component/serviceProvider dashboard/Sidebar";
import { useParams } from "react-router-dom";
import { Servicesform } from "../Component/dashboard/services/Servicesform";
import { RentalApplicationForm } from "../Component/dashboard/services/RentalApplication/RentalForm";
import { useEffect, useState } from "react";
import { HelpAndSupport } from "../Component/dashboard/Help&Support/HelpSupport";
import { IndustryRelations } from "../Component/serviceProvider dashboard/IndustryRelations/IndustryRelations";
import { MessageBoard } from "../Component/serviceProvider dashboard/messages/MessageBoard";
import { LiveChat } from "../Component/serviceProvider dashboard/messages/LiveChat";
import { CorporateMessages } from "../Component/serviceProvider dashboard/messages/CorporateMessages";
import { Accounting } from "../Component/serviceProvider dashboard/Accounting/Accounting";

export function ServiceDashboard() {
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

  return (
    <SidebarProvider className="">
      <div className="flex min-h-screen w-full">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex-1 flex flex-col`}>
          <Topbar section={section} />
          <main className="flex-1 overflow-auto p-4">
            {section === "My profile" && <Mainform />}
            {section === "services" && <Servicesform />}
            {section === "application" && <RentalApplicationForm />}
            {section === "messages" && <MessageBoard />}
            {section === "accounting" && <Accounting />}
            {section === "Help & Support" && <HelpAndSupport />}
            {section === "Industry Relations" && <IndustryRelations />}
            {section === "My Properties / Services" && <HelpAndSupport />}
            {section === "livechat" && <LiveChat />}
            {section === "corporate messages" && <CorporateMessages />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}