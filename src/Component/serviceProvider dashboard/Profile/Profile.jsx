import * as React from "react";
import { Upload } from "lucide-react";
import { Button } from "../../../shadcn/components/ui/Button";
import { Input } from "../../../shadcn/components/ui/Input";
import { Label } from "../../../shadcn/components/ui/Label";
import { Textarea } from "../../../shadcn/components/ui/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../shadcn/components/ui/Select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../shadcn/components/ui/Card";

export default function ProfileForm() {
  const handleFileUpload = (e) => {};

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
      firstName: localStorage.getItem("name") || "",
      lastName: localStorage.getItem("lastName") || "",
      mobileNumber: localStorage.getItem("mobileNumber") || "",
      address: localStorage.getItem("address") || "",
      city: localStorage.getItem("city") || "",
      email: localStorage.getItem("userEmail") || "",
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
      {/* Individual Information Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="Enter first name"
                value={profileData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Enter last name"
                value={profileData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobileNumber">Mobile Number</Label>
              <Input
                id="mobileNumber"
                placeholder="Enter mobile number"
                value={profileData.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="Enter address"
                value={profileData.address}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="Enter city"
                value={profileData.city}
                onChange={handleChange}
              />
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
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="education">Education</Label>
              <Input
                id="education"
                placeholder="Enter education"
                value={profileData.education}
                onChange={handleChange}
              />
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

      {/* Business Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
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
        <CardContent className="space-y-6">
          {/* Basic Business Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="health">Healthcare</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName">Name of the Company</Label>
              <Input id="companyName" placeholder="Enter company name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gsa">GSA</Label>
              <Input id="gsa" placeholder="Enter GSA" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="establishmentDate">Date of Establishment</Label>
              <Input id="establishmentDate" type="date" />
            </div>
          </div>

          {/* Address Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="businessAddress">
                Address of Individual Locations
              </Label>
              <Input
                id="businessAddress"
                placeholder="Enter business address"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mailingAddress">Mailing Address</Label>
              <Input id="mailingAddress" placeholder="Enter mailing address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="territories">Territories Serviced</Label>
              <Input id="territories" placeholder="Enter territories" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumbers">Phone and Fax Numbers</Label>
              <Input id="phoneNumbers" placeholder="Enter phone/fax numbers" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website URL</Label>
              <Input id="website" placeholder="Enter website URL" />
            </div>
          </div>

          {/* Business Description */}
          <div className="space-y-4">
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
              <Label htmlFor="values">Value Statement</Label>
              <Textarea
                id="values"
                placeholder="Enter value statement"
                className="min-h-[100px]"
              />
            </div>
          </div>

          {/* File Upload Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <Label>Upload Product Portfolio</Label>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2">
                <Upload className="h-8 w-8 text-gray-400" />
                <p className="text-sm text-gray-600">Drop files here</p>
                <p className="text-xs text-gray-400">
                  Supported format PNG, JPG
                </p>
                <Button variant="link" className="text-purple-600">
                  Browse files
                </Button>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label>Upload Awards</Label>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2">
                <Upload className="h-8 w-8 text-gray-400" />
                <p className="text-sm text-gray-600">Drop files here</p>
                <p className="text-xs text-gray-400">
                  Supported format PNG, JPG
                </p>
                <Button variant="link" className="text-purple-600">
                  Browse files
                </Button>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label>Upload Testimonials</Label>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2">
                <Upload className="h-8 w-8 text-gray-400" />
                <p className="text-sm text-gray-600">Drop files here</p>
                <p className="text-xs text-gray-400">
                  Supported format PNG, JPG
                </p>
                <Button variant="link" className="text-purple-600">
                  Browse files
                </Button>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label>Upload Certifications</Label>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2">
                <Upload className="h-8 w-8 text-gray-400" />
                <p className="text-sm text-gray-600">Drop files here</p>
                <p className="text-xs text-gray-400">
                  Supported format PNG, JPG
                </p>
                <Button variant="link" className="text-purple-600">
                  Browse files
                </Button>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label>Specialty (Designed or recognized)</Label>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2">
                <Upload className="h-8 w-8 text-gray-400" />
                <p className="text-sm text-gray-600">Drop files here</p>
                <p className="text-xs text-gray-400">
                  Supported format PNG, JPG
                </p>
                <Button variant="link" className="text-purple-600">
                  Browse files
                </Button>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2">
        <Button variant="outline">Edit</Button>
        <Button className="bg-purple-600 hover:bg-purple-700">Save</Button>
      </div>
    </div>
  );
}
