import * as React from "react";
import { Search, View, Download, Edit } from "lucide-react";
import { Button } from "../../../shadcn/components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../shadcn/components/ui/Card";
import { Input } from "../../../shadcn/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../shadcn/components/ui/Select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcn/components/ui/Table";
import { Invoice } from "../Invoice";

export function MyProfile() {
  const accounts = Array(10)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      accountNumber: "Lorem",
      date: "Lorem",
      clientName: "Lorem",
      amount: "Lorem",
      status: "Lorem",
      invoice: "Paid",
    }));

  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = React.useState(false);

  const handleOpenInvoice = () => {
    setIsInvoiceModalOpen(true);
  };

  const handleCloseInvoice = () => {
    setIsInvoiceModalOpen(false);
  };

  const calendarData = {
    // ... (keep the existing calendarData)
  };

  const getTagColor = (type) => {
    // ... (keep the existing getTagColor function)
  };

  const weekDays = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Individual Information Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Individual Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm">First Name</label>
              <Input placeholder="Add Company Name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Last Name</label>
              <Input placeholder="Add address" />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Mobile Number</label>
              <Input placeholder="Select city" />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Address</label>
              <Input placeholder="select city" />
            </div>
            <div className="space-y-2">
              <label className="text-sm">City</label>
              <Input placeholder="City" />
            </div>
            <div className="space-y-2">
              <label className="text-sm">State</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="ca">California</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm">ZIP</label>
              <Input placeholder="ZIP" />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Email</label>
              <Input placeholder="select city" />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Education</label>
              <Input placeholder="Education" />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Country of Birth</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Country of birth" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm">Birth Date</label>
              <Input type="date" />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <Button variant="outline">Edit</Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Save</Button>
          </div>
        </CardContent>
      </Card>

      {/* Search Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Property Search */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Property Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Where Would You Like to Find a Place
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm">City</label>
                  <Input placeholder="City" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">State</label>
                  <Input placeholder="Add Company Name" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm">ZIP</label>
                <Input placeholder="ZIP" />
              </div>
              <div className="flex justify-end">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Search */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Service Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              What Services are You Looking For
            </p>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm">Industry</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="health">Healthcare</SelectItem>
                    <SelectItem value="edu">Education</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calendar Section */}
      <Card>
        <CardHeader>
          <CardTitle>Calendar: May, 2022</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <div className="grid grid-cols-7 border-t border-l min-w-[700px]">
            {/* Week days header */}
            {weekDays.map((day) => (
              <div
                key={day}
                className="p-2 text-sm font-medium text-gray-600 border-r border-b"
              >
                {day}
              </div>
            ))}

            {/* Calendar days */}
            {Object.entries(calendarData).map(([day, events]) => (
              <div key={day} className="min-h-[100px] p-2 border-r border-b">
                <div className="text-sm text-gray-600 mb-1">{day}</div>
                <div className="space-y-1">
                  {events.map((event, index) => (
                    <React.Fragment key={index}>
                      {event.type && (
                        <div
                          className={`text-xs font-medium ${getTagColor(
                            event.type
                          )}`}
                        >
                          {event.type}
                        </div>
                      )}
                      {event.note && (
                        <div className="text-xs text-gray-500">
                          {event.note}
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Accounts Section */}
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle>Accounts</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline">Sort By</Button>
            <Button variant="outline">Filter</Button>
          </div>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">
                  Account Number
                </TableHead>
                <TableHead className="whitespace-nowrap">Date</TableHead>
                <TableHead className="whitespace-nowrap">Client Name</TableHead>
                <TableHead className="whitespace-nowrap">Amount</TableHead>
                <TableHead className="whitespace-nowrap">Status</TableHead>
                <TableHead className="whitespace-nowrap">Invoice</TableHead>
                <TableHead className="whitespace-nowrap">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell className="whitespace-nowrap">
                    {account.accountNumber}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {account.date}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {account.clientName}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {account.amount}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {account.status}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {account.invoice}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleOpenInvoice}
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        <span className="">View</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        <span className="">Download</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        Pay Now
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Invoice Modal */}
      {isInvoiceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleCloseInvoice}
          ></div>
          <div className="relative z-10 w-full max-w-md">
            <Invoice onClose={handleCloseInvoice} />
          </div>
        </div>
      )}
    </div>
  );
}
