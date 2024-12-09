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

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Individual Information Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                </SelectContent>
              </Select>
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
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
