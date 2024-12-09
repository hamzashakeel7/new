// Provider services dashboard

import { useState, useEffect } from "react";
import {
  Home,
  LayoutGrid,
  Mail,
  Receipt,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  BaggageClaim,
  ChartArea,
  Grip,
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
import { Link, useNavigate } from "react-router-dom";
import logoimage from "../../assets/image.png";
import { Button } from "../../shadcn/components/ui/Button";
import "../../App.css";

const menuItems = [
  { icon: Home, label: "My Profile", section: "My profile" },
  {
    icon: BaggageClaim,
    label: "Post a Service",
    section: "services",
  },
  { icon: LayoutGrid, label: "My services", section: "My Services" },
  { icon: LayoutGrid, label: "Application", section: "application" },
  { icon: Mail, label: "Message", section: "messages" },
  { icon: Receipt, label: "Acconting Page", section: "accounting" },
  {
    icon: HelpCircle,
    label: "Help & Support",
    section: "Corporate Tickets",
  },
  {
    icon: ChartArea,
    label: "Industry Relation",
    section: "Industry Relations",
  },
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
    navigate(`/HospitalManagement/${section}`);
    if (isMobile && isOpen) {
      toggleSidebar();
    }
  };

  const handleLogout = () => {
    navigate("/");
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
          <div className="h-10 w-12 md:w-14 rounded-full bg-purple-100 flex-shrink-0">
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
        <div className="flex flex-wrap px-5 hover:bg-gray-100">
          <Link to="/">
            <button className="flex">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9012 12.6006H8.49801C7.99865 12.5965 7.5181 12.791 7.16209 13.1411C6.80606 13.4913 6.60373 13.9685 6.59961 14.4679V21.5346C6.60885 22.5741 7.45862 23.4094 8.49801 23.4007H11.9012C12.4005 23.4049 12.8811 23.2105 13.2372 22.8603C13.5932 22.5101 13.7955 22.0329 13.7996 21.5335V14.4679C13.7955 13.9685 13.5932 13.4913 13.2372 13.1411C12.8811 12.791 12.4005 12.5965 11.9012 12.6006Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9012 5.40111H8.49801C7.47952 5.37287 6.63032 6.1743 6.59961 7.19271V8.40951C6.63032 9.42794 7.47952 10.2294 8.49801 10.2011H11.9012C12.9196 10.2294 13.7689 9.42794 13.7996 8.40951V7.19271C13.7689 6.1743 12.9196 5.37287 11.9012 5.40111Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.0986 16.2005H21.5006C22.0002 16.2049 22.481 16.0107 22.8373 15.6605C23.1936 15.3102 23.3961 14.8329 23.4002 14.3333V7.26766C23.3961 6.76831 23.1938 6.29105 22.8378 5.94088C22.4817 5.5907 22.0011 5.3963 21.5018 5.40046H18.0986C17.5993 5.3963 17.1187 5.5907 16.7626 5.94088C16.4066 6.29105 16.2043 6.76831 16.2002 7.26766V14.3333C16.2043 14.8326 16.4066 15.3099 16.7626 15.66C17.1187 16.0102 17.5993 16.2046 18.0986 16.2005Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.0986 23.4003H21.5006C22.5195 23.4293 23.3695 22.6277 23.4002 21.6087V20.3919C23.3695 19.3735 22.5202 18.5721 21.5018 18.6003H18.0986C17.0802 18.5721 16.2309 19.3735 16.2002 20.3919V21.6075C16.2302 22.6265 17.0797 23.4285 18.0986 23.4003Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="hidden lg:block">Go to Home</p>
            </button>
          </Link>
        </div>
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
