import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginimage from "../assets/register.png";
import logo from "../assets/image.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [fullName, setFullName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [activeTab, setActiveTab] = useState("register"); // Active tab state
  const navigate = useNavigate();

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email.");
      return false;
    }
    setEmailError("");
    return true;
  };

  // Full Name validation
  const validateFullName = (name) => {
    if (name.length < 3) {
      setFullNameError("Full name must be at least 3 characters.");
      return false;
    }
    setFullNameError("");
    return true;
  };

  // Phone Number validation
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneNumberError("Please enter a valid 10-digit phone number.");
      return false;
    }
    setPhoneNumberError("");
    return true;
  };

  // Password validation
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 characters, one letter, one number
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and include both letters and numbers."
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty or invalid
    if (!fullName || !phonenumber || !email || !password || !role) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    if (
      validateEmail(email) &&
      validateFullName(fullName) &&
      validatePhoneNumber(phonenumber) &&
      validatePassword(password)
    ) {
      try {
        const response = await axios.post(
          "https://silvertlcbackend.vercel.app/api/v1/auth/register",
          {
            name: fullName,
            email,
            password,
            phonenumber,
            role,
          }
        );
        console.log(response.data);
        toast.success(
          "Registration successful! Please check your email for OTP."
        );
        navigate("/Dashboard", { state: { phonenumber } }); // Redirect to OTP page
      } catch (error) {
        console.error(
          "Registration failed:",
          error.response?.data || error.message
        );
        toast.error("Registration failed! Please try again.");
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-10 lg:px-10 bg-gray-100 pl-8 lg:pl-16 overflow-auto w-full">
      <ToastContainer />

      {/* Main Container with Logo positioned on the right */}
      <div className="flex shadow-lg rounded-xl bg-white w-full lg:w-[60rem] h-auto lg:h-[77vh] overflow-hidden relative flex-col lg:flex-row">
        {/* Left Image */}
        <div className=" w-[30rem] relative">
          <img
            src={loginimage}
            alt="login"
            className="md:h-[44rem] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute bottom-5 md:left-1/2 left-[12rem] transform -translate-x-1/2 text-white p-2.5 rounded-lg text-center">
            <h2 className="text-2xl font-bold m-0 whitespace-nowrap text-center">
              Your Health, Our Priority
            </h2>
            <p className="text-lg m-0 whitespace-nowrap">
              Caring for You, Every Step
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-10 mt-5 lg:mt-0 overflow-auto">
          {/* Logo and Title in a Flex container with the logo on the right */}
          <div className="flex justify-center gap-6 items-center mb-5">
            <h2 className="text-gray-800 text-xl lg:text-2xl font-bold ml-4">
              Welcome to SilverTLC
            </h2>
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-auto sm:w-16 md:w-20 lg:w-14"
            />
          </div>

          <div className="flex justify-center gap-4 mb-6 w-full">
            <button
              onClick={() => {
                setActiveTab("login");
                navigate("/Login");
              }}
              className={`px-6 py-2 rounded-full font-semibold text-lg ${
                activeTab === "login"
                  ? "bg-purple-600 text-white"
                  : "bg-transparent text-black border-2 border-black"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`px-6 py-2 rounded-full font-semibold text-lg ${
                activeTab === "register"
                  ? "bg-purple-600 text-white"
                  : "bg-transparent text-black border-2 border-black"
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">User Role</label>
              <select
                className="w-full px-3 py-2 rounded-full border border-gray-300 bg-gray-100"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option>Select Role</option>
                <option>Corporate User</option>
                <option>Individual</option>
                <option>Service Provider</option>
                <option>Insurance Company</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 rounded-full border border-gray-300"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onBlur={() => validateFullName(fullName)}
              />
              {fullNameError && (
                <p className="text-red-500 text-sm">{fullNameError}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 rounded-full border border-gray-300"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onBlur={() => validatePhoneNumber(phonenumber)}
              />
              {phoneNumberError && (
                <p className="text-red-500 text-sm">{phoneNumberError}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-full border border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => validateEmail(email)}
              />
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 rounded-full border border-gray-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => validatePassword(password)}
              />
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="w-32 px-4 py-2 rounded-full bg-purple-600 text-white font-bold text-lg"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
