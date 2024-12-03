import React, { useState } from "react";
import { Button } from "../../../shadcn/components/ui/Button";
import { Input } from "../../../shadcn/components/ui/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcn/components/ui/Table";
import { Textarea } from "../../../shadcn/components/ui/Textarea";
import { Calendar } from "../../../shadcn/components/ui/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../shadcn/components/ui/Popover";
import { CalendarIcon, Eye } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../../../shadcn/lib/utils";
import { TicketThread } from "../../serviceProvider dashboard/TicketThread";

const tickets = [
  {
    id: 1,
    number: "TKT001",
    subject: "Login Issue",
    status: "Open",
    dateCreated: "2023-06-01",
  },
  {
    id: 2,
    number: "TKT002",
    subject: "Payment Failed",
    status: "Closed",
    dateCreated: "2023-06-02",
  },
  {
    id: 3,
    number: "TKT003",
    subject: "Feature Request",
    status: "In Progress",
    dateCreated: "2023-06-03",
  },
  {
    id: 4,
    number: "TKT004",
    subject: "Account Deletion",
    status: "Open",
    dateCreated: "2023-06-04",
  },
  {
    id: 5,
    number: "TKT005",
    subject: "Billing Question",
    status: "Closed",
    dateCreated: "2023-06-05",
  },
  {
    id: 6,
    number: "TKT006",
    subject: "Technical Support",
    status: "In Progress",
    dateCreated: "2023-06-06",
  },
  {
    id: 7,
    number: "TKT007",
    subject: "Product Inquiry",
    status: "Open",
    dateCreated: "2023-06-07",
  },
];

export function HelpAndSupport() {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [showFilters, setShowFilters] = useState(true);
  const [showSubmitTicket, setShowSubmitTicket] = useState(true);
  const [isTicketThreadOpen, setIsTicketThreadOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const [newTicket, setNewTicket] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTicket((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting ticket:", newTicket);
    setNewTicket({ name: "", email: "", phone: "", description: "" });
  };

  const handleReset = () => {
    setDateFrom(null);
    setDateTo(null);
  };

  const handleOpenTicketThread = (ticket) => {
    setSelectedTicket(ticket);
    setIsTicketThreadOpen(true);
  };

  const handleCloseTicketThread = () => {
    setIsTicketThreadOpen(false);
    setSelectedTicket(null);
  };

  return (
    <div className="p-0 lg:p-6 space-y-6 w-[75vw] lg:w-full">
      <div className="flex flex-col md:flex-row gap-6">
        {showFilters && (
          <div className="w-full md:w-1/4 space-y-4 bg-white p-4 rounded-lg border">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Filters</h3>
            </div>
            {/* Filters section */}
            <div className="space-y-2">
              <h4 className="font-medium">Date Range</h4>
              <div className="grid grid-cols-2 gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !dateFrom && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className=" h-4 w-4 " />
                      {dateFrom ? (
                        format(dateFrom, "PPP")
                      ) : (
                        <span>Date From</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 text-wrap">
                    <Calendar
                      mode="single"
                      selected={dateFrom}
                      onSelect={setDateFrom}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !dateTo && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className=" h-4 w-4" />
                      {dateTo ? format(dateTo, "PPP") : <span>Date To</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dateTo}
                      onSelect={setDateTo}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleReset}>
                Reset
              </Button>
              <Button className="bg-[#7415e2] hover:bg-purple-600">
                Apply
              </Button>
            </div>
          </div>
        )}

        {/* Tickets section */}
        <div className="flex-1 bg-gray-100 p-4 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Tickets</h2>
          <div className="overflow-x-auto">
            <Table className="bg-white">
              <TableHeader>
                <TableRow>
                  <TableHead>Number</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell>{ticket.number}</TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>{ticket.status}</TableCell>
                    <TableCell>{ticket.dateCreated}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleOpenTicketThread(ticket)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* bottom ticket form */}
      {showSubmitTicket && (
        <div className="bg-gray-100 p-4 rounded-lg border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Submit a Ticket</h3>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={newTicket.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={newTicket.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={newTicket.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <Textarea
                id="description"
                name="description"
                value={newTicket.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" className="bg-[#7415e2] hover:bg-purple-600">
              Submit
            </Button>
          </form>
        </div>
      )}

      {/* Ticket Thread Modal */}
      {isTicketThreadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black  opacity-50 top-[-2rem]"
            onClick={handleCloseTicketThread}
          ></div>
          <div className="relative z-10 w-full max-w-3xl">
            <TicketThread
              onClose={handleCloseTicketThread}
              ticket={selectedTicket}
            />
          </div>
        </div>
      )}
    </div>
  );
}
