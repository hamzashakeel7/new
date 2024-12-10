"use client";

import * as React from "react";
import { Edit, Eye, Archive, ArrowUpDown } from "lucide-react";
import { Button } from "../../../shadcn/components/ui/Button";
import { Checkbox } from "../../../shadcn/components/ui/Checkbox";
import { Input } from "../../../shadcn/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../shadcn/components/ui/Select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcn/components/ui/Table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../shadcn/components/ui/Card";
import { Invoice } from "../../dashboard/Invoice";

export function Accounting() {
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = React.useState(false);
  const [selectedInvoice, setSelectedInvoice] = React.useState(null);

  const currentEntries = Array(7).fill({
    date: "Lorem",
    clientName: "Lorem",
    invoiceNo: "Lorem",
    amount: "Lorem",
    status: "Paid",
  });

  const archivedEntries = Array(7).fill({
    date: "Lorem",
    clientName: "Lorem",
    invoiceNo: "Lorem",
    amount: "Lorem",
    status: "Lorem",
  });

  const handleOpenInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setIsInvoiceModalOpen(true);
  };

  const handleCloseInvoice = () => {
    setIsInvoiceModalOpen(false);
    setSelectedInvoice(null);
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold flex gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_639_1818)">
              <path
                d="M12.25 2.33337C11.4333 2.33337 10.85 2.80004 10.6167 3.50004H5.83333C4.55 3.50004 3.5 4.55004 3.5 5.83337V22.1667C3.5 23.45 4.55 24.5 5.83333 24.5H14C14 25.2 14.4667 25.6667 15.1667 25.6667H23.3333C24.0333 25.6667 24.5 25.2 24.5 24.5V12.8334C24.5 12.1334 24.0333 11.6667 23.3333 11.6667H21V5.83337C21 4.55004 19.95 3.50004 18.6667 3.50004H13.8833C13.65 2.80004 13.0667 2.33337 12.25 2.33337ZM12.25 3.50004C12.6 3.50004 12.8333 3.73337 12.8333 4.08337C12.8333 4.43337 12.6 4.66671 12.25 4.66671C11.9 4.66671 11.6667 4.43337 11.6667 4.08337C11.6667 3.73337 11.9 3.50004 12.25 3.50004ZM6.41667 5.83337H9.33333V7.00004H15.1667V5.83337H18.0833C18.4333 5.83337 18.6667 6.06671 18.6667 6.41671V11.6667H15.1667C14.4667 11.6667 14 12.1334 14 12.8334V22.1667H6.41667C6.06667 22.1667 5.83333 21.9334 5.83333 21.5834V6.41671C5.83333 6.06671 6.06667 5.83337 6.41667 5.83337ZM12.3667 9.80004H7.7V12.1334H12.3667V9.80004ZM12.3667 13.3H7.7V15.6334H12.3667V13.3ZM12.3667 16.9167H7.7V19.25H12.3667V16.9167ZM16.3333 14H22.1667V16.3334H16.3333V14ZM16.3333 17.5H18.6667V19.8334H16.3333V17.5ZM19.8333 17.5H22.1667V19.8334H19.8333V17.5ZM16.3333 21H18.6667V23.3334H16.3333V21ZM19.8333 21H22.1667V23.3334H19.8333V21Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_639_1818">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Accounting
        </h1>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Primary vs Secondary" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="primary">Primary</SelectItem>
            <SelectItem value="secondary">Secondary</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex gap-2">
          <Input type="date" placeholder="From" />
          <Input type="date" placeholder="To" />
        </div>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="unpaid">Unpaid</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="amount">Amount</SelectItem>
            <SelectItem value="sent">Sent</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Up to Date List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <svg
              width="21"
              height="26"
              viewBox="0 0 21 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5451 1.13672H3.63628C2.1803 1.13672 1 2.31702 1 3.773V10.3637M11.5451 1.13672L19.454 9.04557M11.5451 1.13672V7.72743C11.5451 8.45541 12.1353 9.04557 12.8633 9.04557H19.454M19.454 9.04557V22.227C19.454 23.683 18.2737 24.8633 16.8177 24.8633H7.59071C4.67875 24.8633 2.31814 22.5026 2.31814 19.5907C2.31814 16.6788 4.67875 14.3181 7.59071 14.3181H11.5451M11.5451 14.3181L7.59071 10.3637M11.5451 14.3181L7.59071 18.2726"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Up to Date List
          </CardTitle>
          <Button
            variant="secondary"
            className="bg-purple-600 text-white hover:bg-purple-700"
          >
            Export
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="text-center">
                  Date
                  {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
                </TableHead>
                <TableHead className="text-center">
                  Client Name
                  {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
                </TableHead>
                <TableHead className="text-center">
                  Invoice No
                  {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
                </TableHead>
                <TableHead className="text-center">
                  Amount
                  {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
                </TableHead>
                <TableHead className="text-center">
                  Status
                  {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
                </TableHead>
                <TableHead className="text-center">Invoice</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-center">
              {currentEntries.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.clientName}</TableCell>
                  <TableCell>{entry.invoiceNo}</TableCell>
                  <TableCell>{entry.amount}</TableCell>
                  <TableCell>{entry.status}</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <Button variant="ghost" size="sm">
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
                        <span className="">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleOpenInvoice(entry)}
                      >
                        <Eye className="h-4 w-4" />
                        <span className="">View</span>
                      </Button>
                      <p className="gap-2 flex font-semibold">
                        <Checkbox />
                        Mark as paid
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Archive List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <svg
              width="21"
              height="26"
              viewBox="0 0 21 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5451 1.13672H3.63628C2.1803 1.13672 1 2.31702 1 3.773V10.3637M11.5451 1.13672L19.454 9.04557M11.5451 1.13672V7.72743C11.5451 8.45541 12.1353 9.04557 12.8633 9.04557H19.454M19.454 9.04557V22.227C19.454 23.683 18.2737 24.8633 16.8177 24.8633H7.59071C4.67875 24.8633 2.31814 22.5026 2.31814 19.5907C2.31814 16.6788 4.67875 14.3181 7.59071 14.3181H11.5451M11.5451 14.3181L7.59071 10.3637M11.5451 14.3181L7.59071 18.2726"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Archive List
          </CardTitle>
          <Button
            variant="secondary"
            className="bg-purple-600 text-white hover:bg-purple-700"
          >
            Export
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="text-center">
                  Date
                  {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
                </TableHead>
                <TableHead className="text-center">
                  Client Name
                  {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
                </TableHead>
                <TableHead className="text-center">
                  Invoice No
                  {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
                </TableHead>
                <TableHead className="text-center">
                  Amount
                  {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
                </TableHead>
                <TableHead className="text-center">
                  Status
                  {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
                </TableHead>
                <TableHead className="text-center">Invoice</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-center">
              {currentEntries.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.clientName}</TableCell>
                  <TableCell>{entry.invoiceNo}</TableCell>
                  <TableCell>{entry.amount}</TableCell>
                  <TableCell>{entry.status}</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <Button variant="ghost" size="sm">
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
                        <span className="">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleOpenInvoice(entry)}
                      >
                        <Eye className="h-4 w-4" />
                        <span className="">View</span>
                      </Button>
                      <p className="gap-2 flex font-semibold">
                        <Checkbox />
                        Mark as paid
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Invoice Modal */}
      {isInvoiceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleCloseInvoice}
          ></div>
          <div className="relative z-10 w-full max-w-md">
            <Invoice onClose={handleCloseInvoice} invoice={selectedInvoice} />
          </div>
        </div>
      )}
    </div>
  );
}
