import { SidebarProvider } from "../shadcn/components/ui/Sidebar";
import { Topbar } from "../Component/dashboard/Topbar";
import { DashboardSidebar as Sidebar } from "../Component/Non-Pofit/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileForm from "../Component/Non-Pofit/Profile/Profile";
import PostForm from "../Component/serviceProvider dashboard/PostService/Postservice";
import { Applications } from "../Component/serviceProvider dashboard/Applications/Applications";
import { MessageBoard } from "../Component/serviceProvider dashboard/messages/MessageBoard";
import { Accounting } from "../Component/serviceProvider dashboard/Accounting/Accounting";
import { HelpAndSupport } from "../Component/dashboard/Help&Support/HelpSupport";
import { IndustryRelations } from "../Component/serviceProvider dashboard/IndustryRelations/IndustryRelations";
import { LiveChat } from "../Component/serviceProvider dashboard/messages/LiveChat";
import MyPropertiesServices from "../Component/serviceProvider dashboard/Myproperty/Mypropertyservice";

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

            {section === "livechat" && <LiveChat />}
            {section === "MyPropertyServices" && <MyPropertiesServices />}
            {/* temperory routing */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
