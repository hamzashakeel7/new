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
  return (
    <div className="p-6">
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
