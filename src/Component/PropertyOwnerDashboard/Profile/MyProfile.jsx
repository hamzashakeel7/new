import * as React from "react";
import { BuildingIcon, Upload, UserIcon } from "lucide-react";
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

export default function MyProfile() {
  return (
    <div className="container mx-auto p-0 lg:p-6 space-y-8">
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
                <CardTitle className="text-lg">Upload Certifications</CardTitle>
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
  );
}
