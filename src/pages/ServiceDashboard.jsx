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

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      
      <PostTypeModal/>
    </div>
  );
}

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

  // Open the modal when 'section' is 'service'
  useEffect(() => {
    if (section === "service") {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [section]);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          onSectionClick={(clickedSection) => {
            if (clickedSection === "services") {
              setIsModalOpen(true); // Open modal when "services" is clicked
            }
          }}
        />
        <div className="flex-1 flex flex-col">
          <Topbar section={section} />
          <main className="flex-1 overflow-auto p-4">
            {/* Modal Logic */}
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
              <PostTypeModal />
            </Modal>

            {/* Render Other Sections */}
        
            {section === "application" && <Applications />}
            {section === "messages" && <MessageBoard />}
            {section === "accounting" && <Accounting />}
            {section === "Corporate Tickets" && <HelpAndSupport />}
            {section === "Industry Relations" && <IndustryRelations />}
            {section === "livechat" && <LiveChat />}
            {section === "MyPropertyServices" && <MyPropertiesServices />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
