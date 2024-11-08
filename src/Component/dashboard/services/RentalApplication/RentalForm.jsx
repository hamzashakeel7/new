import { Input } from "../../../../shadcn/components/ui/Input"
import { Label } from "../../../../shadcn/components/ui/Label";
import { Checkbox } from "../../../../shadcn/components/ui/Checkbox";
import { Button } from "../../../../shadcn/components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../shadcn/components/ui/Card";
import { useState } from "react";
import axios from "axios";

export function RentalApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    city: "",
    referralSource: "",
    state: "",
    zip: "",
    disabledYes: false,
    disabledNo: false,
    bankruptcyYes: false,
    bankruptcyNo: false,
    felonyYes: false,
    felonyNo: false,
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace the API endpoint here
      const response = await axios.post("/api-endpoint", formData);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Rental Application</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="firstName">First</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ssn">Social Security</Label>
                <Input
                  id="ssn"
                  name="ssn"
                  value={formData.ssn}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="otherNames">Other Last Names Used</Label>
                <Input
                  id="otherNames"
                  name="otherNames"
                  value={formData.otherNames}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label>Disabled</Label>
                {/* checkbox's */}
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="disabledYes"
                      name="disabledYes"
                      checked={formData.disabledYes}
                      onChange={handleChange}
                    />
                    <Label htmlFor="disabledYes">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="disabledNo"
                      name="disabledNo"
                      checked={formData.disabledNo}
                      onChange={handleChange}
                    />
                    <Label htmlFor="disabledNo">No</Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="homePhone">Home Phone</Label>
                <Input
                  id="homePhone"
                  type="tel"
                  name="homePhone"
                  value={formData.homePhone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workPhone">Work Phone</Label>
                <Input
                  id="workPhone"
                  type="tel"
                  name="workPhone"
                  value={formData.workPhone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cellPhone">Cell Phone</Label>
                <Input
                  id="cellPhone"
                  type="tel"
                  name="cellPhone"
                  value={formData.cellPhone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="autoMobile">Auto Mobile</Label>
                <Input
                  id="autoMobile"
                  name="autoMobile"
                  value={formData.autoMobile}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="license">License</Label>
                <Input
                  id="license"
                  name="license"
                  value={formData.license}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hearAboutUs">How did you Hear About us</Label>
                <Input
                  id="hearAboutUs"
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Employment History */}
            <div>
              <h3 className="mb-7 text-xl font-semibold">Employment History</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Current Employer */}
                <div className="space-y-4">
                  <h4 className="font-medium">Current Employer</h4>
                  <div className="space-y-2">
                    <Label htmlFor="currentCompany">Company Name</Label>
                    <Input
                      id="currentCompany"
                      name="currentCompany"
                      value={formData.currentCompany}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentAddress">Address</Label>
                    <Input
                      id="currentAddress"
                      name="currentAddress"
                      value={formData.currentAddress}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentPhone">Phone</Label>
                    <Input
                      id="currentPhone"
                      type="tel"
                      name="currentPhone"
                      value={formData.currentPhone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentSupervisor">Supervisor</Label>
                    <Input
                      id="currentSupervisor"
                      name="currentSupervisor"
                      value={formData.currentSupervisor}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentPosition">Position</Label>
                    <Input
                      id="currentPosition"
                      name="currentPosition"
                      value={formData.currentPosition}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentDates">Dates of Employment</Label>
                    <Input
                      id="currentDates"
                      name="currentDates"
                      value={formData.currentDates}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentIncome">Monthly Income</Label>
                    <Input
                      id="currentIncome"
                      type="number"
                      name="currentIncome"
                      value={formData.currentIncome}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Previous Employer */}
                <div className="space-y-4">
                  <h4 className="font-medium">
                    Additional or Previous Employer
                  </h4>
                  <div className="space-y-2">
                    <Label htmlFor="previousCompany">Company Name</Label>
                    <Input
                      id="previousCompany"
                      name="previousCompany"
                      value={formData.previousCompany}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousAddress">Address</Label>
                    <Input
                      id="previousAddress"
                      name="previousAddress"
                      value={formData.previousAddress}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousPhone">Phone</Label>
                    <Input
                      id="previousPhone"
                      type="tel"
                      name="previousPhone"
                      value={formData.previousPhone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousSupervisor">Supervisor</Label>
                    <Input
                      id="previousSupervisor"
                      name="previousSupervisor"
                      value={formData.previousSupervisor}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousPosition">Position</Label>
                    <Input
                      id="previousPosition"
                      name="previousPosition"
                      value={formData.previousPosition}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousDates">Dates of Employment</Label>
                    <Input
                      id="previousDates"
                      name="previousDates"
                      value={formData.previousDates}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousIncome">Monthly Income</Label>
                    <Input
                      id="previousIncome"
                      type="number"
                      name="previousIncome"
                      value={formData.previousIncome}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Rental History */}
            <div>
              <h3 className="mb-7 text-xl font-semibold">Rental History</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Current Residence */}
                <div className="space-y-4">
                  <h4 className="font-medium">Current Residence</h4>
                  <div className="space-y-2">
                    <Label htmlFor="currentStreet">Street</Label>
                    <Input
                      id="currentStreet"
                      name="currentStreet"
                      value={formData.currentStreet}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentCityStateZip">
                      City, State, Zip
                    </Label>
                    <Input
                      id="currentCityStateZip"
                      name="currentCityStateZip"
                      value={formData.currentCityStateZip}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentLandlord">Landlord/Manager</Label>
                    <Input
                      id="currentLandlord"
                      name="currentLandlord"
                      value={formData.currentLandlord}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentRentalPhone">Phone Number</Label>
                    <Input
                      id="currentRentalPhone"
                      type="tel"
                      name="currentRentalPhone"
                      value={formData.currentRentalPhone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentPayment">Monthly Payment</Label>
                    <Input
                      id="currentPayment"
                      type="number"
                      name="currentPayment"
                      value={formData.currentPayment}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentRentalDates">Dates</Label>
                    <Input
                      id="currentRentalDates"
                      name="currentRentalDates"
                      value={formData.currentRentalDates}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentLeaving">Reason for Leaving</Label>
                    <Input
                      id="currentLeaving"
                      name="currentLeaving"
                      value={formData.currentLeaving}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Previous Residence */}
                <div className="space-y-4">
                  <h4 className="font-medium">Previous Residence</h4>
                  <div className="space-y-2">
                    <Label htmlFor="previousStreet">Street</Label>
                    <Input
                      id="previousStreet"
                      name="previousStreet"
                      value={formData.previousStreet}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousCityStateZip">
                      City, State, Zip
                    </Label>
                    <Input
                      id="previousCityStateZip"
                      name="previousCityStateZip"
                      value={formData.previousCityStateZip}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousLandlord">Landlord/Manager</Label>
                    <Input
                      id="previousLandlord"
                      name="previousLandlord"
                      value={formData.previousLandlord}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousRentalPhone">Phone Number</Label>
                    <Input
                      id="previousRentalPhone"
                      type="tel"
                      name="previousRentalPhone"
                      value={formData.previousRentalPhone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousPayment">Monthly Payment</Label>
                    <Input
                      id="previousPayment"
                      type="number"
                      name="previousPayment"
                      value={formData.previousPayment}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousRentalDates">Dates</Label>
                    <Input
                      id="previousRentalDates"
                      name="previousRentalDates"
                      value={formData.previousRentalDates}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousLeaving">Reason for Leaving</Label>
                    <Input
                      id="previousLeaving"
                      name="previousLeaving"
                      value={formData.previousLeaving}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Questions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <Label htmlFor="bankruptcy">
                  Have you declared bankruptcy in the past seven (7) years?
                </Label>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="bankruptcyYes"
                      name="bankruptcyYes"
                      value={formData.bankruptcyYes}
                      onChange={handleChange}
                    />
                    <Label htmlFor="bankruptcyYes">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="bankruptcyNo"
                      name="bankruptcyNo"
                      value={formData.bankruptcyNo}
                      onChange={handleChange}
                    />
                    <Label htmlFor="bankruptcyNo">No</Label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <Label htmlFor="felony">
                  Have you ever been convicted of a felony?
                </Label>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="felonyYes"
                      name="felonyYes"
                      value={formData.felonyYes}
                      onChange={handleChange}
                    />
                    <Label htmlFor="felonyYes">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="felonyNo"
                      name="felonyNo"
                      value={formData.felonyNo}
                      onChange={handleChange}
                    />
                    <Label htmlFor="felonyNo">No</Label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <Label htmlFor="evicted">
                  Have you ever been evicted from a rental residence?
                </Label>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="evictedYes"
                      name="evictedYes"
                      value={formData.evictedYes}
                      onChange={handleChange}
                    />
                    <Label htmlFor="evictedYes">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="evictedNo"
                      name="evictedNo"
                      value={formData.evictedNo}
                      onChange={handleChange}
                    />
                    <Label htmlFor="evictedNo">No</Label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <Label htmlFor="latePayments">
                  Have you had two or more late rental payments in the past
                  year?
                </Label>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="latePaymentsYes"
                      name="latePaymentsYes"
                      value={formData.latePaymentsYes}
                      onChange={handleChange}
                    />
                    <Label htmlFor="latePaymentsYes">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="latePaymentsNo"
                      name="latePaymentsNo"
                      value={formData.latePaymentsNo}
                      onChange={handleChange}
                    />
                    <Label htmlFor="latePaymentsNo">No</Label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <Label htmlFor="refusedRent">
                  Have you ever willfully or intentionally refused to pay rent?
                </Label>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="refusedRentYes"
                      name="refusedRentYes"
                      value={formData.refusedRentYes}
                      onChange={handleChange}
                    />
                    <Label htmlFor="refusedRentYes">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="refusedRentNo"
                      name="refusedRentNo"
                      value={formData.refusedRentNo}
                      onChange={handleChange}
                    />
                    <Label htmlFor="refusedRentNo">No</Label>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Emergency Contact 1
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <div className="space-y-2">
                  <Label htmlFor="ec1FirstName">First Name</Label>
                  <Input
                    id="ec1FirstName"
                    name="ec1FirstName"
                    value={formData.ec1FirstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ec1LastName">Last Name</Label>
                  <Input
                    id="ec1LastName"
                    name="ec1LastName"
                    value={formData.ec1LastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ec1MI">M.I</Label>
                  <Input
                    id="ec1MI"
                    name="ec1MI"
                    value={formData.ec1MI}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ec1HomePhone">Home Phone</Label>
                  <Input
                    id="ec1HomePhone"
                    type="tel"
                    name="ec1HomePhone"
                    value={formData.ec1HomePhone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ec1WorkPhone">Work Phone</Label>
                  <Input
                    id="ec1WorkPhone"
                    type="tel"
                    name="ec1WorkPhone"
                    value={formData.ec1WorkPhone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ec1CellPhone">Cell Phone</Label>
                  <Input
                    id="ec1CellPhone"
                    type="tel"
                    name="ec1CellPhone"
                    value={formData.ec1CellPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Emergency Contact 2
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <div className="space-y-2">
                  <Label htmlFor="ec2FirstName">First Name</Label>
                  <Input
                    id="ec2FirstName"
                    name="ec2FirstName"
                    value={formData.ec2FirstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ec2LastName">Last Name</Label>
                  <Input
                    id="ec2LastName"
                    name="ec2LastName"
                    value={formData.ec2LastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ec2MI">M.I</Label>
                  <Input
                    id="ec2MI"
                    name="ec2MI"
                    value={formData.ec2MI}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ec2HomePhone">Home Phone</Label>
                  <Input
                    id="ec2HomePhone"
                    type="tel"
                    name="ec2HomePhone"
                    value={formData.ec2HomePhone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ec2WorkPhone">Work Phone</Label>
                  <Input
                    id="ec2WorkPhone"
                    type="tel"
                    name="ec2WorkPhone"
                    value={formData.ec2WorkPhone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ec2CellPhone">Cell Phone</Label>
                  <Input
                    id="ec2CellPhone"
                    type="tel"
                    name="ec2CellPhone"
                    value={formData.ec2CellPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Authorization */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                AUTHORIZATION FOR RELEASE OF INFORMATION
              </h3>
              <div className="space-y-4 rounded-lg border p-4 text-sm">
                <p>
                  I understand that this document is but the first step on the
                  winding path toward securing an apartment, yet it is no lease
                  or rental agreement, neither in part nor in full. I recognize
                  that every detail provided will be examined and credit reports
                  will be summoned from the shadows of financial history. I
                  pledge that each word inscribed here is honest and true.
                </p>
                <p>
                  By signing below, I open the door to an investigation—credit,
                  bank records, bank balances, and employment threads—all woven
                  together for the purpose of renting a space from New Leaf
                  Apartments. I grant permission for my past, both financial and
                  personal, to be brought into light, with any names I&apos;ve
                  listed being reached out to. I accept that any misstep or
                  absence of detail may cause this journey to end before it
                  begins.
                </p>
                <p>
                  I also acknowledge the non-refundable application fee, a cost
                  tethered to the process of reviewing my submission. Even if I
                  do not find my home here, I release claim to any return of
                  these funds. If questions arise from a rejected application, I
                  know they must be posed in written form, accompanied by a
                  stamped envelope ready to carry the answer back. Each adult,
                  18 years or older, must navigate their own application. The
                  cost is $50, with an additional $20 for every extra adult. The
                  final sum—application fee, security deposit, first
                  month&apos;s rent—must be carried in certified check or money
                  order, especially if paid within 15 days of the move-in date.
                </p>
                <div className="grid gap-4 pt-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="signature">Signature</Label>
                    <Input
                      id="signature"
                      name="signature"
                      value={formData.signature}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signatureDate">Date</Label>
                    <Input
                      id="signatureDate"
                      type="date"
                      name="signatureDate"
                      value={formData.signatureDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <Button
                type="submit"
                disabled={loading}
                className="w-1/2 bg-[#7E22CE] hover:bg-purple-600"
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
