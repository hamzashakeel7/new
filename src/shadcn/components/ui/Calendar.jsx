import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui/Button";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "p-3 bg-white rounded-md shadow-md flex items-center justify-center flex-col ", // Center calendar and adjust width
        className
      )}
      classNames={{
        months: "flex flex-col space-y-3 ", // Remove space between rows and columns
        month: "space-y-2 mr-10",
        caption: "flex justify-between items-center  py-2",
        caption_label: "text-lg font-semibold", // Center the month title
        nav: "flex items-center", // Align navigation buttons next to each other
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-6 w-6 hover:bg-gray-200" // Smaller buttons with hover effect
        ),
        nav_button_previous: "", // Remove absolute positioning
        nav_button_next: "", // Remove absolute positioning
        table: "w-full border-collapse", // Full width table
        head_row: "grid grid-cols-7 text-center text-xs font-medium", // Arrange days in a grid
        head_cell: "text-gray-500",
        row: "grid grid-cols-7 text-center", // Arrange dates in a grid
        cell: "h-9 w-9 text-center p-0 relative",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 font-normal" // Adjust day button style
        ),
        day_selected: "bg-blue-500 text-white rounded-full", // Highlight selected day with rounded style
        day_today: "bg-gray-200 rounded-full", // Highlight today with a light background
        day_outside: "text-gray-400", // Lighten text for days outside the current month
        day_disabled: "text-gray-300",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: (props) => <ChevronLeft className="h-4 w-4" />, // Left arrow
        IconRight: (props) => <ChevronRight className="h-4 w-4" />, // Right arrow
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
