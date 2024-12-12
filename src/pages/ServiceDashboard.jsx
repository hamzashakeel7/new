import { SidebarProvider } from "../shadcn/components/ui/Sidebar";
import { Topbar } from "../Component/dashboard/Topbar";
import { DashboardSidebar as Sidebar } from "../Component/serviceProvider dashboard/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HelpAndSupport } from "../Component/dashboard/Help&Support/HelpSupport";
import { IndustryRelations } from "../Component/serviceProvider dashboard/IndustryRelations/IndustryRelations";
import { MessageBoard } from "../Component/serviceProvider dashboard/messages/MessageBoard";
import { LiveChat } from "../Component/serviceProvider dashboard/messages/LiveChat";
import { Accounting } from "../Component/serviceProvider dashboard/Accounting/Accounting";
import { Applications } from "../Component/serviceProvider dashboard/Applications/Applications";
import MyPropertiesServices from "../Component/serviceProvider dashboard/Myproperty/Mypropertyservice";
import PostTypeModal from "../Component/serviceProvider dashboard/Posttype";
import ProfileForm from "../Component/serviceProvider dashboard/Profile/Profile";
import PostFormedit from "../Component/serviceProvider dashboard/PostService/PostserviceEdit";
import Transportationedit from "../Component/serviceProvider dashboard/Transport/Transportedit";
import ServiceInfoedit from "../Component/serviceProvider dashboard/serviceinfo/Serviceinfoedit";
import PostForm from "../Component/serviceProvider dashboard/PostService/Postservice";
import Transportform from "../Component/serviceProvider dashboard/Transport/Transport";
import ServiceInfoform from "../Component/serviceProvider dashboard/serviceinfo/Serviceinfo";
import Message from "../Component/serviceProvider dashboard/messages/Message";

export function ServiceDashboard() {
  const { section } = useParams(); // Get 'section' from the URL params
  const [isOpen, setIsOpen] = useState(window.innerWidth <= 1024);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col">
          <Topbar section={section} />
          <main className="flex-1 overflow-auto p-4">
            {/* Modal Logic */}

            {/* Render Other Sections */}

            {section === "My profile" && <ProfileForm />}
            {section === "application" && <Applications />}
            {section === "messages" && <Message/>}
            {section === "accounting" && <Accounting />}
            {section === "Corporate Tickets" && <HelpAndSupport />}
            {section === "Industry Relations" && <IndustryRelations />}
            {section === "livechat" && <LiveChat />}
            {section === "MyPropertyServices" && <MyPropertiesServices />}

            {/* my properties edit links */}
            {section === "propertyform" && <PostForm />}
            {section === "Serviceinfoform" && <ServiceInfoform />}

            {/* modal links */}
            {/* {section === "Property" && <PostForm />} closed temporary */}
            {section === "Transportation" && <Transportform />}
            {section === "Service Information" && <ServiceInfoform />}
            {section === "Health Care"}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
