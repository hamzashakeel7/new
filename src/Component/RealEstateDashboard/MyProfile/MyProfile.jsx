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

  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleCloseInvoice = () => {
    setSelectedInvoice(null); // Reset the selected invoice to null
  };

  return (
    <>
      <div className="container mx-auto">
        {/* Property Owner Information */}
        <Card className="mb-2 md:mb-5">
          <CardHeader>
            <CardTitle className="flex items-center gap-5 lg:gap-2 text-xl font-semibold">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1494_2976)">
                  <path
                    d="M25.348 22.618L20.308 25.474C20.056 25.642 19.678 25.642 19.426 25.474L14.428 22.618C14.218 22.492 14.218 22.24 14.428 22.156L15.604 21.484C15.688 21.442 15.772 21.442 15.856 21.484L18.922 23.206C19.216 23.374 19.552 23.458 19.888 23.458C20.224 23.458 20.56 23.374 20.854 23.206L23.92 21.484C24.004 21.442 24.088 21.442 24.172 21.484L25.348 22.156C25.558 22.24 25.558 22.492 25.348 22.618ZM25.348 19.384L20.308 22.24C20.056 22.408 19.678 22.408 19.426 22.24L14.428 19.384C14.218 19.258 14.218 19.006 14.428 18.922L15.604 18.25C15.688 18.208 15.772 18.208 15.856 18.25L18.922 19.972C19.216 20.14 19.552 20.224 19.888 20.224C20.224 20.224 20.56 20.14 20.854 19.972L23.92 18.25C24.004 18.208 24.088 18.208 24.172 18.25L25.348 18.922C25.558 19.006 25.558 19.258 25.348 19.384ZM19.468 19.048L14.428 16.192C14.218 16.066 14.218 15.814 14.428 15.73L19.468 12.874C19.72 12.706 20.098 12.706 20.35 12.874L25.39 15.73C25.6 15.856 25.6 16.108 25.39 16.192L20.35 19.048C20.098 19.174 19.72 19.174 19.468 19.048Z"
                    fill="#424856"
                  />
                  <path
                    d="M13.7979 17.4104C14.0079 17.2844 14.0079 17.0324 13.7979 16.9484L12.6219 16.2764H12.5799V15.7304C12.5799 15.7304 12.5799 15.0164 13.2099 14.6384C13.3779 14.5544 13.7139 14.3864 14.0919 14.1764C13.9239 14.0924 13.7559 14.0084 13.5879 13.9664C12.8319 13.5884 11.7399 13.2104 11.4039 12.2444C11.1939 11.7404 11.3199 11.1944 11.5719 10.7324C12.0339 10.2704 12.4539 9.85039 12.8319 9.26239C12.9159 9.09439 12.9999 9.01039 13.0839 8.84239C14.1339 7.33039 14.2599 5.27239 13.6719 3.55039C13.0419 1.70239 11.4039 0.442391 9.38786 0.400391H9.09386C7.07786 0.442391 5.39786 1.70239 4.80986 3.55039C4.17986 5.31439 4.34786 7.33039 5.39786 8.84239C5.43986 9.01039 5.56586 9.09439 5.64986 9.26239C6.02786 9.85039 6.48986 10.2284 6.90986 10.7324C7.11986 11.1944 7.20386 11.6984 7.07786 12.2444C6.78386 13.1684 5.69186 13.5884 4.89386 13.9664C3.12986 14.7224 0.945858 15.8144 0.609858 17.9564C0.231858 19.7204 1.44986 21.4844 3.29786 21.4844H12.5799L13.7979 20.6864C14.0079 20.5604 14.0079 20.3084 13.7979 20.2244L12.6219 19.5524H12.5799V18.2084L13.7979 17.4104Z"
                    fill="#424856"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1494_2976">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
          Real Estate Professional Information
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
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6875 17.7875C15.6875 17.8704 15.7204 17.9498 15.779 18.0084C15.8376 18.0671 15.9171 18.1 16 18.1C16.0829 18.1 16.1624 18.0671 16.221 18.0084C16.2796 17.9498 16.3125 17.8704 16.3125 17.7875C16.3125 17.7046 16.2796 17.6251 16.221 17.5665C16.1624 17.5079 16.0829 17.475 16 17.475C15.9171 17.475 15.8376 17.5079 15.779 17.5665C15.7204 17.6251 15.6875 17.7046 15.6875 17.7875Z"
                  fill="#E73B37"
                />
                <path
                  d="M19.1187 19.2844H12.7031L3.375 12.1969V12.825L12.5312 19.7844H19.2812L28.625 12.8063V12.1813L19.1187 19.2844Z"
                  fill="#E73B37"
                />
                <path
                  d="M22 8.02502V5.0719H10V8.02502H2V26.9313H30V8.02502H22ZM11.375 6.4469H20.625V8.0219H11.375V6.4469ZM28.625 25.5563H3.375V24.0313H28.625V25.5563ZM28.625 23.5282H3.375V9.40002H28.625V23.5282Z"
                  fill="#323743"
                />
              </svg>
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
              {/* Upload Sections */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {["Product Portfolio", "Awards", "Testimonials", "Certifications"].map((label, index) => (
    <div key={index} className="bg-white border rounded-lg shadow-md p-4">
      <h4 className="text-lg md:text-xl font-semibold mb-4 text-center">{label}</h4>
      <div className="border-dashed border-2 border-gray-300 p-6 text-center rounded-lg flex flex-col items-center justify-center gap-2">
        <svg
          width="66"
          height="52"
          viewBox="0 0 66 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-2"
        >
          <path
            d="M33 50.635L33 26.945V31.065"
            stroke="#6F7787"
            strokeWidth="2.472"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M21.6699 38.305L32.9999 26.975L44.3299 38.305"
            stroke="#6F7787"
            strokeWidth="2.472"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M41.2397 50.6055C54.1895 49.5253 64.092 38.6031 63.9021 25.6098C63.7121 12.6164 53.4946 1.98838 40.5188 1.28711C27.5429 0.585839 16.2395 10.0508 14.6503 22.948C7.27779 23.6796 1.77369 30.0632 2.13497 37.4631C2.49626 44.863 8.59604 50.68 16.0047 50.69L24.7597 50.69"
            stroke="#6F7787"
            strokeWidth="2.472"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-bold text-gray-800">Drag files here</span>
        <span className="text-gray-500 text-sm">Supported format: PNG, JPG</span>
        <span className="text-gray-500 text-sm">OR</span>
        <span className="text-purple-600 font-semibold cursor-pointer hover:underline">
          Browse files
        </span>
      </div>
    </div>
  ))}
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1560_2009)">
                  <path
                    d="M22.9574 22.4348H20.6095V1.5652H21.3922C21.8244 1.5652 22.1748 1.21481 22.1748 0.782578C22.1748 0.350344 21.8244 0 21.3922 0C19.8636 0 3.31914 0 2.60955 0C2.17736 0 1.82692 0.350391 1.82692 0.782625C1.82692 1.21486 2.17731 1.56525 2.60955 1.56525H3.39217V22.4348H1.04434C0.612156 22.4348 0.261719 22.7852 0.261719 23.2174C0.261719 23.6497 0.612109 24 1.04434 24C1.51933 24 20.9881 24 22.9574 24C23.3896 24 23.74 23.6496 23.74 23.2174C23.74 22.7851 23.3896 22.4348 22.9574 22.4348ZM19.0443 22.4348H4.95737V1.5652H19.0443V22.4348Z"
                    fill="black"
                  />
                  <path
                    d="M10.4346 3.65234H7.30411C6.87192 3.65234 6.52148 4.00273 6.52148 4.43497V7.56542C6.52148 7.99761 6.87187 8.34805 7.30411 8.34805H10.4346C10.8667 8.34805 11.2172 7.99766 11.2172 7.56542V4.43497C11.2171 4.00273 10.8667 3.65234 10.4346 3.65234ZM9.65194 6.7828H8.08673V5.21759H9.65194V6.7828Z"
                    fill="black"
                  />
                  <path
                    d="M16.6963 3.65234H13.5658C13.1336 3.65234 12.7832 4.00273 12.7832 4.43497V7.56542C12.7832 7.99761 13.1336 8.34805 13.5658 8.34805H16.6963C17.1285 8.34805 17.4789 7.99766 17.4789 7.56542V4.43497C17.4789 4.00273 17.1285 3.65234 16.6963 3.65234ZM15.9137 6.7828H14.3485V5.21759H15.9137V6.7828Z"
                    fill="black"
                  />
                  <path
                    d="M10.4346 9.91309H7.30411C6.87192 9.91309 6.52148 10.2635 6.52148 10.6957V13.8262C6.52148 14.2584 6.87187 14.6088 7.30411 14.6088H10.4346C10.8667 14.6088 11.2172 14.2584 11.2172 13.8262V10.6957C11.2171 10.2635 10.8667 9.91309 10.4346 9.91309ZM9.65194 13.0435H8.08673V11.4783H9.65194V13.0435Z"
                    fill="black"
                  />
                  <path
                    d="M16.6963 9.91309H13.5658C13.1336 9.91309 12.7832 10.2635 12.7832 10.6957V13.8262C12.7832 14.2584 13.1336 14.6088 13.5658 14.6088H16.6963C17.1285 14.6088 17.4789 14.2584 17.4789 13.8262V10.6957C17.4789 10.2635 17.1285 9.91309 16.6963 9.91309ZM15.9137 13.0435H14.3485V11.4783H15.9137V13.0435Z"
                    fill="black"
                  />
                  <path
                    d="M10.4346 16.1738H7.30411C6.87192 16.1738 6.52148 16.5242 6.52148 16.9565V20.0869C6.52148 20.5191 6.87187 20.8695 7.30411 20.8695H10.4346C10.8667 20.8695 11.2172 20.5191 11.2172 20.0869V16.9565C11.2171 16.5243 10.8667 16.1738 10.4346 16.1738ZM9.65194 19.3043H8.08673V17.7391H9.65194V19.3043Z"
                    fill="black"
                  />
                  <path
                    d="M16.6963 16.1738H13.5658C13.1336 16.1738 12.7832 16.5242 12.7832 16.9565V20.0869C12.7832 20.5191 13.1336 20.8695 13.5658 20.8695H16.6963C17.1285 20.8695 17.4789 20.5191 17.4789 20.0869V16.9565C17.4789 16.5243 17.1285 16.1738 16.6963 16.1738ZM15.9137 19.3043H14.3485V17.7391H15.9137V19.3043Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1560_2009">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              My Properties
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-x-scroll lg:overflow-x-hidden">
              <div className="min-w-[500px]">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-100">
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
                      <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="">
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
                          <div className="flex justify-center gap-2">
                            <Button
                              variant="outline"
                              size=""
                              onClick={() => handleEdit(property.id)}
                            >
                              <Pencil className="h-4 w-4" />
                              <span className="">Edit</span>
                            </Button>
                            <Button
                              variant="outline"
                              size=""
                              onClick={() => handleDelete(property.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="">Delete</span>
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
                      <h2 className="text-2xl font-semibold">Accounting By User</h2>
                    </div>
                    <div className="flex items-start justify-center gap-1 flex-col md:flex-row">
                      <Button variant="outline">Sort By</Button>
                      <Button variant="outline">Filter</Button>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-x-hidden">
                    <Table className="bg-white">
                      <TableHeader>
                        <TableRow className="bg-gray-100">
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
                            <TableCell className="text-center">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                              <Button variant="ghost" size="sm">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_1495_3416)">
                                    <path
                                      d="M11.7104 2.79231C11.7426 2.76359 11.7682 2.72833 11.7856 2.68889C11.803 2.64945 11.8118 2.60675 11.8114 2.56363C11.811 2.52052 11.8014 2.478 11.7832 2.43892C11.765 2.39983 11.7386 2.36509 11.7059 2.33701C11.6714 2.30745 11.6372 2.27804 11.6033 2.2488C11.3444 2.02617 11.0767 1.79565 10.7967 1.59902C8.65737 0.0933634 6.43455 0.0848926 4.19032 0.883401C2.15839 1.60585 0.853515 3.05121 0.311402 5.17855C-0.293336 7.55532 0.236221 9.65211 1.88646 11.4114C1.92939 11.4569 1.97321 11.5023 2.01696 11.5457C2.90344 12.4323 4.00759 12.9796 4.88245 13.3604C5.25796 13.5244 7.18469 13.7236 7.70601 13.6459C10.8041 13.1832 12.8428 11.4359 13.5529 8.51255C13.6885 7.93994 13.756 7.35332 13.754 6.76488C13.751 6.14688 13.6471 5.53354 13.4464 4.94903C13.4317 4.90531 13.4077 4.86535 13.3758 4.83203C13.3439 4.79871 13.3051 4.77284 13.2621 4.75627C13.2191 4.73971 13.1729 4.73287 13.1269 4.73622C13.081 4.73958 13.0362 4.75306 12.9961 4.7757L12.9877 4.78049C12.9239 4.81703 12.8749 4.87485 12.8495 4.94383C12.8239 5.01281 12.8235 5.08855 12.8482 5.15781C13.0294 5.66022 13.1218 6.19032 13.1212 6.72439C13.115 7.36512 13.0283 8.00251 12.8631 8.62162C12.3735 10.4007 11.2033 11.6973 9.28548 12.5843C7.3357 13.5178 4.5396 12.574 3.79566 12.0828C2.97338 11.5207 2.25388 10.8214 1.66862 10.0154C0.750762 8.71575 0.544839 6.84788 1.03806 5.14023C1.26887 4.35178 1.67224 3.62457 2.21894 3.01135C2.76564 2.39812 3.44196 1.91425 4.19885 1.59481C6.16793 0.776496 8.14367 0.632146 10.0707 1.85769C10.3291 2.02219 10.9879 2.53948 11.3208 2.80364C11.3767 2.84796 11.4464 2.87109 11.5177 2.86896C11.589 2.86682 11.6572 2.83954 11.7103 2.79196L11.7104 2.79231Z"
                                      fill="black"
                                    />
                                    <path
                                      d="M6.14569 8.87856C6.27766 8.75313 6.35015 8.68964 6.41651 8.6203C8.54416 6.39747 10.8743 4.39626 13.2181 2.41053C13.3067 2.33553 13.3974 2.23984 13.5022 2.21297C13.6286 2.18067 13.8348 2.21782 13.8913 2.28646C13.9284 2.33719 13.9519 2.3966 13.9594 2.459C13.9669 2.5214 13.9583 2.58469 13.9344 2.64281C13.8793 2.78727 13.7451 2.911 13.6234 3.01914C12.8968 3.6647 12.15 4.28802 11.4363 4.94691C9.9444 6.32474 8.46205 7.71282 6.98912 9.11112C6.34372 9.72251 6.09534 9.7473 5.50146 9.09399C5.11053 8.66378 3.93073 7.21374 3.56942 6.75686C3.51837 6.68584 3.4729 6.61098 3.43342 6.53294C3.35193 6.38842 3.29865 6.22917 3.46064 6.11713C3.64109 5.99235 3.76914 6.12256 3.87611 6.25814C3.98436 6.39543 4.07666 6.54621 4.19255 6.6763C4.55235 7.08003 5.75692 8.45272 6.14569 8.87856Z"
                                      fill="black"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1495_3416">
                                      <rect width="14" height="14" fill="white" />
                                    </clipPath>
                                  </defs>
                                </svg>
                                Pay Now
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
      
      </div>
    </>
  );
}
