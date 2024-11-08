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
} from "../../shadcn/components/ui/Sidebar"
import { useNavigate } from "react-router-dom";
import logoimage from "../../assets/image.png"

const menuItems = [
  { icon: Home, label: "My Profile", section: "profile" },
  { icon: Building2, label: "Service / Properties", section: "services" },
  { icon: LayoutGrid, label: "Applications", section: "application" },
  { icon: Mail, label: "Messages", section: "messages" },
  { icon: Receipt, label: "Accounting Page", section: "accounting" },
  { icon: HelpCircle, label: "Help & Support", section: "support" },
];

export function DashboardSidebar() {
  const [activeLink, setActiveLink] = useState("profile");
  const navigate = useNavigate();

  const handleSectionClick = (section) => {
    setActiveLink(section);
    navigate(`/Dashboard/${section}`);
  };

  const handleLogout = () => {
    // Add your logout logic here (clear session, tokens, etc.)
    console.log("User logged out");
    navigate("/login"); // Navigate to login or home page
  };

  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="h-8 w-8 rounded-full bg-purple-100">
            <img src={logoimage} alt="Logo" className="rounded-full" />
          </div>
          <span className="font-semibold">Dashboard</span>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild className="gap-2">
                    <button
                      onClick={() => handleSectionClick(item.section)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-200 ${
                        activeLink === item.section ? "bg-purple-100" : ""
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="mt-auto px-4 py-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="gap-2">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-300"
                >
                  <LogOut className="h-4 w-4" />
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
