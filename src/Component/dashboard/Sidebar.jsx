import { useState } from "react";
import {
  Home,
  Building2,
  LayoutGrid,
  Mail,
  Receipt,
  HelpCircle,
  LogOut,
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

const menuItems = [
  { icon: Home, label: "My Profile", section: "profile" },
  { icon: Building2, label: "Service / Properties", section: "services" },
  { icon: LayoutGrid, label: "Applications", section: "application" },
  { icon: Mail, label: "Messages", section: "messages" },
  { icon: Receipt, label: "Accounting Page", section: "accounting" },
  { icon: HelpCircle, label: "Help & Support", section: "support" },
];

export function DashboardSidebar({ isOpen, toggleSidebar }) {
  const [activeLink, setActiveLink] = useState("profile");
  const navigate = useNavigate();

  const handleSectionClick = (section) => {
    setActiveLink(section);
    navigate(`/Dashboard/${section}`);
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };

  console.log("button working...", isOpen);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Sidebar
      className={`fixed top-0 left-0 h-full z-50 transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0 w-64" : "-translate-x-full w-0"
      } lg:translate-x-0 lg:w-64 bg-white shadow-md overflow-hidden`}
    >
      <SidebarContent className="h-full flex flex-col">
        <div className="flex items-center gap-2 px-4 py-4 border-b">
          <div className="h-8 w-8 rounded-full bg-purple-100 flex-shrink-0">
            <img src={logoimage} alt="Logo" className="rounded-full" />
          </div>
          <span className="font-semibold text-lg">Dashboard</span>
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
                      }`}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="truncate">{item.label}</span>
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
                  className="flex items-center gap-2 px-4 py-8 w-full text-left hover:bg-purple-100"
                >
                  <LogOut className="h-5 w-5 flex-shrink-0" />
                  <span>Logout</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
