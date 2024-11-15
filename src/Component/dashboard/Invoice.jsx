import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "../../shadcn/components/ui/Button";

export function Invoice({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDownload = () => {
    console.log("Downloading invoice...");
  };

  const handlePrint = () => {
    console.log("Printing invoice...");
  };

  const handleMarkAsPaid = () => {
    console.log("Marking invoice as paid...");
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
            Invoice
          </h2>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Invoice Information</h3>
          <div className="space-y-0">
            <div className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
              <span className="text-sm text-gray-600">Invoice Number:</span>
              <span className="font-medium">Service 1</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
              <span className="text-sm text-gray-600">Date:</span>
              <span className="font-medium">Provider 1</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
              <span className="text-sm text-gray-600">Client Name:</span>
              <span className="font-medium">2021-01-01 19:00 AM</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
              <span className="text-sm text-gray-600">Amount:</span>
              <span className="font-medium">Completed</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
              <span className="text-sm text-gray-600">Status:</span>
              <span className="font-medium">$50</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
              <span className="text-sm text-gray-600">Due Date:</span>
              <span className="font-medium">2021-01-01 19:00 AM</span>
            </div>
            <div className="flex justify-between gap-3 py-3 border-b border-gray-200 last:border-b-0">
              <span className="text-sm text-gray-600">Description:</span>
              <span className="font-medium text-right">
                Lorem ipsum dolor sit amet, consectetur
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
              <span className="text-sm text-gray-600">Payment Terms:</span>
              <span className="font-medium">Net 30 Days</span>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="flex-1 text-xs sm:text-sm"
            onClick={handleDownload}
          >
            Download Invoice
          </Button>
          <Button
            variant="outline"
            className="flex-1 text-xs sm:text-sm"
            onClick={handlePrint}
          >
            Print Invoice
          </Button>
          <Button
            variant="outline"
            className="flex-1 text-xs sm:text-sm"
            onClick={handleMarkAsPaid}
          >
            Mark as Paid
          </Button>
        </div>
      </div>
    </div>
  );
}
