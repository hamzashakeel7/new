import { SidebarProvider } from "../shadcn/components/ui/Sidebar";
import { Topbar } from "../Component/dashboard/Topbar";
import { DashboardSidebar as Sidebar } from "../Component/PropertyOwnerDashboard/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MyProfile from "../Component/PropertyOwnerDashboard/Profile/MyProfile";
import PostForm from "../Component/serviceProvider dashboard/PostService/Postservice";
import MyProperties from "../Component/PropertyOwnerDashboard/MyProperties/MyProperties";
import { Applications } from "../Component/serviceProvider dashboard/Applications/Applications";
import Message from "../Component/dashboard/messages/Messages";
import { AccountingPage } from "../Component/dashboard/Accounting/AccountingPage";
import { HelpAndSupport } from "../Component/dashboard/Help&Support/HelpSupport";
import { Accounting } from "../Component/serviceProvider dashboard/Accounting/Accounting";
import PropertyForm from "../Component/dashboard/Propertyform/Propertyform";

export function PropertyOwnerDashboard() {
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
            {section === "My Profile" && <MyProfile />}
            {section === "services" && <PostForm />}
            {section === "properties" && <MyProperties />}
            {section === "applications" && <Applications />}
            {section === "messages" && <Message />}
            {section === "accounting" && <Accounting />}
            {section === "Help & Support" && <HelpAndSupport />}
            {section === "propertyform" && <PropertyForm />}

            {/* temperory routing */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
