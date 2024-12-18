import { SidebarProvider } from "../shadcn/components/ui/Sidebar";
import { Topbar } from "../Component/dashboard/Topbar";
import { DashboardSidebar as Sidebar } from "../Component/Non-Pofit/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileForm from "../Component/Non-Pofit/Profile/Profile";
import PostForm from "../Component/serviceProvider dashboard/PostService/Postservice";
import { Applications } from "../Component/Non-Pofit/Application/Applications";
import { MessageBoard } from "../Component/Non-Pofit/Messages/MessageBoard";
import { Accounting } from "../Component/serviceProvider dashboard/Accounting/Accounting";
import { HelpAndSupport } from "../Component/dashboard/Help&Support/HelpSupport";
import { IndustryRelations } from "../Component/serviceProvider dashboard/IndustryRelations/IndustryRelations";
import { LiveChat } from "../Component/Non-Pofit/Messages/LiveChat";
import MyPropertiesServices from "../Component/Non-Pofit/MyPropertiesServices/MyPropertiesServices";
import PropertyForm from "../Component/dashboard/Propertyform/Propertyform";
import ServiceInfoform from "../Component/serviceProvider dashboard/serviceinfo/Serviceinfo";
import FilledLeaseForm from "../Component/Non-Pofit/Application/Filledleaseform";
import FilledRentalApplication from "../Component/Non-Pofit/Application/Filledrentalform";
import Transportform from "../Component/serviceProvider dashboard/Transport/Transport";

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
            {section === "services" && <PostForm />}
            {section === "application" && <Applications />}
            {section === "messages" && <MessageBoard />}
            {section === "accounting" && <Accounting />}
            {section === "Corporate Tickets" && <HelpAndSupport />}
            {section === "Industry Relations" && <IndustryRelations />}
            {section === "MyPropertyServices" && <MyPropertiesServices />}

            {section === "propertyform" && <PropertyForm />}
            {section === "Serviceinfoform" && <ServiceInfoform />}
            {section === "livechat" && <LiveChat />}

            {section === "lease" && <FilledLeaseForm />}
            {section === "rental" && <FilledRentalApplication />}

            {/* {section === "Property" && <PostForm />} */}
            {section === "Transportation" && <Transportform />}
            {section === "Service Information" && <ServiceInfoform />}
            {/* temperory routing */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
