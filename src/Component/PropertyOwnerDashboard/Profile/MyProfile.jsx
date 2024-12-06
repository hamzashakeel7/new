import * as React from "react";
import {
  BuildingIcon,
  CreditCard,
  Download,
  Eye,
  FileText,
  Upload,
  UserIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../shadcn/components/ui/Card";
import { Label } from "../../../shadcn/components/ui/Label";
import { Input } from "../../../shadcn/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../shadcn/components/ui/Select";
import { Button } from "../../../shadcn/components/ui/Button";
import { Textarea } from "../../../shadcn/components/ui/Textarea";
import { Building, Pencil, Trash2, ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcn/components/ui/Table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "../../../shadcn/components/ui/Dropdown-menu";

import prop1 from "../../../assets/prop1.png";
import { useState } from "react";
import { Invoice } from "../../dashboard/Invoice";

const properties = [
  {
    id: 1,
    image: prop1,
    name: "Central House",
    address: "North Carolina",
    price: "22$",
  },
  {
    id: 2,
    image: prop1,
    name: "Lorem",
    address: "Lorem",
    price: "Lorem",
  },
];

// Fake data
const invoices = [
  {
    id: 1,
    number: "INV001",
    date: "2023-05-01",
    clientName: "Acme Corp",
    amount: "$1000",
    status: "Paid",
  },
  {
    id: 2,
    number: "INV002",
    date: "2023-05-05",
    clientName: "Globex Inc",
    amount: "$1500",
    status: "Paid",
  },
  // Additional invoices...
  {
    id: 1,
    number: "INV001",
    date: "2023-05-01",
    clientName: "Acme Corp",
    amount: "$1000",
    status: "Paid",
  },
  {
    id: 2,
    number: "INV002",
    date: "2023-05-05",
    clientName: "Globex Inc",
    amount: "$1500",
    status: "Paid",
  },
  // Additional invoices...
  {
    id: 1,
    number: "INV001",
    date: "2023-05-01",
    clientName: "Acme Corp",
    amount: "$1000",
    status: "Paid",
  },
  {
    id: 2,
    number: "INV002",
    date: "2023-05-05",
    clientName: "Globex Inc",
    amount: "$1500",
    status: "Paid",
  },
  // Additional invoices...
  {
    id: 1,
    number: "INV001",
    date: "2023-05-01",
    clientName: "Acme Corp",
    amount: "$1000",
    status: "Paid",
  },
  {
    id: 2,
    number: "INV002",
    date: "2023-05-05",
    clientName: "Globex Inc",
    amount: "$1500",
    status: "Paid",
  },
  // Additional invoices...
  {
    id: 1,
    number: "INV001",
    date: "2023-05-01",
    clientName: "Acme Corp",
    amount: "$1000",
    status: "Paid",
  },
  {
    id: 2,
    number: "INV002",
    date: "2023-05-05",
    clientName: "Globex Inc",
    amount: "$1500",
    status: "Paid",
  },
  // Additional invoices...
];

export default function MyProfile() {
  const handleEdit = (id) => {
    console.log("Edit property:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete property:", id);
  };

  const calendarData = {
    1: [],
    2: [{ type: "Development" }, { type: "Edit file" }],
    3: [{ type: "Development" }, { note: "Note taking" }],
    4: [{ type: "Green Tag" }, { note: "Note taking" }],
    5: [{ note: "Note taking" }],
    6: [{ type: "Development" }, { note: "Note taking" }],
    7: [{ note: "Note taking" }],
    8: [{ type: "Design" }, { type: "Development" }],
    9: [{ type: "Regular Tag" }, { note: "Note taking" }],
    10: [{ type: "Design" }, { note: "Note taking" }],
    11: [{ type: "Development" }, { note: "Note taking" }],
    12: [{ note: "Note taking" }],
    13: [{ note: "Note taking" }],
    14: [{ type: "Design" }, { type: "Development" }, { note: "Note taking" }],
    15: [],
    16: [
      { type: "Blue Tag" },
      { type: "Development" },
      { type: "Edit file" },
      { note: "Note taking" },
    ],
    17: [],
    18: [{ type: "Design" }, { type: "Green Tag" }, { note: "Note taking" }],
    19: [],
    20: [],
    21: [{ type: "Design" }, { type: "Development" }, { note: "Note taking" }],
    22: [],
    23: [{ type: "Blue Tag" }, { type: "Orange Tag" }],
    24: [{ type: "Edit file" }, { note: "Note taking" }],
    25: [{ type: "Design" }, { type: "Development" }, { note: "Note taking" }],
    26: [{ note: "Note taking" }],
    27: [{ type: "Regular Tag" }],
    28: [{ type: "Design" }, { type: "Development" }],
    29: [{ type: "Design" }, { type: "Development" }],
    30: [{ type: "Development" }, { type: "Edit file" }],
    31: [{ note: "Note taking" }],
    32: [{ note: "Note taking" }],
  };

  const getTagColor = (type) => {
    switch (type) {
      case "Design":
        return "text-blue-600";
      case "Development":
        return "text-orange-500";
      case "Green Tag":
        return "text-green-500";
      case "Edit file":
        return "text-red-500";
      case "Blue Tag":
        return "text-blue-600";
      case "Orange Tag":
        return "text-orange-500";
      default:
        return "text-gray-600";
    }
  };

  const weekDays = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleCloseInvoice = () => {
    setSelectedInvoice(null); // Reset the selected invoice to null
  };

  return (
    <>
      <div className="container mx-auto">
        {/* Property Owner Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-5 lg:gap-2 text-xl font-semibold">
              <UserIcon className="h-5 w-5" />
              Property Owner Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter last name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobileNumber">Mobile Number</Label>
                <Input id="mobileNumber" placeholder="Enter mobile number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Enter city" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Select>
                  <SelectTrigger id="state">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="ca">California</SelectItem>
                    <SelectItem value="tx">Texas</SelectItem>
                    {/* Add more states as needed */}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP</Label>
                <Input id="zip" placeholder="Enter ZIP code" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Input id="education" placeholder="Enter education" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="countryOfBirth">Country of Birth</Label>
                <Select>
                  <SelectTrigger id="countryOfBirth">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    {/* Add more countries as needed */}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthDate">Birth Date</Label>
                <Input id="birthDate" type="date" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-semibold">
              <BuildingIcon className="h-5 w-5" />
              Business Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Name of the Company</Label>
                <Input id="companyName" placeholder="Enter company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ein">EIN</Label>
                <Input id="ein" placeholder="Enter EIN" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="establishmentDate">Date of Establishment</Label>
                <Input id="establishmentDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessAddress">Mailing Address</Label>
                <Input
                  id="businessAddress"
                  placeholder="Enter business address"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessUrl">Business URL</Label>
                <Input id="businessUrl" placeholder="Enter business URL" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" placeholder="Enter phone number" />
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="description">Description of the Business</Label>
                <Textarea
                  id="description"
                  placeholder="Enter business description"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vision">Vision</Label>
                <Textarea
                  id="vision"
                  placeholder="Enter company vision"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mission">Mission</Label>
                <Textarea
                  id="mission"
                  placeholder="Enter company mission"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="valueStatement">Value Statement</Label>
                <Textarea
                  id="valueStatement"
                  placeholder="Enter value statement"
                  className="min-h-[100px]"
                />
              </div>
            </div>

            {/* Upload Sections */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Upload Product Portfolio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer hover:border-primary">
                    <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground text-center">
                      Drop files here or click to upload
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg">Upload Awards</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer hover:border-primary">
                    <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground text-center">
                      Drop files here or click to upload
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg">Upload Testimonials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer hover:border-primary">
                    <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground text-center">
                      Drop files here or click to upload
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Upload Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer hover:border-primary">
                    <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground text-center">
                      Drop files here or click to upload
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Specialty Designator or recognized Pr...
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer hover:border-primary">
                    <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground text-center">
                      Drop files here or click to upload
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <Button variant="outline">Edit</Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* my properties */}
      <div className="space-y-8 w-[76vw] lg:px-12 lg:w-full mt-5">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Building className="h-5 w-5" />
              My Properties
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-x-scroll lg:overflow-x-hidden">
              <div className="min-w-[500px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[300px]">
                        Thumbnail Image
                        <DropdownMenu>
                          <DropdownMenuTrigger className="ml-2">
                            <ChevronDown className="h-4 w-4" />
                          </DropdownMenuTrigger>
                        </DropdownMenu>
                      </TableHead>
                      <TableHead>
                        Property Name
                        <DropdownMenu>
                          <DropdownMenuTrigger className="ml-2">
                            <ChevronDown className="h-4 w-4" />
                          </DropdownMenuTrigger>
                        </DropdownMenu>
                      </TableHead>
                      <TableHead>
                        Address
                        <DropdownMenu>
                          <DropdownMenuTrigger className="ml-2">
                            <ChevronDown className="h-4 w-4" />
                          </DropdownMenuTrigger>
                        </DropdownMenu>
                      </TableHead>
                      <TableHead>
                        Price
                        <DropdownMenu>
                          <DropdownMenuTrigger className="ml-2">
                            <ChevronDown className="h-4 w-4" />
                          </DropdownMenuTrigger>
                        </DropdownMenu>
                      </TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {properties.map((property) => (
                      <TableRow key={property.id}>
                        <TableCell>
                          <div className="relative h-[100px] w-[150px] rounded-md overflow-hidden">
                            <img
                              src={property.image}
                              alt={property.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </TableCell>
                        <TableCell>{property.name}</TableCell>
                        <TableCell>{property.address}</TableCell>
                        <TableCell>{property.price}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleEdit(property.id)}
                            >
                              <Pencil className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleDelete(property.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Calendar: May, 2022</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-scroll lg:overflow-x-hidden">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-7 border-t border-l">
                  {weekDays.map((day) => (
                    <div
                      key={day}
                      className="p-2 text-sm font-medium text-gray-600 border-r border-b"
                    >
                      {day}
                    </div>
                  ))}
                  {Object.entries(calendarData).map(([day, events]) => (
                    <div
                      key={day}
                      className="min-h-[100px] p-2 border-r border-b"
                    >
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
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accounts section */}
        <div className="p-0 ml-0 lg:p-3 lg:ml-1">
          <div
            className={`p-2 lg:p-5 bg-gray-100 rounded-md w-[75vw] lg:w-full ${
              selectedInvoice ? "hidden" : ""
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <FileText className="h-6 w-6" />
                <h2 className="text-2xl font-semibold">Invoices</h2>
              </div>
              <div className="flex items-start justify-center gap-1 flex-col md:flex-row">
                <Button variant="outline">Sort By</Button>
                <Button variant="outline">Filter</Button>
              </div>
            </div>
            <div className="border rounded-lg overflow-x-hidden">
              <Table className="bg-white">
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice Number</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Client Name</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell>{invoice.number}</TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>{invoice.clientName}</TableCell>
                      <TableCell>{invoice.amount}</TableCell>
                      <TableCell>{invoice.status}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          onClick={() => setSelectedInvoice(invoice)}
                          variant="ghost"
                          size="sm"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="ghost" size="sm">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Pay Now
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Modal for Invoice */}
          {selectedInvoice && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <Invoice invoice={selectedInvoice} onClose={handleCloseInvoice} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
