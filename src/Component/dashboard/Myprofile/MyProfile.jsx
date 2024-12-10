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
import { Link } from "react-router-dom";

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

  // Function to handle opening the invoice modal
  const handleOpenInvoice = () => {
    setIsInvoiceModalOpen(true);
  };

  // Function to handle closing the invoice modal
  const handleCloseInvoice = () => {
    setIsInvoiceModalOpen(false);
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

  // the saved data from signup journey to be displayed in the myprofile setion
  const [profileData, setProfileData] = React.useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    address: "",
    city: "",
    email: "",
    education: "",
    countryOfBirth: "",
    birthDate: "",
  });

  // fecting data from localStorage
  React.useEffect(() => {
    const savedData = {
      firstName: localStorage.getItem("firstName") || "",
      lastName: localStorage.getItem("lastName") || "",
      mobileNumber: localStorage.getItem("mobileNumber") || "",
      address: localStorage.getItem("address") || "",
      city: localStorage.getItem("city") || "",
      email: localStorage.getItem("email") || "",
      education: localStorage.getItem("education") || "",
      countryOfBirth: localStorage.getItem("countryOfBirth") || "",
      birthDate: localStorage.getItem("birthDate") || "",
    };
    setProfileData(savedData);
  }, []);

  // function to change data from the profile
  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Individual Information Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
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
            Individual Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm">First Name</label>
              <Input
                id="firstName"
                value={profileData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Last Name</label>
              <Input
                id="lastName"
                value={profileData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Mobile Number</label>
              <Input
                id="mobileNumber"
                value={profileData.mobileNumber}
                onChange={handleChange}
                placeholder="Enter mobile number"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Address</label>
              <Input
                id="address"
                value={profileData.address}
                onChange={handleChange}
                placeholder="Enter address"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">City</label>
              <Input
                id="city"
                value={profileData.city}
                onChange={handleChange}
                placeholder="Enter city"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Email</label>
              <Input
                id="email"
                value={profileData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Education</label>
              <Input
                id="education"
                value={profileData.education}
                onChange={handleChange}
                placeholder="Enter education"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Country of Birth</label>
              <Input
                id="countryOfBirth"
                value={profileData.countryOfBirth}
                onChange={handleChange}
                placeholder="Enter country of birth"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Birth Date</label>
              <Input
                id="birthDate"
                type="date"
                value={profileData.birthDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <Button variant="outline">Cancel</Button>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <Link to="/property">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Search
                  </Button>
                </Link>
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
                <Link to="/PropertyService">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Search
                  </Button>
                </Link>
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
        <CardContent>
          <div className="grid grid-cols-7 border-t border-l">
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
      <Card className="">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex gap-2">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1495_3399)">
                <path
                  d="M15.21 0.43457H6.885C6.48 0.43457 6.255 0.659571 6.21 0.704571L0.27 6.64457C0.225 6.68957 0 6.91457 0 7.27457V20.9996C0 22.3946 1.125 23.5196 2.52 23.5196H15.165C16.56 23.5196 17.685 22.3946 17.685 20.9996V2.95457C17.73 1.55957 16.605 0.43457 15.21 0.43457ZM5.94 3.62957V5.65457C5.94 6.01457 5.67 6.28457 5.31 6.28457H3.24L5.94 3.62957ZM15.84 21.0446C15.84 21.4046 15.525 21.6746 15.21 21.6746H2.52C2.16 21.6746 1.89 21.3596 1.89 21.0446V8.26457H5.31C6.705 8.26457 7.83 7.13957 7.83 5.74457V2.32457H15.165C15.525 2.32457 15.795 2.59457 15.795 2.95457L15.84 21.0446Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1495_3399">
                  <rect width="18" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Accounts
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline">Sort By</Button>
            <Button variant="outline">Filter</Button>
          </div>
        </CardHeader>
        <CardContent className="">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead>Account Number</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Client Name</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Invoice</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell className="">{account.accountNumber}</TableCell>
                  <TableCell>{account.date}</TableCell>
                  <TableCell>{account.clientName}</TableCell>
                  <TableCell>{account.amount}</TableCell>
                  <TableCell>{account.status}</TableCell>
                  <TableCell>{account.invoice}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleOpenInvoice}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.13388 16.8751L17.1339 6.87509L13.125 2.86621L3.125 12.8663V16.8751H7.13388ZM13.125 4.63398L15.3662 6.87509L13.75 8.49125L11.5089 6.25011L13.125 4.63398ZM10.625 7.13399L12.8661 9.37509L6.61612 15.6251H4.375V13.384L10.625 7.13399Z"
                            fill="#171A1F"
                          />
                        </svg>

                        <span className="">View</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                        <span className="">Download</span>
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
        <div className="fixed inset-0 z-50 top-[-2rem] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleCloseInvoice}
          ></div>
          <div className="relative z-10">
            <Invoice onClose={handleCloseInvoice} />
          </div>
        </div>
      )}
    </div>
  );
}
