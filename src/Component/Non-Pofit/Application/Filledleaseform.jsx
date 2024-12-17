import { useNavigate } from "react-router";
import { Card } from "../../../shadcn/components/ui/Card";

const leftDetails = [
  { label: "Landlord", value: "11-12-2024" },
  { label: "Landlord Address", value: "David" },
  { label: "Tenant", value: "Oberoi" },
  { label: "Tenant Home Address", value: "Yes" },
  { label: "Tenant Trade Name", value: "N/A" },
  { label: "Demised Property", value: "Yes" },
];

const rightDetails = [
  { label: "Lease Term", value: "11-12-2024" },
  { label: "Commencement Date", value: "David" },
  { label: "Rental for the term shall be:", value: "Oberoi" },
  { label: "Security Deposit for term:", value: "Yes" },
  { label: "Total due at Commencement:", value: "N/A" },
  { label: "Permitted use:", value: "Yes" },
];

export default function FilledLeaseForm() {
  const navigate = useNavigate();

  const handleBreadcrumbClick = () => {
    navigate("/nonprofit/application");
  };

  return (
    <div className="p-6">
      {/* Breadcrumbs */}
      <div className="mb-4 text-sm">
        <button
          onClick={handleBreadcrumbClick}
          className="text-gray-500 hover:text-gray-700"
        >
          Applications
        </button>
        <span className="mx-2 text-gray-400">&gt;</span>
        <span className="text-purple-600 font-medium">Lease Application</span>
      </div>
      <h2 className="text-xl font-semibold mb-4">Lease Form</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="space-y-4">
            {leftDetails.map((detail, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-2"
              >
                <span className="text-sm text-gray-600 font-medium">
                  {detail.label}
                </span>
                <span className="text-sm">{detail.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <div className="space-y-4">
            {rightDetails.map((detail, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-2"
              >
                <span className="text-sm text-gray-600 font-medium">
                  {detail.label}
                </span>
                <span className="text-sm">{detail.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
