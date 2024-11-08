import { Bell } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../shadcn/components/ui/Avatar"

export function Topbar() {
  return (
    <div className="flex h-16 items-center justify-between border-b px-5 lg:px-20 w-full">
      <h1 className="text-xl font-semibold">Individual Information</h1>
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-accent">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {/* auth user image */}
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">Amanda Smith</p>
          </div>
        </div>
      </div>
    </div>
  );
}
