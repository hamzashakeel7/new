import { useState } from "react";
import { BookText } from "lucide-react";
import { Input } from "../../../../shadcn/components/ui/Input";
import axios from "axios";

export function LeaseForm() {
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
            <BookText className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-lg font-semibold">Lease Form</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Landlord</label>
            <Input
              name="name"
              placeholder="Add Landlord name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Landlord Address</label>
            <Input
              name="address"
              placeholder="Add Landlord Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Tenant</label>
            <Input
              name="name"
              type="tel"
              placeholder="Add Tenant"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Tenant Home Address</label>
            <Input
              name="address"
              placeholder="Add Tenant Home Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Tenant Trade Name</label>
            <Input
              name="name"
              placeholder="Add Tenant Trade Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Demised Property</label>
            <Input
              name="name"
              placeholder="Add Demised Property"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Lease Term</label>
            <Input
              name="name"
              placeholder="Enter Lease Term"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Commencement Date</label>
            <Input
              name="name"
              placeholder="Enter Commencement Date"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Rental for the term should be:
            </label>
            <Input
              name="name"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Security deposit for the term:
            </label>
            <Input
              name="name"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Total due at Commencement:
            </label>
            <Input
              name="name"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Permitted use:</label>
            <Input
              name="name"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* submit button */}
          <div className="col-span-1 col-end-7 mt-4 flex  items-end justify-end">
            <button
              type="submit"
              className="w-full rounded-lg bg-purple-600 py-2 px-4 text-white font-semibold hover:bg-purple-700"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
