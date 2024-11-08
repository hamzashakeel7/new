import { SidebarProvider } from "../shadcn/components/ui/Sidebar";
import {Topbar}  from"../Component/dashboard/Topbar"
import { Mainform } from "../Component/dashboard/Myprofile.jsx/Mainform";
import { DashboardSidebar as Sidebar } from "../Component/dashboard/Sidebar"
import { useParams } from "react-router-dom";
import {Servicesform} from "../Component/dashboard/services/Servicesform"
import { RentalApplicationForm } from "../Component/dashboard/services/RentalApplication/RentalForm";

export function Dashboard() {
  const { section } = useParams(); // Get the section from the URL

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <div className="flex-1">
          <Topbar />
          <main className="pb-16 flex-1 overflow-auto">
            {/* Render components based on the section URL parameter */}
            {section === "profile" && <Mainform/>}
            {section === "services" && <Servicesform/>}
            {section === "application" && <RentalApplicationForm />}
            {/* Add more sections as needed */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
