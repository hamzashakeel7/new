import { SidebarProvider } from "../shadcn/components/ui/Sidebar";
import { Topbar } from "../Component/dashboard/Topbar";
import { DashboardSidebar as Sidebar } from "../Component/Hospital/Sidebar";
import { useParams } from "react-router-dom";
import { Servicesform } from "../Component/dashboard/services/Servicesform";
import { useEffect, useState } from "react";
import { HelpAndSupport } from "../Component/dashboard/Help&Support/HelpSupport";
import { IndustryRelations } from "../Component/serviceProvider dashboard/IndustryRelations/IndustryRelations";
import { MessageBoard } from "../Component/Hospital/messages/MessageBoard";
import { LiveChat } from "../Component/Hospital/messages/LiveChat";
import { CorporateMessages } from "../Component/serviceProvider dashboard/messages/CorporateMessages";
import { Accounting } from "../Component/serviceProvider dashboard/Accounting/Accounting";
import { CorporateTickets } from "../Component/serviceProvider dashboard/HelpAndSupport/CorporateTickets";
import { Applications } from "../Component/Hospital/Application/Applications";
import { TicketThread } from "../Component/serviceProvider dashboard/TicketThread";
import MyProfile from "../Component/Hospital/Profile/MyProfile";
import PostForm from "../Component/serviceProvider dashboard/PostService/Postservice";
import MyPropertiesServices from "../Component/serviceProvider dashboard/Myproperty/Mypropertyservice";
import ProfileForm from "../Component/Hospital/Profile/MyProfile";
import MyServices from "../Component/Hospital/MyServices/MyServices";
import ServiceInfoform from "../Component/serviceProvider dashboard/serviceinfo/Serviceinfo";
import FilledLeaseForm from "../Component/Hospital/Application/Filledleaseform";
import FilledRentalApplication from "../Component/Hospital/Application/Filledrentalform";

export function HospitalDashboard() {
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
            {section === "My profile" && <MyProfile />}
            {section === "services" && <PostForm />}
            {section === "application" && <Applications />}
            {section === "messages" && <MessageBoard />}
            {section === "accounting" && <Accounting />}
            {section === "Corporate Tickets" && <HelpAndSupport />}
            {section === "Industry Relations" && <IndustryRelations />}

            {section === "livechat" && <LiveChat />}
            {section === "My Services" && <MyServices />}
            {section === "Serviceinfoform" && <ServiceInfoform />}

            {section === "lease" && <FilledLeaseForm />}
            {section === "rental" && <FilledRentalApplication />}
            {/* temperory routing */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
