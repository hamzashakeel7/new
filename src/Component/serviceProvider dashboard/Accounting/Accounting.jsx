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
        <h1 className="text-xl font-semibold">Accounting</h1>
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
            <Archive className="h-5 w-5" />
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
            <TableHeader>
              <TableRow>
                <TableHead>
                  Date
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </TableHead>
                <TableHead>
                  Client Name
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </TableHead>
                <TableHead>
                  Invoice No
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </TableHead>
                <TableHead>
                  Amount
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </TableHead>
                <TableHead>
                  Status
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </TableHead>
                <TableHead>Invoice</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentEntries.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.clientName}</TableCell>
                  <TableCell>{entry.invoiceNo}</TableCell>
                  <TableCell>{entry.amount}</TableCell>
                  <TableCell>{entry.status}</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleOpenInvoice(entry)}
                      >
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                      <Checkbox />
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
            <Archive className="h-5 w-5" />
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
            <TableHeader>
              <TableRow>
                <TableHead>
                  Date
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </TableHead>
                <TableHead>
                  Client Name
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </TableHead>
                <TableHead>
                  Invoice No
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </TableHead>
                <TableHead>
                  Amount
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </TableHead>
                <TableHead>
                  Status
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {archivedEntries.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.clientName}</TableCell>
                  <TableCell>{entry.invoiceNo}</TableCell>
                  <TableCell>{entry.amount}</TableCell>
                  <TableCell>{entry.status}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Archive className="h-4 w-4" />
                        <span className="sr-only">Cancel</span>
                      </Button>
                      <Checkbox />
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
