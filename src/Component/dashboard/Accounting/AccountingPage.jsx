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
  { id: 1, number: "INV001", date: "2023-05-01", clientName: "Acme Corp", amount: "$1000", status: "Paid" },
  { id: 2, number: "INV002", date: "2023-05-05", clientName: "Globex Inc", amount: "$1500", status: "Paid" },
  // Additional invoices...
  { id: 1, number: "INV001", date: "2023-05-01", clientName: "Acme Corp", amount: "$1000", status: "Paid" },
  { id: 2, number: "INV002", date: "2023-05-05", clientName: "Globex Inc", amount: "$1500", status: "Paid" },
  // Additional invoices...
  { id: 1, number: "INV001", date: "2023-05-01", clientName: "Acme Corp", amount: "$1000", status: "Paid" },
  { id: 2, number: "INV002", date: "2023-05-05", clientName: "Globex Inc", amount: "$1500", status: "Paid" },
  // Additional invoices...
  { id: 1, number: "INV001", date: "2023-05-01", clientName: "Acme Corp", amount: "$1000", status: "Paid" },
  { id: 2, number: "INV002", date: "2023-05-05", clientName: "Globex Inc", amount: "$1500", status: "Paid" },
  // Additional invoices...
  { id: 1, number: "INV001", date: "2023-05-01", clientName: "Acme Corp", amount: "$1000", status: "Paid" },
  { id: 2, number: "INV002", date: "2023-05-05", clientName: "Globex Inc", amount: "$1500", status: "Paid" },
  // Additional invoices...
];

export function AccountingPage() {
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleCloseInvoice = () => {
    setSelectedInvoice(null); // Reset the selected invoice to null
  };

  return (
    <div className="p-0 ml-0 lg:p-3 lg:ml-1">
      <div className={`p-2 lg:p-5 bg-gray-100 rounded-md w-[75vw] lg:w-full ${selectedInvoice ? "hidden" : ""}`}>
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
        <div className="border rounded-lg overflow-x-hidden">
          <Table className="bg-white">
            <TableHeader>
              <TableRow>
                <TableHead>Invoice Number</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Client Name</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Actions</TableHead>
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
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="ghost" size="sm">
                      <CreditCard className="h-4 w-4 mr-2" />
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
