import { useState, useEffect } from "react";
import {
  Home,
  Building2,
  LayoutGrid,
  Mail,
  Receipt,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../../shadcn/components/ui/Sidebar";
import { useNavigate } from "react-router-dom";
import logoimage from "../../assets/image.png";
import { Button } from "../../shadcn/components/ui/Button";
import "../../App.css";

const menuItems = [
  { icon: Home, label: "My Profile", section: "My profile" },
  { icon: Building2, label: "Service / Properties", section: "services" },
  { icon: LayoutGrid, label: "Applications", section: "application" },
  { icon: Mail, label: "Messages", section: "messages" },
  { icon: Receipt, label: "Accounting Page", section: "accounting" },
  { icon: HelpCircle, label: "Help & Support", section: "Help & Support" },
  // temperory links added to check the ui
  { icon: HelpCircle, label: "temp lease form", section: "lease Form" },
  { icon: HelpCircle, label: "temp invoice", section: "Invoicing" },
];

export function DashboardSidebar({ isOpen, toggleSidebar }) {
  const [activeLink, setActiveLink] = useState("profile");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSectionClick = (section) => {
    setActiveLink(section);
    navigate(`/Dashboard/${section}`);
    if (isMobile && isOpen) {
      toggleSidebar();
    }
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Sidebar
      className={`sidebarWidth fixed top-0 left-0 h-full z-50 transition-all duration-300 ease-in-out bg-white shadow-md ${
        isMobile ? (isOpen ? "w-64" : "w-16") : "w-64"
      } ${isMobile && !isOpen ? "items-center" : ""}`}
    >
      <SidebarContent className="h-full flex flex-col">
        <div
          className={`flex items-center gap-2 px-4 py-4 border-b ${
            isMobile && !isOpen ? "justify-center" : ""
          }`}
        >
          <div className="h-8 w-8 rounded-full bg-purple-100 flex-shrink-0">
            <img src={logoimage} alt="Logo" className="rounded-full" />
          </div>
          {(!isMobile || isOpen) && (
            <span className="font-semibold text-lg">Dashboard</span>
          )}
        </div>
        <SidebarGroup className="flex-grow">
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild className="w-full">
                    <button
                      onClick={() => handleSectionClick(item.section)}
                      className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-purple-100 ${
                        activeLink === item.section ? "bg-purple-200" : ""
                      } ${isMobile && !isOpen ? "justify-center" : ""}`}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {(!isMobile || isOpen) && (
                        <span className="truncate">{item.label}</span>
                      )}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="mt-auto border-t">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="w-full">
                <button
                  onClick={handleLogout}
                  className={`flex items-center gap-2 px-4 py-4 w-full text-left hover:bg-purple-100 ${
                    isMobile && !isOpen ? "justify-center" : ""
                  }`}
                >
                  <LogOut className="h-5 w-5 flex-shrink-0" />
                  {(!isMobile || isOpen) && <span>Logout</span>}
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-14 -right-10 bg-white shadow-md"
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
