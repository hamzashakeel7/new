import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../../shadcn/components/ui/Button";
import { Input } from "../../shadcn/components/ui/Input";
import { Label } from "../../shadcn/components/ui/Label";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export function SecondStep() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    mobileNumber: "",
    address: "",
    city: "",
  });
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleNext = () => {
    const { mobileNumber, address, city } = formData;
    if (!mobileNumber || !address || !city) {
      setErrorMessage("Please fill out all fields before proceeding.");
      return;
    }

    // data Saved to localStorage
    localStorage.setItem("mobileNumber", mobileNumber);
    localStorage.setItem("address", address);
    localStorage.setItem("city", city);

    // Navigate to the next step
    navigate("/signup/thirdStep");
  };

  const handleSkip = () => {
    navigate("/signup/thirdStep");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full">
      {/* Left Section */}
      <motion.div
        className="bg-purple-600 text-white lg:px-[10rem] md:px-[5rem] p-10 flex flex-col justify-center md:w-1/2"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <motion.div
            className="flex items-center mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img src={logo} alt="logo" />
            <span className="text-2xl font-bold">Silver TLC</span>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Hello there!
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            We're excited to have you on board. Let's get started by collecting
            some basic information.
          </motion.p>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="bg-white lg:px-[10rem] md:px-[5rem] p-10 flex flex-col justify-center"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form
          className="space-y-6 max-w-3xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-[25rem]"
          >
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Input
              id="mobileNumber"
              placeholder="Enter your Mobile Number"
              type="tel"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="Enter your Address"
              value={formData.address}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              type="text"
              placeholder="Enter your City"
              value={formData.city}
              onChange={handleChange}
            />
          </motion.div>

          {errorMessage && (
            <motion.p
              className="text-red-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {errorMessage}
            </motion.p>
          )}

          <motion.div
            className="flex justify-between pt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button variant="outline" onClick={handleSkip}>
              Skip
            </Button>
            <Button
              className="bg-purple-600 hover:bg-purple-700"
              onClick={handleNext}
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
