import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../shadcn/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcn/components/ui/Select";
import { Button } from "../shadcn/components/ui/Button";
import { Input } from "../shadcn/components/ui/Input";
import axios from "axios";
import register from "../assets/register.png";
import logo from "../assets/image.png";

export default function Register() {
  const [activeTab, setActiveTab] = useState("register");
  const [fullName, setFullName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const api = process.env.REACT_APP_API_URL;

  // Keeping all validation functions unchanged
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validateFullName = (name) => {
    if (name.length < 3) {
      setFullNameError("Full name must be at least 3 characters.");
      return false;
    }
    setFullNameError("");
    return true;
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneNumberError("Please enter a valid 10-digit phone number.");
      return false;
    }
    setPhoneNumberError("");
    return true;
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and include both letters and numbers."
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   

    if (
      validateEmail(email) &&
      validateFullName(fullName) &&
      validatePhoneNumber(phonenumber) &&
      validatePassword(password)
    ) {
      try {
        const response = await axios.post(`${api}/api/v1/auth/register`, {
          name: fullName,
          email,
          password,
          phonenumber,
          role,
        });
        toast.success(
          "Registration successful! Please check your email for OTP."
        );
        navigate("/otp", { state: { email, phonenumber } });
      } catch (error) {
        console.error("Registration failed:", error);
        toast.error(error.response?.data?.message || "Registration failed.");
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-5xl bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        {/* Left side - Image */}
        <div className="lg:w-1/2 relative h-64 lg:h-auto rounded-[2rem] overflow-hidden">
          <img
            src={register}
            alt="Healthcare professional at work"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-8 left-0 right-0 text-center text-white p-6">
            <h2 className="text-3xl font-bold mb-2">
              Your Health, Our Priority
            </h2>
            <p className="text-xl">Caring for You, Every Step</p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="lg:w-1/2 p-8 lg:p-12 relative">
          <div className="absolute top-10 md:right-8 right-2">
            <img src={logo} alt="SilverTLC Logo" className="w-20 h-14" />
          </div>

          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">
              Welcome to SilverTLC
            </h1>

            {/* Login/Register Toggle with smooth transition */}
            <div className="w-full max-w-xs mx-auto mb-4 relative bg-gray-100 rounded-full p-1">
              <div
                className="absolute inset-y-1 w-1/2 bg-purple-600 rounded-full transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(${
                    activeTab === "register" ? "100%" : "0%"
                  })`,
                }}
              />
              <div className="relative z-10 flex">
                <button
                  className={cn(
                    "w-1/2 py-2 text-center rounded-full transition-colors duration-300",
                    activeTab === "login" ? "text-white" : "text-gray-700"
                  )}
                  onClick={() => {
                    setActiveTab("login");
                    navigate("/Login");
                  }}
                >
                  Login
                </button>
                <button
                  className={cn(
                    "w-1/2 py-2 text-center rounded-full transition-colors duration-300",
                    activeTab === "register" ? "text-white" : "text-gray-700"
                  )}
                  onClick={() => setActiveTab("register")}
                >
                  Register
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  User Role
                </label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="w-full rounded-full">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Individual">Individual</SelectItem>
                    <SelectItem value="Property Owner">
                      Property Owner
                    </SelectItem>
                    <SelectItem value="Hospital System/Managed Care Organizations">
                      Hospital System/Managed Care Organizations
                    </SelectItem>
                    <SelectItem value="Real Estate Professionals">
                      Real Estate Professionals
                    </SelectItem>
                    <SelectItem value="Service Provider">
                      Service Provider
                    </SelectItem>
                    <SelectItem value="Non Profits">Non Profits</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  className="rounded-full"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onBlur={() => validateFullName(fullName)}
                />
                {fullNameError && (
                  <p className="text-sm text-red-500">{fullNameError}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="rounded-full"
                  value={phonenumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onBlur={() => validatePhoneNumber(phonenumber)}
                />
                {phoneNumberError && (
                  <p className="text-sm text-red-500">{phoneNumberError}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => validateEmail(email)}
                />
                {emailError && (
                  <p className="text-sm text-red-500">{emailError}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    className="rounded-full pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => validatePassword(password)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {passwordError && (
                  <p className="text-sm text-red-500">{passwordError}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-purple-600 hover:bg-purple-700"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
