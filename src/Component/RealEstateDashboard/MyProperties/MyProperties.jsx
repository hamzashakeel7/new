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
    </div>
  );
}
