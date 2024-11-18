import { SidebarProvider } from "../shadcn/components/ui/Sidebar";
import { Topbar } from "../Component/dashboard/Topbar";
import { Mainform } from "../Component/dashboard/Myprofile.jsx/Mainform";
import { DashboardSidebar as Sidebar } from "../Component/dashboard/Sidebar";
import { useParams } from "react-router-dom";
import { Servicesform } from "../Component/dashboard/services/Servicesform";
import { RentalApplicationForm } from "../Component/dashboard/services/RentalApplication/RentalForm";
import { useEffect, useState } from "react";
import { AccountingPage } from "../Component/dashboard/Accounting/AccountingPage";
import { HelpAndSupport } from "../Component/dashboard/Help&Support/HelpSupport";
import { LeaseForm } from "../Component/dashboard/services/lease/LeaseForm";
import Message from "../Component/dashboard/messages/Messages";
import { ApplicationReview } from "../Component/dashboard/services/RentalApplication/ApplicationReview";
import { Invoice } from "../Component/dashboard/Invoice";
import PropertyForm from "../Component/dashboard/Propertyform/Propertyform";
import ServiceInformationForm from "../Component/dashboard/Serviceinformation/Serviceinformation.jsx/Serviceinformation";
import Transportationform from "../Component/dashboard/Transportation/Trasportationform";

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
            {section === "My profile" && <Mainform />}
            {section === "services" && <Servicesform />}
            {section === "application" && <RentalApplicationForm />}
            {section === "accounting" && <AccountingPage />}
            {section === "messages" && <Message />}
            {section === "Help & Support" && <HelpAndSupport />}
            {/* tempperory routes */}
            {section === "lease Form" && <LeaseForm />}
            {section === "invoice" && <Invoice />}
            {section === "Applications" && <ApplicationReview />}
            {section === "Propertyform" && <PropertyForm />}
            {section === "ServiceInformationForm" && <ServiceInformationForm />}
            {section === "Transportationform" && <Transportationform />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
