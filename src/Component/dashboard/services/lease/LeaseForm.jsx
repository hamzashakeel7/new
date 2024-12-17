import { useState } from "react";
import { BookText } from "lucide-react";
import { Input } from "../../../../shadcn/components/ui/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LeaseForm() {
  const navigate = useNavigate();
  const leaseFormData = {
    landlord: "",
    landlordAddress: "",
    tenant: "",
    tenantHomeAddress: "",
    tenantTradeName: "",
    demisedProperty: "",
    leaseTerm: "",
    commencementDate: "",
    rentalForTerm: 0,
    securityDeposit: 0,
    totalAtCommencement: 0,
    permittedUse: "",
  };

  const [formData, setFormData] = useState(leaseFormData);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const api = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert specific fields to numbers if needed
    const numberFields = [
      "rentalForTerm",
      "securityDeposit",
      "totalAtCommencement",
    ];
    setFormData({
      ...formData,
      [name]: numberFields.includes(name) ? Number(value) : value,
    });
  };

  const token = "{{vault:json-web-token}}"; // Replace with your actual token

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${api}/api/v1/individual/leaseform/submit`,
        {
          leaseFormData: formData, // Form data
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Sending token in the Authorization header
          },
        }
      );
      console.log("Form submitted successfully:", response.data);
      setSuccessMessage("Thank you for filling out the form!");
      setFormData(leaseFormData); // Clear form
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Sorry, please try again.");
    } finally {
      setLoading(false);
    }
  };

  // breadcrumb
  const handleBreadcrumbClick = () => {
    navigate("/dashboard/propertyform");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full px-5">
      <div className="rounded-lg border p-5 md:p-8">
        {/* Breadcrumbs */}
        <div className="mb-4 text-sm">
          <button
            onClick={handleBreadcrumbClick}
            className="text-gray-500 hover:text-gray-700"
          >
            Property Form
          </button>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-purple-600 font-medium">Lease Form</span>
        </div>
        <div className="mb-6 flex items-center gap-2">
          <div className="rounded-lg">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.2818 15.1212H10.198C9.59877 15.1162 9.02211 15.3496 8.59489 15.7697C8.16766 16.1899 7.92486 16.7626 7.91992 17.3618V25.842C7.93101 27.0893 8.95073 28.0917 10.198 28.0812H14.2818C14.881 28.0862 15.4577 27.8529 15.885 27.4327C16.3122 27.0125 16.555 26.4399 16.5599 25.8405V17.3618C16.555 16.7626 16.3122 16.1899 15.885 15.7697C15.4577 15.3496 14.881 15.1162 14.2818 15.1212Z"
                stroke="#323743"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.2818 6.48134H10.198C8.97582 6.44744 7.95677 7.40916 7.91992 8.63126V10.0914C7.95677 11.3135 8.97582 12.2752 10.198 12.2413H14.2818C15.504 12.2752 16.5231 11.3135 16.5599 10.0914V8.63126C16.5231 7.40916 15.504 6.44744 14.2818 6.48134Z"
                stroke="#323743"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.718 19.4406H25.8004C26.3999 19.4459 26.9769 19.2128 27.4044 18.7926C27.832 18.3723 28.075 17.7994 28.0799 17.2V8.72119C28.075 8.12197 27.8323 7.54926 27.405 7.12905C26.9778 6.70884 26.401 6.47556 25.8019 6.48055H21.718C21.1188 6.47556 20.5421 6.70884 20.1149 7.12905C19.6876 7.54926 19.4448 8.12197 19.4399 8.72119V17.2C19.4448 17.7991 19.6876 18.3718 20.1149 18.792C20.5421 19.2122 21.1188 19.4455 21.718 19.4406Z"
                stroke="#323743"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.718 28.0812H25.8004C27.0231 28.1159 28.0431 27.154 28.0799 25.9313V24.4711C28.0431 23.249 27.024 22.2873 25.8019 22.3212H21.718C20.4959 22.2873 19.4768 23.249 19.4399 24.4711V25.9298C19.4759 27.1525 20.4953 28.115 21.718 28.0812Z"
                stroke="#323743"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
                type={typeof value === "number" ? "number" : "text"}
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

        {successMessage && (
          <p className="mt-4 text-green-600">{successMessage}</p>
        )}
        {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}

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
