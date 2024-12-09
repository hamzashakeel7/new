import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "../../shadcn/components/ui/Button";
import { Input } from "../../shadcn/components/ui/Input";
import { Label } from "../../shadcn/components/ui/Label";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../shadcn/components/ui/Select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../shadcn/components/ui/Popover";
import { Calendar as CalendarComponent } from "../../shadcn/components/ui/Calendar";
import { format } from "date-fns";
import { WelcomeAnimation } from "./Welcome";

export function ThirdStep() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    education: "",
    countryOfBirth: "",
    birthDate: null | null,
  });
  const [errorMessage, setErrorMessage] = React.useState("");
  const [showWelcome, setShowWelcome] = React.useState(false);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleNext = () => {
    const { education, countryOfBirth, birthDate } = formData;
    if (!education || !countryOfBirth || !birthDate) {
      setErrorMessage("Please fill out all fields before proceeding.");
      return;
    }

    // Save data to localStorage
    localStorage.setItem("education", education);
    localStorage.setItem("countryOfBirth", countryOfBirth);
    localStorage.setItem("birthDate", birthDate.toISOString());

    // Show welcome animation
    setShowWelcome(true);
  };

  const handleSkip = () => {
    setShowWelcome(true);
  };

  if (showWelcome) {
    return <WelcomeAnimation />;
  }

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
            Last Step !!
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
            <Label htmlFor="education">Education</Label>
            <Input
              id="education"
              placeholder="Enter your highest education level"
              value={formData.education}
              onChange={(e) => handleChange("education", e.target.value)}
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Label htmlFor="countryOfBirth">Country of Birth</Label>
            <Select
              onValueChange={(value) => handleChange("countryOfBirth", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your country of birth" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                {/* Add more countries as needed */}
              </SelectContent>
            </Select>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Label htmlFor="birthDate">Birth Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal ${
                    !formData.birthDate && "text-muted-foreground"
                  }`}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {formData.birthDate ? (
                    format(formData.birthDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <CalendarComponent
                  mode="single"
                  selected={formData.birthDate}
                  onSelect={(date) => handleChange("birthDate", date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
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
