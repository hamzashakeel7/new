import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginimage from "../assets/login.png";
import logo from "../assets/image.png";
import axios from "axios";
import { ConstructionIcon } from "lucide-react";

function Otp() {
  const [otp, setOtp] = useState(new Array(6).fill("")); // 6 empty OTP fields
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const api = process.env.REACT_APP_API_URL;

  // Get The Type
  const location = useLocation(); // useLocation hook se state access karein
  const { type } = location.state || {}; // state ko destructure karein

  // Initialize Toastify
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  // Trigger OTP sending on component load if type is 'register'
  // useEffect(() => {
  //   const sendOtp = async () => {
  //     try {
  //       const email = localStorage.getItem("userEmail"); // Retrieve email from localStorage
  //       if (!email) {
  //         notifyError("Email not found. Please register again.");
  //         navigate("/register");
  //         return;
  //       }

  //       const response = await axios.post(`${api}/api/v1/auth/send-otp`, {
  //         email,
  //       });

  //       if (response.status === 200) {
  //         notifySuccess("OTP sent successfully to your email.");
  //       }
  //     } catch (error) {
  //       notifyError(
  //         error.response?.data?.message ||
  //           "Failed to send OTP. Please try again."
  //       );
  //     }
  //   };

  //   if (type === "register") sendOtp();
  // }, [type, api, navigate]);

  useEffect(() => {
    if(type === "register"){
      toast.success(
        "OTP sent successfully to your email."
      );
    }
    const sendOtp = async () => {
      try {
        toast.error(
          "Login failed! First Verify Your Account"
        );
        const token = localStorage.getItem("authToken"); // Retrieve email from localStorage
        if (!token) {
          notifyError("Account not found. Please register again.");
          navigate("/register");
          return;
        }
        const response = await axios.post(`${api}/api/v1/auth/otpcheck/account-verified/resend`, {
          token,
        });

        if (response.status === 200) {
          notifySuccess("OTP sent successfully to your email.");
        }
      } catch (error) {
        if(error.status === 401){
          toast.error(
            "Invalid or Expire Token"
          );
        }else if(error.status === 404){
          toast.error(
            "User Not Found"
          );
        }else if(error.status === 409){
          toast.error(
            "Account is Already Verified"
          );
          navigate("/login");
        }else{
          notifyError(
            error.response?.data?.message ||
              "Failed to send OTP. Please try again."
          );
        }
      }
    };

    if (type === "login") sendOtp();
  }, []);

  const handleChange = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
    if (element.previousSibling && !element.value) {
      element.previousSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      notifyError("Please enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);
    try {
      const email = localStorage.getItem("userEmail"); // Retrieve email from localStorage
      const authtoken = localStorage.getItem("authToken"); // Retrieve email from localStorage
      if (!email) {
        notifyError("Email not found. Please register again.");
        navigate("/register");
        return;
      }

      const url =
        type === "forgot"
          ? `${api}/api/v1/auth/otpcheck/forgot`
          : `${api}/api/v1/auth/otpcheck/account-verified`;

      const response = await axios.post(url, {
        otp: otpCode,
        token: authtoken, // Pass token directly in the payload
      });

      if (response.status === 200 && response.data.status) {
        notifySuccess("OTP verified successfully!");
        const role = localStorage.getItem("userRole"); // Get the role
        localStorage.setItem("signupRole", role);
        localStorage.setItem("authToken", response.data.data.token);
        // localStorage.removeItem("authToken"); // Clean up token
        navigate(type === "forgot" ? "/changepassword" : "/signup/firstStep");
      } else {
        notifyError("Account verification failed. Please try again.");
      }
    } catch (error) {
      console.error(
        "Failed to verify OTP:",
        error.response?.data || error.message
      );
      notifyError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4 lg:p-8">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex flex-col lg:flex-row lg:h-[77vh] overflow-hidden">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

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

        <div className="w-full lg:w-1/2 px-6 py-8 lg:py-12 flex flex-col items-center justify-center relative">
          <div className="absolute top-4 right-0 z-10">
            <img src={logo} alt="Logo" className="w-12 lg:w-16 h-auto" />
          </div>

          <h2 className="text-gray-800 text-center text-xl lg:text-2xl font-bold mb-6">
            Verify OTP sent to your Email
          </h2>

          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
            <div className="flex justify-center gap-2 mb-4">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:border-purple-500"
                  disabled={loading}
                />
              ))}
            </div>

            <div className="flex justify-center w-full">
              <button
                type="submit"
                className="w-32 px-4 py-2 rounded-full bg-purple-600 text-white font-bold text-lg"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Otp;
