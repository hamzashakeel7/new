import { useState } from "react";
import {
  Calendar as CalendarIcon,
  MoreHorizontal,
  Eye,
  FileText,
  ClipboardList,
  CircleX,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "../../../shadcn/lib/utils";
import { Button } from "../../../shadcn/components/ui/Button";
import { Calendar } from "../../../shadcn/components/ui/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../shadcn/components/ui/Popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../shadcn/components/ui/Dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcn/components/ui/Table";
import { LeaseForm } from "./lease/LeaseForm";
import { RentalApplicationForm } from "./RentalApplication/RentalForm";
import { useNavigate } from "react-router-dom";

// Temporary data
const initialProperties = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Central House",
    address: "North Carolina",
    price: "22$",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lorem",
    address: "Lorem",
    price: "Lorem",
  },
];

export function Servicesform() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [properties, setProperties] = useState(initialProperties);
  const [showLeaseForm, setShowLeaseForm] = useState(false);
  const [showRentalForm, setShowRentalForm] = useState(false);
  const navigate = useNavigate();

  const handleRemove = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  // pushing it to application component
  const handleShowRentalForm = () => {
    setShowRentalForm(true);
    navigate("/dashboard/application"); // Navigate to the new route
  };

  // Render LeaseForm if showLeaseForm is true
  if (showLeaseForm) {
    return <LeaseForm />;
  }

  // Render RentalForm if showRentalForm is true
  if (showRentalForm) {
    return <RentalApplicationForm />;
  }

  return (
    <div className="space-y-4 p-0 md:p-6">
      {/* Sort By Section */}
      <div className="rounded-lg border bg-gray-100 p-4">
        <h2 className="mb-4 text-lg font-semibold">Sort By</h2>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full font-normal sm:w-[240px]",
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
                  "w-full items-center justify-start text-center font-normal sm:w-[240px]",
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

      {/* Selected services Section */}
      <div className="rounded-lg border bg-white p-4">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
          <FileText className="h-5 w-5" />
          Selected Services
        </h2>
        <div className="grid grid-cols-1 overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="border-b">
                <TableHead className="border-r p-2 text-left">
                  Thumbnail Image
                </TableHead>
                <TableHead className="border-r p-2 text-left">
                  Service Name
                </TableHead>
                <TableHead className="border-r p-2 text-left">
                  Service Address
                </TableHead>
                <TableHead className="border-r p-2 text-left">Price</TableHead>
                <TableHead className="p-2 text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {properties.map((property) => (
                <TableRow key={property.id} className="border-b">
                  <TableCell className="border-r p-2">
                    <img
                      src={property.thumbnail}
                      alt={property.name}
                      className="h-24 w-32 rounded-lg object-cover"
                    />
                  </TableCell>
                  <TableCell className="border-r p-2">
                    {property.name}
                  </TableCell>
                  <TableCell className="border-r p-2">
                    {property.address}
                  </TableCell>
                  <TableCell className="border-r p-2">
                    {property.price}
                  </TableCell>
                  <TableCell className="p-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 ml-2">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4 cursor-pointer" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleRemove(property.id)}
                        >
                          <CircleX className="mr-2 h-4 w-4" />
                          Remove
                        </DropdownMenuItem>
                        {/* lease */}
                        <DropdownMenuItem
                          onClick={() => setShowLeaseForm(true)}
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Lease
                        </DropdownMenuItem>
                        {/* application */}
                        <DropdownMenuItem onClick={handleShowRentalForm}>
                          <ClipboardList className="mr-2 h-4 w-4" />
                          Application Rental
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
