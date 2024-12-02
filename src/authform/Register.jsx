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
  const [passwordVisible, setPasswordVisible] = useState(false); // New state for password visibility
  const [activeTab, setActiveTab] = useState("register");
  const navigate = useNavigate();
  const api=process.env.REACT_APP_API_URL




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
  
    if (!role) {
      toast.error("Please select a role.");
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
          `${api}/api/v1/auth/register`,
          {
            name: fullName,
            email,
            password,
            phonenumber,
            role,
          }
        );
        toast.success(
          "Registration successful! Please check your email for OTP."
        );
        // Navigate to OTP page
        navigate("/otp", { state: { email, phonenumber } });
      } catch (error) {
        console.error("Registration failed:", error);
        toast.error(error.response?.data?.message || "Registration failed.");
      }
    }
  };
  

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-10 lg:px-10 bg-gray-100 pl-8 lg:pl-16 overflow-auto w-full">
      <ToastContainer />

      <div className="flex shadow-lg rounded-xl bg-white w-full lg:w-[60rem] h-auto lg:h-[77vh] overflow-hidden relative flex-col lg:flex-row">
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

        <div className="w-full lg:w-1/2 p-8 lg:p-10 mt-5 lg:mt-0 overflow-auto">
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
                  <option value="Individual">Individual</option>
                <option value="Property Owner">Property Owner</option>
                
                <option value="Hospital System/Managed Care Organizations">
                  Hospital System/Managed Care Organizations
                </option>
                <option value="Real Estate Professionals">
                  Real Estate Professionals
                </option>
                <option value="Service Provider">Service Provider</option>
                <option value="Non Profits">Non Profits</option>
               
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

            <div className="mb-4 relative">
              <label className="block mb-1 text-gray-600">Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-3 py-2 rounded-full border border-gray-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => validatePassword(password)}
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute mt-6 inset-y-0 right-3 flex items-center text-gray-500"
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-full mt-4 hover:bg-purple-700 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
