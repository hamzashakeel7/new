import * as React from "react";
import { Building, Pencil, Trash2, ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcn/components/ui/Table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../../shadcn/components/ui/Dropdown-menu";
import { Button } from "../../../shadcn/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../shadcn/components/ui/Card";
import prop1 from "../../../assets/prop1.png";

const properties = [
  {
    id: 1,
    image: prop1,
    name: "Central House",
    address: "North Carolina",
    price: "22$",
  },
  {
    id: 2,
    image: prop1,
    name: "Lorem",
    address: "Lorem",
    price: "Lorem",
  },
];

export default function MyProperties() {
  const handleEdit = (id) => {
    console.log("Edit property:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete property:", id);
  };

  const calendarData = {
    1: [],
    2: [{ type: "Development" }, { type: "Edit file" }],
    3: [{ type: "Development" }, { note: "Note taking" }],
    4: [{ type: "Green Tag" }, { note: "Note taking" }],
    5: [{ note: "Note taking" }],
    6: [{ type: "Development" }, { note: "Note taking" }],
    7: [{ note: "Note taking" }],
    8: [{ type: "Design" }, { type: "Development" }],
    9: [{ type: "Regular Tag" }, { note: "Note taking" }],
    10: [{ type: "Design" }, { note: "Note taking" }],
    11: [{ type: "Development" }, { note: "Note taking" }],
    12: [{ note: "Note taking" }],
    13: [{ note: "Note taking" }],
    14: [{ type: "Design" }, { type: "Development" }, { note: "Note taking" }],
    15: [],
    16: [
      { type: "Blue Tag" },
      { type: "Development" },
      { type: "Edit file" },
      { note: "Note taking" },
    ],
    17: [],
    18: [{ type: "Design" }, { type: "Green Tag" }, { note: "Note taking" }],
    19: [],
    20: [],
    21: [{ type: "Design" }, { type: "Development" }, { note: "Note taking" }],
    22: [],
    23: [{ type: "Blue Tag" }, { type: "Orange Tag" }],
    24: [{ type: "Edit file" }, { note: "Note taking" }],
    25: [{ type: "Design" }, { type: "Development" }, { note: "Note taking" }],
    26: [{ note: "Note taking" }],
    27: [{ type: "Regular Tag" }],
    28: [{ type: "Design" }, { type: "Development" }],
    29: [{ type: "Design" }, { type: "Development" }],
    30: [{ type: "Development" }, { type: "Edit file" }],
    31: [{ note: "Note taking" }],
    32: [{ note: "Note taking" }],
  };

  const getTagColor = (type) => {
    switch (type) {
      case "Design":
        return "text-blue-600";
      case "Development":
        return "text-orange-500";
      case "Green Tag":
        return "text-green-500";
      case "Edit file":
        return "text-red-500";
      case "Blue Tag":
        return "text-blue-600";
      case "Orange Tag":
        return "text-orange-500";
      default:
        return "text-gray-600";
    }
  };

  const weekDays = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

  return (
    <div className="space-y-8 w-[76vw] lg:w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Building className="h-5 w-5" />
            My Properties
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-x-scroll lg:overflow-x-hidden">
            <div className="min-w-[500px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">
                      Thumbnail Image
                      <DropdownMenu>
                        <DropdownMenuTrigger className="ml-2">
                          <ChevronDown className="h-4 w-4" />
                        </DropdownMenuTrigger>
                      </DropdownMenu>
                    </TableHead>
                    <TableHead>
                      Property Name
                      <DropdownMenu>
                        <DropdownMenuTrigger className="ml-2">
                          <ChevronDown className="h-4 w-4" />
                        </DropdownMenuTrigger>
                      </DropdownMenu>
                    </TableHead>
                    <TableHead>
                      Address
                      <DropdownMenu>
                        <DropdownMenuTrigger className="ml-2">
                          <ChevronDown className="h-4 w-4" />
                        </DropdownMenuTrigger>
                      </DropdownMenu>
                    </TableHead>
                    <TableHead>
                      Price
                      <DropdownMenu>
                        <DropdownMenuTrigger className="ml-2">
                          <ChevronDown className="h-4 w-4" />
                        </DropdownMenuTrigger>
                      </DropdownMenu>
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {properties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell>
                        <div className="relative h-[100px] w-[150px] rounded-md overflow-hidden">
                          <img
                            src={property.image}
                            alt={property.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </TableCell>
                      <TableCell>{property.name}</TableCell>
                      <TableCell>{property.address}</TableCell>
                      <TableCell>{property.price}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleEdit(property.id)}
                          >
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleDelete(property.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Calendar: May, 2022</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-scroll lg:overflow-x-hidden">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-7 border-t border-l">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="p-2 text-sm font-medium text-gray-600 border-r border-b"
                  >
                    {day}
                  </div>
                ))}
                {Object.entries(calendarData).map(([day, events]) => (
                  <div
                    key={day}
                    className="min-h-[100px] p-2 border-r border-b"
                  >
                    <div className="text-sm text-gray-600 mb-1">{day}</div>
                    <div className="space-y-1">
                      {events.map((event, index) => (
                        <React.Fragment key={index}>
                          {event.type && (
                            <div
                              className={`text-xs font-medium ${getTagColor(
                                event.type
                              )}`}
                            >
                              {event.type}
                            </div>
                          )}
                          {event.note && (
                            <div className="text-xs text-gray-500">
                              {event.note}
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
