import * as React from "react";
import { Link } from "react-router-dom";
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

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      {/* Main Navigation */}
      <nav className="relative z-20 bg-gray-900/95 text-white">
        <div className="container mx-auto px-4">
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
                  <div className="px-4 py-2">
                    <button className="flex items-center hover:bg-gray-800">
                      Query <ChevronDown className="ml-1 h-4 w-4 " />
                    </button>
                  </div>
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
            <Link to="/" className="flex items-center gap-2">
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
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block text-black">
                {/* <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-500" /> */}
                <Input
                  placeholder="Search"
                  className="w-[200px] pl-9 bg-white border-gray-700 text-black"
                />
              </div>
              <div className="flex items-center gap-2">
                <Link to="/register">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hidden md:inline-flex"
                  >
                    Register
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Button variant="ghost" size="icon">
                  <MessageCircle className="h-5 w-5" />
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
                    <DropdownMenuItem>
                      <Link to="/dashboard" className="flex items-center">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Bar */}
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
