import { useNavigate } from "react-router-dom";
import { Card } from "../../../shadcn/components/ui/Card";

export default function FilledRentalApplication() {
  const navigate = useNavigate();

  const handleBreadcrumbClick = () => {
    navigate("/propertyownerdashboard/applications");
  };

  return (
    <div className="p-6">
      <div className="flex items-start  mb-6 flex-col">
        {/* Breadcrumbs */}
        <div className="mb-4 text-sm">
          <button
            onClick={handleBreadcrumbClick}
            className="text-gray-500 hover:text-gray-700"
          >
            Applications
          </button>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-purple-600 font-medium">
            Rental Application
          </span>
        </div>
        <h2 className="text-lg font-medium">Rental Application</h2>
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-y-3">
            <div className="text-sm text-gray-600">Date</div>
            <div className="text-sm text-right">11-12-2024</div>
            <div className="text-sm text-gray-600">First Name</div>
            <div className="text-sm text-right">David</div>
            <div className="text-sm text-gray-600">Last Name</div>
            <div className="text-sm text-right">Oberoi</div>
            <div className="text-sm text-gray-600">Social Security</div>
            <div className="text-sm text-right">Yes</div>
            <div className="text-sm text-gray-600">Other Last Names Used</div>
            <div className="text-sm text-right">N/A</div>
            <div className="text-sm text-gray-600">Disabled</div>
            <div className="text-sm text-right">Yes</div>
            <div className="text-sm text-gray-600">Email Address</div>
            <div className="text-sm text-right">ABC@gmail.com</div>
          </div>
        </Card>

        <Card className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-y-3">
            <div className="text-sm text-gray-600">Date</div>
            <div className="text-sm text-right">11-12-2024</div>
            <div className="text-sm text-gray-600">First Name</div>
            <div className="text-sm text-right">David</div>
            <div className="text-sm text-gray-600">Last Name</div>
            <div className="text-sm text-right">Oberoi</div>
            <div className="text-sm text-gray-600">Social Security</div>
            <div className="text-sm text-right">Yes</div>
            <div className="text-sm text-gray-600">Other Last Names Used</div>
            <div className="text-sm text-right">N/A</div>
            <div className="text-sm text-gray-600">Disabled</div>
            <div className="text-sm text-right">Yes</div>
            <div className="text-sm text-gray-600">Email Address</div>
            <div className="text-sm text-right">ABC@gmail.com</div>
          </div>
        </Card>

        <Card className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-y-3">
            <div className="text-sm text-gray-600">Home Phone</div>
            <div className="text-sm text-right">xxxxx</div>
            <div className="text-sm text-gray-600">Work Phone</div>
            <div className="text-sm text-right">xxxxx</div>
            <div className="text-sm text-gray-600">Cell Phone</div>
            <div className="text-sm text-right">xxxxx</div>
            <div className="text-sm text-gray-600">Auto Mobile</div>
            <div className="text-sm text-right">xxxxx</div>
            <div className="text-sm text-gray-600">License</div>
            <div className="text-sm text-right">xxxxx</div>
            <div className="text-sm text-gray-600">State</div>
            <div className="text-sm text-right">xxxxx</div>
            <div className="text-sm text-gray-600">
              How did you Hear About us
            </div>
            <div className="text-sm text-right">LinkedIn</div>
          </div>
        </Card>
      </div>

      {/* Employment History */}
      <h3 className="text-lg font-medium mb-4">Employment History</h3>
      <Card className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
          <div className="p-4">
            <h4 className="font-medium mb-4">Current Employer</h4>
            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-y-2">
                <div className="text-sm text-gray-600">Company Name</div>
                <div className="text-sm text-gray-600">Address</div>
                <div className="text-sm text-gray-600">Phone</div>
                <div className="text-sm text-gray-600">Supervisor</div>
                <div className="text-sm text-gray-600">Position</div>
                <div className="text-sm text-gray-600">Dates of Employment</div>
                <div className="text-sm text-gray-600">Monthly Income</div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-medium mb-4">
              Additional or Previous Employer
            </h4>
            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-y-2">
                <div className="text-sm text-gray-600">Company Name</div>
                <div className="text-sm text-gray-600">Address</div>
                <div className="text-sm text-gray-600">Phone</div>
                <div className="text-sm text-gray-600">Supervisor</div>
                <div className="text-sm text-gray-600">Position</div>
                <div className="text-sm text-gray-600">Dates of Employment</div>
                <div className="text-sm text-gray-600">Monthly Income</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Rental History */}
      <h3 className="text-lg font-medium mb-4">Rental History</h3>
      <Card className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
          <div className="p-4">
            <h4 className="font-medium mb-4">Current Residence</h4>
            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-y-2">
                <div className="text-sm text-gray-600">Street</div>
                <div className="text-sm text-gray-600">City, State, Zip</div>
                <div className="text-sm text-gray-600">Landlord/Manager</div>
                <div className="text-sm text-gray-600">Phone Number</div>
                <div className="text-sm text-gray-600">Monthly Payment</div>
                <div className="text-sm text-gray-600">Dates</div>
                <div className="text-sm text-gray-600">Reason of Leaving</div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-medium mb-4">Previous Residence</h4>
            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-y-2">
                <div className="text-sm text-gray-600">Street</div>
                <div className="text-sm text-gray-600">City, State, Zip</div>
                <div className="text-sm text-gray-600">Landlord/Manager</div>
                <div className="text-sm text-gray-600">Phone Number</div>
                <div className="text-sm text-gray-600">Monthly Payment</div>
                <div className="text-sm text-gray-600">Dates</div>
                <div className="text-sm text-gray-600">Reason of Leaving</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Rental History Questions */}
      <Card className="mb-8 p-4">
        <div className="space-y-4">
          <div className="grid grid-cols-[1fr,auto] gap-4 items-center">
            <div className="text-sm text-gray-600">
              Have you declared bankruptcy in the past seven (7) years?
            </div>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm">No</span>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-[1fr,auto] gap-4 items-center">
            <div className="text-sm text-gray-600">
              Have you ever been convicted of a felony?
            </div>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm">No</span>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-[1fr,auto] gap-4 items-center">
            <div className="text-sm text-gray-600">
              Have you ever been evicted from a rental residence?
            </div>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm">No</span>
              </label>
            </div>
          </div>
        </div>
      </Card>

      {/* Emergency Contacts */}
      <h3 className="text-lg font-medium mb-4">Emergency Contacts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="p-4">
          <h4 className="font-medium mb-4">Emergency Contact 1</h4>
          <div className="grid grid-cols-2 gap-y-3">
            <div className="text-sm text-gray-600">First Name</div>
            <div className="text-sm text-right">11-12-2024</div>
            <div className="text-sm text-gray-600">Last Name</div>
            <div className="text-sm text-right">David</div>
            <div className="text-sm text-gray-600">M.I</div>
            <div className="text-sm text-right">Oberoi</div>
            <div className="text-sm text-gray-600">Home Phone</div>
            <div className="text-sm text-right">Yes</div>
            <div className="text-sm text-gray-600">Work phone</div>
            <div className="text-sm text-right">N/A</div>
            <div className="text-sm text-gray-600">Cell Phone</div>
            <div className="text-sm text-right">Yes</div>
          </div>
        </Card>

        <Card className="p-4">
          <h4 className="font-medium mb-4">Emergency Contact 2</h4>
          <div className="grid grid-cols-2 gap-y-3">
            <div className="text-sm text-gray-600">First Name</div>
            <div className="text-sm text-right">11-12-2024</div>
            <div className="text-sm text-gray-600">Last Name</div>
            <div className="text-sm text-right">David</div>
            <div className="text-sm text-gray-600">M.I</div>
            <div className="text-sm text-right">Oberoi</div>
            <div className="text-sm text-gray-600">Home Phone</div>
            <div className="text-sm text-right">Yes</div>
            <div className="text-sm text-gray-600">Work phone</div>
            <div className="text-sm text-right">N/A</div>
            <div className="text-sm text-gray-600">Cell Phone</div>
            <div className="text-sm text-right">Yes</div>
          </div>
        </Card>
      </div>

      {/* Authorization */}
      <Card className="p-4">
        <h3 className="text-lg font-medium mb-4">
          Authorization for Release of Information
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          I understand that this document is but the first step on the winding
          path toward securing an apartment, yet it is no lease or rental
          agreement, neither in part nor in full. I recognize that every detail
          provided will be examined and credit reports will be summoned from the
          shadows of Financial Privacy. I pledge that each word inscribed here
          is honest and true.
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-sm text-gray-600">Signature</div>
            <div className="text-sm text-gray-600">Date</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
