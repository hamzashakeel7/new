import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../shadcn/components/ui/Button";
import { Input } from "../shadcn/components/ui/Input";
import logo from "../assets/logo.png";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../shadcn/components/ui/Sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shadcn/components/ui/Dropdown-menu";
import {
  Facebook,
  Instagram,
  Menu,
  MessageCircle,
  PhoneIcon as WhatsApp,
  XIcon as TwitterX,
  ChevronDown,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../shadcn/components/ui/Avatar";
import { useState } from "react";
import { useEffect } from "react";
// ok

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const [authToken, setAuthToken] = useState(null);
  const [userRole, setUserRole] = useState(null);

  // Simulated function to fetch user data from local storage or API
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const role = localStorage.getItem("userRole");
    setAuthToken(token);
    setUserRole(role);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
    setAuthToken(null);
    setUserRole(null);
    navigate("/login");
  };

  // Handle dashboard redirection
  const handleDashboardNavigation = () => {
    if (userRole) {
      switch (userRole) {
        case "Individual":
          navigate("/dashboard");
          break;
        case "Property Owner":
          navigate("/propertyownerdashboard");
          break;
        case "Hospital System/Managed Care Organizations":
          navigate("/HospitalManagement");
          break;
        case "Real Estate Professionals":
          navigate("/realestatedashboard");
          break;
        case "Service Provider":
          navigate("/service-provider-dashboard");
          break;
        case "Non Profits":
          navigate("/nonprofit");
          break;
        default:
          navigate("/");
      }
    }
  };

  return (
    <div className="relative">
      {/* Main Navigation */}
      <nav className="relative z-20 bg-gray-900/95 text-white">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="flex h-28 items-center justify-between gap-4">
            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] bg-gray-900 text-white"
              >
                <div className="mt-6 space-y-4">
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-800 hover:text-white"
                  >
                    Home
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-1  w-full justify-start px-4 py-2"
                      >
                        Query <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link to="/property" className="w-full">
                          Property
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="/PropertyService" className="w-full">
                          Services
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link
                    to="/community"
                    className="block px-4 py-2 hover:bg-gray-800"
                  >
                    Community Resource
                  </Link>
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-gray-800"
                  >
                    About Us
                  </Link>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-1 md:gap-2">
              <div className="h-14 w-14 lg:h-20 lg:w-20 overflow-hidden rounded-full">
                <img
                  src={logo}
                  alt="Silver TLC"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-lg font-bold">SILVER TLC</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 hover:text-gray-500"
                  >
                    Query <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link to="/property">Property</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/PropertyService">Services</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/community" className="hover:text-gray-300">
                Community Resource
              </Link>
              <Link to="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </div>

            {/* Search and Actions */}
            <div className="flex items-center gap-0 md:gap-4">
              <div className="relative hidden md:block text-black">
                <Input
                  placeholder="Search"
                  className="w-[200px] pl-9 bg-white border-gray-700 text-black"
                />
              </div>
              <div className="flex items-center gap-0 md:gap-2">
                <Link to="/register">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hidden md:inline-flex"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.25 19.5C17.0511 19.5 16.8603 19.579 16.7197 19.7197C16.579 19.8603 16.5 20.0511 16.5 20.25V22.5H1.5V4.5H4.5V5.25C4.5 5.44891 4.57902 5.63968 4.71967 5.78033C4.86032 5.92098 5.05109 6 5.25 6H12.75C12.9489 6 13.1397 5.92098 13.2803 5.78033C13.421 5.63968 13.5 5.44891 13.5 5.25V4.5H16.5V5.25C16.5 5.44891 16.579 5.63968 16.7197 5.78033C16.8603 5.92098 17.0511 6 17.25 6C17.4489 6 17.6397 5.92098 17.7803 5.78033C17.921 5.63968 18 5.44891 18 5.25V3.75C18 3.55109 17.921 3.36032 17.7803 3.21967C17.6397 3.07902 17.4489 3 17.25 3H13.5V2.25C13.5 1.65326 13.2629 1.08097 12.841 0.659011C12.419 0.237054 11.8467 0 11.25 0H6.75C6.15326 0 5.58096 0.237054 5.15901 0.659011C4.73705 1.08097 4.5 1.65326 4.5 2.25V3H0.75C0.551088 3 0.360322 3.07902 0.219669 3.21967C0.0790171 3.36032 0 3.55109 0 3.75V23.25C0 23.4489 0.0790171 23.6397 0.219669 23.7803C0.360322 23.921 0.551088 24 0.75 24H17.25C17.4489 24 17.6397 23.921 17.7803 23.7803C17.921 23.6397 18 23.4489 18 23.25V20.25C18 20.0511 17.921 19.8603 17.7803 19.7197C17.6397 19.579 17.4489 19.5 17.25 19.5ZM6 2.25C6 2.05109 6.07902 1.86032 6.21967 1.71967C6.36032 1.57902 6.55109 1.5 6.75 1.5H11.25C11.4489 1.5 11.6397 1.57902 11.7803 1.71967C11.921 1.86032 12 2.05109 12 2.25V4.5H6V2.25ZM23.781 9.219L20.781 6.219C20.7113 6.14916 20.6286 6.09374 20.5375 6.05593C20.4463 6.01812 20.3486 5.99866 20.25 5.99866C20.1513 5.99866 20.0537 6.01812 19.9625 6.05593C19.8714 6.09374 19.7887 6.14916 19.719 6.219L10.719 15.219C10.6494 15.2888 10.5942 15.3716 10.5567 15.4627C10.5191 15.5538 10.4998 15.6514 10.5 15.75V18.75C10.5 18.9489 10.579 19.1397 10.7197 19.2803C10.8603 19.421 11.0511 19.5 11.25 19.5H14.25C14.3486 19.5002 14.4462 19.4809 14.5373 19.4433C14.6284 19.4058 14.7112 19.3506 14.781 19.281L23.781 10.281C23.8508 10.2113 23.9063 10.1286 23.9441 10.0375C23.9819 9.94633 24.0013 9.84865 24.0013 9.75C24.0013 9.65135 23.9819 9.55367 23.9441 9.46255C23.9063 9.37143 23.8508 9.28867 23.781 9.219ZM12 18V16.0605L20.25 7.8105L22.1895 9.75L13.9395 18H12ZM9 18.75C9 18.9489 8.92098 19.1397 8.78033 19.2803C8.63968 19.421 8.44891 19.5 8.25 19.5H5.25C5.05109 19.5 4.86032 19.421 4.71967 19.2803C4.57902 19.1397 4.5 18.9489 4.5 18.75C4.5 18.5511 4.57902 18.3603 4.71967 18.2197C4.86032 18.079 5.05109 18 5.25 18H8.25C8.44891 18 8.63968 18.079 8.78033 18.2197C8.92098 18.3603 9 18.5511 9 18.75ZM9 14.25C9 14.4489 8.92098 14.6397 8.78033 14.7803C8.63968 14.921 8.44891 15 8.25 15H5.25C5.05109 15 4.86032 14.921 4.71967 14.7803C4.57902 14.6397 4.5 14.4489 4.5 14.25C4.5 14.0511 4.57902 13.8603 4.71967 13.7197C4.86032 13.579 5.05109 13.5 5.25 13.5H8.25C8.44891 13.5 8.63968 13.579 8.78033 13.7197C8.92098 13.8603 9 14.0511 9 14.25ZM12.75 10.5H5.25C5.05109 10.5 4.86032 10.421 4.71967 10.2803C4.57902 10.1397 4.5 9.94891 4.5 9.75C4.5 9.55109 4.57902 9.36032 4.71967 9.21967C4.86032 9.07902 5.05109 9 5.25 9H12.75C12.9489 9 13.1397 9.07902 13.2803 9.21967C13.421 9.36032 13.5 9.55109 13.5 9.75C13.5 9.94891 13.421 10.1397 13.2803 10.2803C13.1397 10.421 12.9489 10.5 12.75 10.5Z"
                        fill="white"
                      />
                    </svg>
                    Register
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.332 20.6673C10.332 24.3207 10.332 26.1473 11.467 27.2823C12.602 28.4173 14.4287 28.4173 18.082 28.4173H19.3737C23.027 28.4173 24.8537 28.4173 25.9887 27.2823C27.1237 26.1473 27.1237 24.3207 27.1237 20.6673V10.334C27.1237 6.6806 27.1237 4.85391 25.9887 3.71895C24.8537 2.58398 23.027 2.58398 19.3737 2.58398H18.082C14.4287 2.58398 12.602 2.58398 11.467 3.71895C10.332 4.85391 10.332 6.6806 10.332 10.334"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        opacity="0.5"
                        d="M10.3333 25.1875C7.28885 25.1875 5.76661 25.1875 4.8208 24.2417C3.875 23.2959 3.875 21.7736 3.875 18.7292V12.2708C3.875 9.22635 3.875 7.70411 4.8208 6.7583C5.76661 5.8125 7.28885 5.8125 10.3333 5.8125"
                        stroke="white"
                        stroke-width="2"
                      />
                      <path
                        d="M7.75 15.5007H19.375M19.375 15.5007L16.1458 18.7298M19.375 15.5007L16.1458 12.2715"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Login
                  </Button>
                </Link>
                <Button variant="ghost" size="icon">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.07779 11.625H19.4111M8.07779 17.2917H12.3278M26.5 13.75C26.5 20.7917 20.7917 26.5 13.75 26.5C10.8651 26.5 1.00102 26.5 1.00102 26.5C1.00102 26.5 3.20987 21.1961 2.32587 19.4178C1.4772 17.7104 1 15.786 1 13.75C1 6.70837 6.70836 1 13.75 1C20.7917 1 26.5 6.70837 26.5 13.75Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Chat
                </Button>
                {/* avatar */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-black"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {authToken ? (
                      <>
                        <DropdownMenuItem onClick={handleDashboardNavigation}>
                          Dashboard
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleLogout}>
                          Logout
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <div className="bg-[#1D2432]"></div>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* bottom Bar */}
      <div className="relative z-10 bg-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start gap-5 lg:gap-10">
            <div className="flex items-center gap-4">
              <Link
                to="https://instagram.com"
                className="text-purple-600 hover:text-purple-500"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                to="https://whatsapp.com"
                className="text-purple-600 hover:text-purple-500"
              >
                <WhatsApp className="h-4 w-4" />
              </Link>
              <Link
                to="https://twitter.com"
                className="text-purple-600 hover:text-purple-500"
              >
                <TwitterX className="h-4 w-4" />
              </Link>
              <Link
                to="https://facebook.com"
                className="text-purple-600 hover:text-purple-500"
              >
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="">Mon To Sat 9:00 AM to 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
