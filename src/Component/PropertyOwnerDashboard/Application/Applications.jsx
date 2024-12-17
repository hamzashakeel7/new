import { useState } from "react";
import { Button } from "../../../shadcn/components/ui/Button";
import { Input } from "../../../shadcn/components/ui/Input";
import { Calendar } from "../../../shadcn/components/ui/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../shadcn/components/ui/Popover";
import { CalendarIcon, ChevronDown, Search, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../../../shadcn/lib/utils";
import { Link } from "react-router-dom";

const applications = Array.from({ length: 8 }, (_, i) => ({
  id: `APP${i + 1}`,
  name: `Application Name`,
  type: "Main",
  submissionDate: "20 20 2024",
  status: "open",
}));
//
export function Applications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [showFilters, setShowFilters] = useState(true);
  const [selectedStatuses, setSelectedStatuses] = useState({
    pending: false,
    approved: false,
    rejected: false,
  });

  const handleStatusChange = (status) => {
    setSelectedStatuses((prev) => ({
      ...prev,
      [status]: !prev[status],
    }));
  };

  const handleReset = () => {
    setDateFrom(undefined);
    setDateTo(undefined);
    setSelectedStatuses({
      pending: false,
      approved: false,
      rejected: false,
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-0 lg:p-6">
      {/* Filters Section */}
      {showFilters && (
        <div className="w-full md:w-64 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Filters</h3>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Date Range</h4>
              <div className="space-y-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !dateFrom && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateFrom ? (
                        format(dateFrom, "PPP")
                      ) : (
                        <span>Date from</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dateFrom}
                      onSelect={setDateFrom}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !dateTo && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateTo ? format(dateTo, "PPP") : <span>Date to</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dateTo}
                      onSelect={setDateTo}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Application Type</h4>
              <Button variant="outline" className="w-full justify-between ">
                <span>Select type</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Status</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedStatuses.pending}
                    onChange={() => handleStatusChange("pending")}
                    className="rounded border-gray-300"
                  />
                  <span>Pending</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedStatuses.approved}
                    onChange={() => handleStatusChange("approved")}
                    className="rounded border-gray-300"
                  />
                  <span>Approved</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedStatuses.rejected}
                    onChange={() => handleStatusChange("rejected")}
                    className="rounded border-gray-300"
                  />
                  <span>Rejected</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={handleReset} className="flex-1">
              Reset
            </Button>
            <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
              Apply
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1">
        <div className="lg:mb-6 mb-2 mt-5 lg:mt-0">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 w-[20px] -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="        Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 "
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white">
              Search
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">
              Application Review Overview
            </h2>
            <div className="bg-red-100 p-6 rounded-lg mb-6">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">
                  TOTAL APPLICATIONS
                </div>
                <div className="text-4xl font-bold">10</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {applications.map((app) => (
                <div key={app.id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-medium">{app.name}</h3>
                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">
                      {app.type}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Application Type</span>
                      <span>{app.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Submission Date</span>
                      <span>{app.submissionDate}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 md:gap-10 w-full">
                      <Button
                        className="w-full mt-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600"
                        variant="ghost"
                      >
                        <Link to="/propertyownerdashboard/lease">Open</Link>
                      </Button>

                      <Button
                        className="w-full mt-2  rounded-full bg-[#7415E2] hover:bg-purple-700 hover:text-white text-white"
                        variant="ghost"
                      >
                        <Link to="/propertyownerdashboard/rental">Edit</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
