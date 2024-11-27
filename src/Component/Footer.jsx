import React from "react";
import {
  Facebook,
  Instagram,
  Phone,
  MapPin,
  Mail,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import footer from "../assets/home/footer/footer.png";
import logo from "../assets/logo.png";
import footer1 from "../assets/home/footer/footer1.jpg";
import footer2 from "../assets/home/footer/footer2.jpg";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 to-gray-700  text-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${footer})`,
          backgroundSize: "110vw 120vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Urgent Causes */}
          <div>
            <h3 className="text-red-400 font-semibold mb-6">Urgent Causes</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={footer1}
                    alt="Healthcare"
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <h4 className="font-semibold">Healthcare Funds</h4>
                    <p className="text-sm">Goal: $780,000.00</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[38%] bg-red-400 rounded-full" />
                </div>
                <span className="text-sm">38</span>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={footer2}
                    alt="Elder Care"
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <h4 className="font-semibold">Elder Care Funding</h4>
                    <p className="text-sm">Goal: $400,000.00</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[50%] bg-red-400 rounded-full" />
                </div>
                <span className="text-sm">50</span>
              </div>
            </div>
          </div>

          {/* Main Branch */}
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-start justify-start flex-col">
              <h3 className="text-red-400 font-semibold mb-6">Main Branch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <p className="text-sm">
                    No: 58 A, East Madison Street,
                    <br />
                    Baltimore, MD, USA 4508
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <p className="text-sm">456789</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <p className="text-sm">support@example.com</p>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="text-red-400 font-semibold mb-6">Facilities</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/service">Our Service</Link>
                </li>
                <li>
                  <Link to="/donation">Donation</Link>
                </li>
                <li>
                  <Link to="/journal">Journal</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo and Social */}
          <div className="lg:ml-36 w-full">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Silver TLC" className="w-28 h-20" />
              <span className="text-xl font-bold">SILVER TLC</span>
            </div>
            <p className="text-sm mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when
            </p>
            <div className="flex gap-4">
              <Link to="#" className="hover:text-red-400">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-red-400">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-red-400">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
          <div className="flex gap-4 mb-4 md:mb-0">
            <Link to="/privacy" className="text-sm hover:text-red-400">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms" className="text-sm hover:text-red-400">
              Terms & Conditions
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            Copyright © 2024. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
