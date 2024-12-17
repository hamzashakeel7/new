import { Bell } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../shadcn/components/ui/Avatar";
import { useEffect, useState } from "react";

export function Topbar({ section }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch the username from localStorage
    const storedName = localStorage.getItem("name"); // Ensure you save this during registration
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  return (
    <div className="flex h-16 items-center justify-between border-b px-5 lg:px-10 w-full">
      <div className="flex items-center gap-4">
        <h1 className="text-sm md:text-xl font-semibold capitalize">
          {section}
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-accent">
          <Bell className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>
              {username ? username.charAt(0).toUpperCase() : "U"}
            </AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium text-xs md:text-sm">
              {username || "Unknown User"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
