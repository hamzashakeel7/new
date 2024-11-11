import { useState, useEffect } from "react";
import { User } from "lucide-react";
import { Input } from "../../../shadcn/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../shadcn/components/ui/Select";
import { BottomBar } from "./Bottombar";
import axios from "axios";

export function Mainform({ isSidebarOpen }) {
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
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api-endpoint", formData);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full md:p-6 pb-14 transition-all duration-300 ${
        isSmallScreen && isSidebarOpen ? "ml-64" : ""
      }`}
    >
      <div className="rounded-lg border p-5 lg:p-10 bg-gray-100">
        <div className="mb-6 flex items-center gap-2">
          <div className="rounded-lg bg-purple-100 p-2">
            <User className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-lg font-semibold">Individual Information</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Individual Name</label>
            <Input
              name="name"
              placeholder="Add individual name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Address</label>
            <Input
              name="address"
              placeholder="Add address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

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

          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <Input
              name="email"
              placeholder="Add email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">City</label>
            <Input
              name="city"
              placeholder="Select city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

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

          <div className="space-y-2">
            <label className="text-sm font-medium">State</label>
            <Input
              name="state"
              placeholder="Select state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Zip</label>
            <Input
              name="zip"
              placeholder="Enter postal code"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <BottomBar loading={loading} />
    </form>
  );
}
