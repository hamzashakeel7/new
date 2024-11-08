import { useState } from "react";
import { User } from "lucide-react";
import  {Input} from "../../../shadcn/components/ui/Input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../shadcn/components/ui/Select"
import { BottomBar } from "./Bottombar";
import axios from "axios";

export function Mainform() {
  //  state for fields
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    city: "",
    referralSource: "",
    state: "",
    zip: "",
  });

  const [loading, setLoading] = useState(false);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace the api here...
      const response = await axios.post("/api-endpoint", formData);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-6">
      <div className="rounded-lg border p-5 lg:p-10 bg-gray-100">
        <div className="mb-6 flex items-center gap-2">
          <div className="rounded-lg bg-purple-100 p-2">
            <User className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-lg font-semibold">Individual Information</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Individual Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Individual Name</label>
            <Input
              name="name"
              placeholder="Add individual name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Address</label>
            <Input
              name="address"
              placeholder="Add address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>
            <Input
              name="phoneNumber"
              type="tel"
              placeholder="Add phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <Input
              name="email"
              placeholder="Add email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* City */}
          <div className="space-y-2">
            <label className="text-sm font-medium">City</label>
            <Input
              name="city"
              placeholder="Select city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          {/* Referral Source */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Referral Source</label>
            <Select
              onValueChange={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  referralSource: value,
                }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="source1">Source 1</SelectItem>
                <SelectItem value="source2">Source 2</SelectItem>
                <SelectItem value="source3">Source 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* State */}
          <div className="space-y-2">
            <label className="text-sm font-medium">State</label>
            <Input
              name="state"
              placeholder="Select state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          {/* Zip */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Zip</label>
            <Input
              name="zip"
              placeholder="Enter postal code"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>

          {/* Bottom Bar with Submit Button */}
          <BottomBar loading={loading} />
        </div>
      </div>
    </form>
  );
}
