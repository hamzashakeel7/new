import { SidebarProvider } from "../shadcn/components/ui/Sidebar";
import { Topbar } from "../Component/dashboard/Topbar";
import { DashboardSidebar as Sidebar } from "../Component/dashboard/Sidebar";
import { useParams } from "react-router-dom";
import { Servicesform } from "../Component/dashboard/services/Servicesform";
import { useEffect, useState } from "react";
import { AccountingPage } from "../Component/dashboard/Accounting/AccountingPage";
import { HelpAndSupport } from "../Component/dashboard/Help&Support/HelpSupport";
import Message from "../Component/dashboard/messages/Messages";
import { MyProfile } from "../Component/dashboard/Myprofile/MyProfile";
import { Applications } from "../Component/dashboard/Applications/Applications";
import PropertyForm from "../Component/dashboard/Propertyform/Propertyform";
import ServiceInfoform from "../Component/serviceProvider dashboard/serviceinfo/Serviceinfo";
import Trasportationform from "../Component/dashboard/Transportation/Trasportationform";
import { RentalApplicationForm } from "../Component/dashboard/services/RentalApplication/RentalForm";
import { LeaseForm } from "../Component/dashboard/services/lease/LeaseForm";
import PostPropertyForm from "../Component/dashboard/postservice/Postservice";
import Transport from "../Component/dashboard/Transportation/Trasportationform";
import ServiceInformationForm from "../Component/dashboard/Serviceinformation/Serviceinformation.jsx/Serviceinformation";
import FilledLeaseForm from "../Component/dashboard/Applications/Filledleaseform";
import FilledRentalApplication from "../Component/dashboard/Applications/Filledrentalform";

export function Dashboard() {
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
            {section === "services" && <Servicesform />}
            {section === "application" && <Applications />}
            {section === "accounting" && <AccountingPage />}
            {section === "messages" && <Message />}
            {section === "Help & Support" && <HelpAndSupport />}

            {section === "propertyform" && <PostPropertyForm />}
            {section === "ServiceInformationForm" && <ServiceInformationForm />}
            {section === "Transportationform" && <Transport />}

            {section === "rental" && <RentalApplicationForm />}
            {section === "lease" && <LeaseForm />}

            {section === "filledlease" && <FilledLeaseForm />}
            {section === "filledrental" && <FilledRentalApplication />}

            {/* tempperory routes */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
