import { useState } from "react";
import { BookText } from "lucide-react";
import { Input } from "../../../../shadcn/components/ui/Input";
import axios from "axios";

export function LeaseForm() {
  const [formData, setFormData] = useState({
    landlord: "",
    landlordAddress: "",
    tenant: "",
    tenantHomeAddress: "",
    tenantTradeName: "",
    demisedProperty: "",
    leaseTerm: "",
    commencementDate: "",
    rentalForTerm: "",
    securityDeposit: "",
    totalDueAtCommencement: "",
    permittedUse: "",
  });

  const [loading, setLoading] = useState(false);

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
    <form onSubmit={handleSubmit} className="w-full p-0 md:p-6">
      <div className="rounded-lg border p-5 md:p-10 bg-gray-100">
        <div className="mb-6 flex items-center gap-2">
          <div className="rounded-lg bg-purple-100 p-2">
            <BookText className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-lg font-semibold">Lease Form</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <label className="text-sm font-medium">
                {key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
              <Input
                name={key}
                placeholder={`Enter ${
                  key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1")
                }`}
                value={value}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-auto rounded-lg bg-purple-600 py-2 px-4 text-white font-semibold hover:bg-purple-700"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}
