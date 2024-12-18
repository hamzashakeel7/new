import React, { useState } from "react";
import { Button } from "../../../shadcn/components/ui/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcn/components/ui/Table";
import { FileText, Download, CreditCard, Eye } from "lucide-react";
import { Invoice } from "../../dashboard/Invoice"; // Import the Invoice component

// Fake data
const invoices = [
  {
    id: 1,
    number: "INV001",
    date: "2023-05-01",
    clientName: "Acme Corp",
    amount: "$1000",
    status: "Paid",
  },
  {
    id: 2,
    number: "INV002",
    date: "2023-05-05",
    clientName: "Globex Inc",
    amount: "$1500",
    status: "Paid",
  },
  // Additional invoices...
  {
    id: 1,
    number: "INV001",
    date: "2023-05-01",
    clientName: "Acme Corp",
    amount: "$1000",
    status: "Paid",
  },
  {
    id: 2,
    number: "INV002",
    date: "2023-05-05",
    clientName: "Globex Inc",
    amount: "$1500",
    status: "Paid",
  },
  // Additional invoices...
  {
    id: 1,
    number: "INV001",
    date: "2023-05-01",
    clientName: "Acme Corp",
    amount: "$1000",
    status: "Paid",
  },
  {
    id: 2,
    number: "INV002",
    date: "2023-05-05",
    clientName: "Globex Inc",
    amount: "$1500",
    status: "Paid",
  },
  // Additional invoices...
  {
    id: 1,
    number: "INV001",
    date: "2023-05-01",
    clientName: "Acme Corp",
    amount: "$1000",
    status: "Paid",
  },
  {
    id: 2,
    number: "INV002",
    date: "2023-05-05",
    clientName: "Globex Inc",
    amount: "$1500",
    status: "Paid",
  },
  // Additional invoices...
  {
    id: 1,
    number: "INV001",
    date: "2023-05-01",
    clientName: "Acme Corp",
    amount: "$1000",
    status: "Paid",
  },
  {
    id: 2,
    number: "INV002",
    date: "2023-05-05",
    clientName: "Globex Inc",
    amount: "$1500",
    status: "Paid",
  },
  // Additional invoices...
];

export function AccountingPage() {
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleCloseInvoice = () => {
    setSelectedInvoice(null); // Reset the selected invoice to null
  };

  return (
    <div className="p-0 ml-0 lg:p-3 lg:ml-1">
      <div
        className={`p-2 lg:p-5 bg-gray-100 rounded-md w-[75vw] lg:w-full ${
          selectedInvoice ? "hidden" : ""
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6" />
            <h2 className="text-2xl font-semibold">Invoices</h2>
          </div>
          <div className="flex items-start justify-center gap-1 flex-col md:flex-row">
            <Button variant="outline">Sort By</Button>
            <Button variant="outline">Filter</Button>
          </div>
        </div>
        <div className="border rounded-lg overflow-x-hidden ">
          <Table className="bg-white">
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead>Invoice Number</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Client Name</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center w-[22rem]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.number}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.clientName}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      onClick={() => setSelectedInvoice(invoice)}
                      variant="ghost"
                      size="sm"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.13388 16.8751L17.1339 6.87509L13.125 2.86621L3.125 12.8663V16.8751H7.13388ZM13.125 4.63398L15.3662 6.87509L13.75 8.49125L11.5089 6.25011L13.125 4.63398ZM10.625 7.13399L12.8661 9.37509L6.61612 15.6251H4.375V13.384L10.625 7.13399Z"
                          fill="#171A1F"
                        />
                      </svg>
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="ghost" size="sm">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1495_3416)">
                          <path
                            d="M11.7104 2.79231C11.7426 2.76359 11.7682 2.72833 11.7856 2.68889C11.803 2.64945 11.8118 2.60675 11.8114 2.56363C11.811 2.52052 11.8014 2.478 11.7832 2.43892C11.765 2.39983 11.7386 2.36509 11.7059 2.33701C11.6714 2.30745 11.6372 2.27804 11.6033 2.2488C11.3444 2.02617 11.0767 1.79565 10.7967 1.59902C8.65737 0.0933634 6.43455 0.0848926 4.19032 0.883401C2.15839 1.60585 0.853515 3.05121 0.311402 5.17855C-0.293336 7.55532 0.236221 9.65211 1.88646 11.4114C1.92939 11.4569 1.97321 11.5023 2.01696 11.5457C2.90344 12.4323 4.00759 12.9796 4.88245 13.3604C5.25796 13.5244 7.18469 13.7236 7.70601 13.6459C10.8041 13.1832 12.8428 11.4359 13.5529 8.51255C13.6885 7.93994 13.756 7.35332 13.754 6.76488C13.751 6.14688 13.6471 5.53354 13.4464 4.94903C13.4317 4.90531 13.4077 4.86535 13.3758 4.83203C13.3439 4.79871 13.3051 4.77284 13.2621 4.75627C13.2191 4.73971 13.1729 4.73287 13.1269 4.73622C13.081 4.73958 13.0362 4.75306 12.9961 4.7757L12.9877 4.78049C12.9239 4.81703 12.8749 4.87485 12.8495 4.94383C12.8239 5.01281 12.8235 5.08855 12.8482 5.15781C13.0294 5.66022 13.1218 6.19032 13.1212 6.72439C13.115 7.36512 13.0283 8.00251 12.8631 8.62162C12.3735 10.4007 11.2033 11.6973 9.28548 12.5843C7.3357 13.5178 4.5396 12.574 3.79566 12.0828C2.97338 11.5207 2.25388 10.8214 1.66862 10.0154C0.750762 8.71575 0.544839 6.84788 1.03806 5.14023C1.26887 4.35178 1.67224 3.62457 2.21894 3.01135C2.76564 2.39812 3.44196 1.91425 4.19885 1.59481C6.16793 0.776496 8.14367 0.632146 10.0707 1.85769C10.3291 2.02219 10.9879 2.53948 11.3208 2.80364C11.3767 2.84796 11.4464 2.87109 11.5177 2.86896C11.589 2.86682 11.6572 2.83954 11.7103 2.79196L11.7104 2.79231Z"
                            fill="black"
                          />
                          <path
                            d="M6.14569 8.87856C6.27766 8.75313 6.35015 8.68964 6.41651 8.6203C8.54416 6.39747 10.8743 4.39626 13.2181 2.41053C13.3067 2.33553 13.3974 2.23984 13.5022 2.21297C13.6286 2.18067 13.8348 2.21782 13.8913 2.28646C13.9284 2.33719 13.9519 2.3966 13.9594 2.459C13.9669 2.5214 13.9583 2.58469 13.9344 2.64281C13.8793 2.78727 13.7451 2.911 13.6234 3.01914C12.8968 3.6647 12.15 4.28802 11.4363 4.94691C9.9444 6.32474 8.46205 7.71282 6.98912 9.11112C6.34372 9.72251 6.09534 9.7473 5.50146 9.09399C5.11053 8.66378 3.93073 7.21374 3.56942 6.75686C3.51837 6.68584 3.4729 6.61098 3.43342 6.53294C3.35193 6.38842 3.29865 6.22917 3.46064 6.11713C3.64109 5.99235 3.76914 6.12256 3.87611 6.25814C3.98436 6.39543 4.07666 6.54621 4.19255 6.6763C4.55235 7.08003 5.75692 8.45272 6.14569 8.87856Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1495_3416">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Pay Now
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modal for Invoice */}
      {selectedInvoice && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Invoice invoice={selectedInvoice} onClose={handleCloseInvoice} />
        </div>
      )}
    </div>
  );
}
