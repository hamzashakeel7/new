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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import PropertyForm from "../Propertyform/Propertyform";
import ServiceInfoform from "../../serviceProvider dashboard/serviceinfo/Serviceinfo";
import Trasportationform from "../../dashboard/Transportation/Trasportationform";

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
        navigate("/dashboard/propertyform");
        break;
      case "Generic":
        navigate("/dashboard/Serviceinfoform");
        break;
      case "Transportation":
        navigate("/dashboard/Transportationform");
        break;
      default:
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
                <TableRow className="hover:bg-transparent">
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
                          onClick={() => handleDelete(service.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="w-full mr-0 lg:mr-11">Delete</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleView(service.type)}
                        >
                          <Eye className="h-4 w-4" />
                          <span className="">View</span>
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

// App Component with Routing
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Servicesform />} />
        <Route path="/dashboard/property" element={<PropertyForm />} />
        <Route path="/dashboard/generic" element={<ServiceInfoform />} />
        <Route
          path="/dashboard/transportation"
          element={<Trasportationform />}
        />
      </Routes>
    </Router>
  );
}
