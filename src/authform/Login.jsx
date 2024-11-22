import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginimage from "../assets/login.png";
import logo from "../assets/image.png";
import axios from "axios";

function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

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
    if (!email || !password || !role) {
      toast.error("Please fill in all fields.");
      return false;
    }
    if (!validateEmail(email)) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://silvertlcbackend.vercel.app/api/v1/auth/login",
          {
            email,
            password,
            role,
          }
        );

        const token = response.data.token;
        const userRole = response.data.user.role;  // Assuming the role is part of the response

        console.log(token);
        console.log(response.data);

        toast.success("Login successful!");

        // Store token and role in localStorage (optional, depending on your auth flow)
        localStorage.setItem("token", token);
        localStorage.setItem("role", userRole);

        // Navigate based on the user's role
        if (userRole === "Individual") {
          navigate("Dashboard");
        } else if (userRole === "Property Owner") {
          navigate("/property-owner/dashboard");
        } else if (userRole === "Insurance Company") {
          navigate("/insurance/dashboard");
        } else if (userRole === "Hospital System/Managed Care Organizations") {
          navigate("/hospital/dashboard");
        } else if (userRole === "Real Estate Professionals") {
          navigate("/real-estate/dashboard");
        } else if (userRole === "Non Profits") {
          navigate("/non-profits/dashboard");
        } else {
          // Default dashboard or a fallback
          navigate("/guest/dashboard");
        }
      } catch (error) {
        console.error("login failed:", error.response?.data || error.message);
        toast.error(
          "Login failed! Please check your credentials and try again."
        );
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4 lg:p-8">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex flex-col lg:flex-row lg:h-[77vh] overflow-hidden">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        {/* Left Section - Image with Overlay Text */}
        <div className="w-full lg:w-2/5 relative">
          <img
            src={loginimage}
            alt="login"
            className="w-96 h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white p-2.5 rounded-lg text-center">
            <h2 className="text-2xl font-bold m-0 whitespace-nowrap">
              Your Health, Our Priority
            </h2>
            <p className="text-lg m-0 whitespace-nowrap">
              Caring for You, Every Step
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 px-6 py-8 lg:py-12 flex flex-col items-center justify-center relative">
          <div className="absolute top-6 right-4 md:top-4 md:right-0 z-10">
            <img src={logo} alt="Logo" className="w-12 lg:w-16 h-auto" />
          </div>

          <h2 className="text-gray-800 pt-4 text-center text-xl lg:text-2xl font-bold mb-6">
            Welcome to SilverTLC
          </h2>

          <div className="flex justify-center gap-4 mb-4 w-full">
            <button
              onClick={() => setActiveTab("login")}
              className={`px-6 py-2 rounded-full font-semibold text-lg ${
                activeTab === "login"
                  ? "bg-purple-600 text-white"
                  : "bg-transparent text-black border-2 border-black"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setActiveTab("register");
                navigate("/Register");
              }}
              className={`px-6 py-2 rounded-full font-semibold text-lg ${
                activeTab === "register"
                  ? "bg-purple-600 text-white"
                  : "bg-transparent text-black border-2 border-black"
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
            <div>
              <label className="block mb-1 text-gray-600">User Role</label>
              <select
                className="w-full px-4 py-2 rounded-full border border-gray-300 bg-white"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option>Individual</option>
                <option>Property Owner</option>
                <option>Insurance Company</option>
                <option>Hospital System/Managed Care Organizations</option>
                <option>Real Estate Professionals</option>
                <option>Non Profits</option>
              </select>
            </div>

            <div>
              <label className="block  text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full border border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => validateEmail(email)}
              />
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-full border border-gray-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a
                href="/Forgotpassword"
                className="text-purple-600 no-underline text-sm"
              >
                Forgot Password?
              </a>
            </div>

            <div className="flex justify-end pb-6">
              <button
                type="submit"
                className="w-32 px-4 py-2 rounded-full bg-purple-600 text-white font-bold text-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
