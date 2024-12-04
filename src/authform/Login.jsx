import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../shadcn/lib/utils";
import { Button } from "../shadcn/components/ui/Button";
import { Input } from "../shadcn/components/ui/Input";
import { Checkbox } from "../shadcn/components/ui/Checkbox";
import axios from "axios";
import login from "../assets/login.png";
import logo from "../assets/image.png";

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const api = process.env.REACT_APP_API_URL;

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validateForm = () => {
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return false;
    }
    return validateEmail(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(`${api}/api/v1/auth/login`, {
          email,
          password,
        });

        const token = response.data.token;

        toast.success("Login successful!");
        localStorage.setItem("token", token);

        navigate("/dashboard");
      } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        toast.error(
          "Login failed! Please check your credentials and try again."
        );
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-5xl bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        {/* Left side - Image */}
        <div className="lg:w-2/3 relative h-64 lg:h-auto rounded-[2rem] overflow-hidden">
          <img
            src={login}
            alt="Healthcare professionals caring for elderly"
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
          <div className="absolute top-8 right-5">
            <img src={logo} alt="SilverTLC Logo" className="w-20 h-14" />
          </div>

          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">
              Welcome to SilverTLC
            </h1>

            <div className="w-full max-w-xs mx-auto mb-8 relative bg-gray-100 rounded-full p-1">
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
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </button>
                <button
                  className={cn(
                    "w-1/2 py-2 text-center rounded-full transition-colors duration-300",
                    activeTab === "register" ? "text-white" : "text-gray-700"
                  )}
                  onClick={() => {
                    setActiveTab("register");
                    navigate("/Register");
                  }}
                >
                  Register
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  <p className="text-sm text-red-500 mt-1">{emailError}</p>
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
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <Button
                  variant="link"
                  className="text-purple-600 hover:text-purple-700"
                  onClick={() => navigate("/Forgotpassword")}
                >
                  Forgot Password?
                </Button>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-32 rounded-full bg-purple-600 hover:bg-purple-700 float-right"
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
