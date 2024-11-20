import * as React from "react";
// import { Input } from "../../shadcn/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../shadcn/components/ui/Select";
import serviceSearch from "../../assets/home/serviceSearch.png";

export function ServiceSearch() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl mt-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${serviceSearch})`,
          filter: "brightness(0.7)",
        }}
      />
      <div className="absolute inset-0 bg-purple-900/30" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
        <h2 className="mb-2 text-3xl font-semibold">Service Search</h2>
        <p className="mb-8 text-sm text-gray-200">
          What Services are you looking for?
        </p>
        <div className="w-full max-w-md">
          <Select>
            <SelectTrigger className="h-10 bg-white/90 text-gray-900">
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="housing">Housing</SelectItem>
              <SelectItem value="support">Support Services</SelectItem>
              <SelectItem value="transportation">Transportation</SelectItem>
              <SelectItem value="homecare">Home Care</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
