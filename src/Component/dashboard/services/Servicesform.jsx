import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Eye, Trash2 } from "lucide-react";
import { Button } from "../../../shadcn/components/ui/Button";
import { Calendar } from "../../../shadcn/components/ui/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../shadcn/components/ui/Popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcn/components/ui/Table";
import { cn } from "../../../shadcn/lib/utils";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";

// Initial services data
const initialServices = [
  {
    id: 1,
    name: "Name 1",
    type: "Property",
    provider: "North Carolina",
    price: "22$",
  },
  {
    id: 2,
    name: "Name 2",
    type: "Generic",
    provider: "North Carolina",
    price: "22$",
  },
  {
    id: 3,
    name: "Name 3",
    type: "Transportation",
    provider: "North Carolina",
    price: "22$",
  },
];

// Main Services Form Component
export function Servicesform() {
  const [services, setServices] = useState(initialServices);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  // Delete functionality
  const handleDelete = (id) => {
    setServices((prevServices) =>
      prevServices.filter((service) => service.id !== id)
    );
  };

  // Handle view button click and navigate
  const handleView = (type) => {
    switch (type) {
      case "Property":
        console.log("Navigating to /dashboard/propertyforms");
        navigate("/dashboard/propertyform");
        break;
      case "Generic":
        console.log("Navigating to /dashboard/generic");
        navigate("/dashboard/ServiceInformationForm");
        break;
      case "Transportation":
        console.log("Navigating to /dashboard/transport");
        navigate("/dashboard/Transportationform");
        break;
      default:
        console.log("Unknown type");
        break;
    }
  };

  return (
    <div className="space-y-6 md:p-6 w-[75vw] lg:w-full">
      {/* Sort By Section */}
      <div className="rounded-lg border bg-card p-4 w-full bg-gray-100">
        <h3 className="mb-4 text-lg font-medium">Sort By</h3>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal sm:w-[240px]",
                  !fromDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {fromDate ? format(fromDate, "PPP") : <span>From Date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={fromDate}
                onSelect={setFromDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal sm:w-[240px]",
                  !toDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {toDate ? format(toDate, "PPP") : <span>To Date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={toDate}
                onSelect={setToDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Services Table */}
      <div className="rounded-lg border bg-card">
        <div className="flex items-center gap-2 border-b p-4">
          <div className="rounded-lg bg-primary/10 p-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-medium">Services</h3>
        </div>
        <div className="max-w-full overflow-x-auto md:overflow-x-visible">
          <div className="min-w-[600px]">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-gray-200 bg-gray-100">
                  <TableHead className="border-x">Service Name</TableHead>
                  <TableHead className="border-x">Service Type</TableHead>
                  <TableHead className="border-x">Provider</TableHead>
                  <TableHead className="border-x">Price</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell className="border-x font-medium">
                      {service.name}
                    </TableCell>
                    <TableCell className="border-x">{service.type}</TableCell>
                    <TableCell className="border-x">
                      {service.provider}
                    </TableCell>
                    <TableCell className="border-x">{service.price}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-10 px-2 w-full">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                         
                        >
                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1492_976)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C5.61553 14 4.26213 13.5895 3.11099 12.8203C1.95984 12.0511 1.06266 10.9579 0.532843 9.67879C0.0030297 8.3997 -0.135589 6.99224 0.134507 5.63437C0.404604 4.2765 1.07128 3.02922 2.05024 2.05026C3.02921 1.07129 4.27651 0.404603 5.63437 0.134506C6.99224 -0.13559 8.39971 0.003033 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26216 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9498C10.637 13.2625 8.85651 14 7 14ZM7 1.16667C5.84627 1.16667 4.71844 1.50879 3.75916 2.14976C2.79987 2.79074 2.05222 3.70178 1.61071 4.76768C1.1692 5.83359 1.05366 7.00648 1.27874 8.13803C1.50382 9.26959 2.05941 10.309 2.87522 11.1248C3.69103 11.9406 4.7304 12.4962 5.86195 12.7213C6.99351 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2187 3.96918 11.1248 2.87521C10.0308 1.78125 8.54709 1.16667 7 1.16667ZM9.74516 9.74517C9.69364 9.79669 9.63249 9.83756 9.56518 9.86544C9.49787 9.89332 9.42573 9.90768 9.35287 9.90768C9.28002 9.90768 9.20788 9.89332 9.14057 9.86544C9.07326 9.83756 9.01211 9.79669 8.96059 9.74517L6.99124 7.77584L5.02192 9.74517C4.97109 9.79906 4.90996 9.8422 4.84215 9.87204C4.77435 9.90187 4.70125 9.9178 4.62718 9.91887C4.55311 9.91994 4.47959 9.90613 4.41096 9.87826C4.34232 9.8504 4.27996 9.80904 4.2276 9.75664C4.17523 9.70424 4.13393 9.64186 4.10612 9.5732C4.0783 9.50455 4.06454 9.43101 4.06567 9.35694C4.06679 9.28287 4.08278 9.20978 4.11267 9.142C4.14255 9.07422 4.18574 9.01312 4.23967 8.96234L6.20898 6.993L4.23967 5.02367C4.18574 4.97288 4.14255 4.91179 4.11267 4.84401C4.08278 4.77623 4.06679 4.70314 4.06567 4.62907C4.06454 4.555 4.0783 4.48146 4.10612 4.4128C4.13393 4.34415 4.17523 4.28177 4.2276 4.22937C4.27996 4.17697 4.34232 4.13561 4.41096 4.10774C4.47959 4.07988 4.55311 4.06607 4.62718 4.06714C4.70125 4.06821 4.77435 4.08413 4.84215 4.11397C4.90996 4.14381 4.97109 4.18695 5.02192 4.24084L6.99124 6.21017L8.96059 4.24084C9.01178 4.18846 9.07283 4.14676 9.14025 4.11815C9.20766 4.08955 9.28007 4.0746 9.3533 4.07418C9.42653 4.07376 9.49911 4.08787 9.56685 4.1157C9.63459 4.14353 9.69615 4.18453 9.74793 4.23631C9.79972 4.2881 9.84073 4.34964 9.86856 4.41738C9.89639 4.48512 9.91049 4.55771 9.91007 4.63094C9.90965 4.70417 9.89471 4.77659 9.8661 4.844C9.8375 4.91142 9.79579 4.97249 9.74341 5.02367L7.77409 6.993L9.74341 8.96234C9.8473 9.066 9.90583 9.20663 9.90616 9.35339C9.90649 9.50015 9.84858 9.64105 9.74516 9.74517Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1492_976">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>

                          <span className="w-full mr-0 lg:mr-11">cancel</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleDelete(service.id)}
                        >
                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5599 5.2998L11.5599 12.1398C11.5599 12.7694 11.0495 13.2798 10.4199 13.2798L3.57994 13.2798C2.95034 13.2798 2.43994 12.7694 2.43994 12.1398L2.43994 5.2998" stroke="#565D6D" stroke-width="1.368" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M0.72998 3L13.27 3" stroke="#565D6D" stroke-width="1.368" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M4.72021 2.99973L4.72021 0.719727L9.28021 0.719727V2.99973" stroke="#565D6D" stroke-width="1.368" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M8.71004 7L5.29004 10.42" stroke="#565D6D" stroke-width="1.368" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M8.71004 10.42L5.29004 7" stroke="#565D6D" stroke-width="1.368" stroke-miterlimit="10" stroke-linecap="square"/>
</svg>

                          <span className="w-full mr-0 lg:mr-11">Delete</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleView(service.type)}
                        >
        
                            <Eye className="h-4 w-4" />
                          <span className="w-full mr-0 lg:mr-11">view</span>
                        </Button>
                        
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
