import { Bell, Menu } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../shadcn/components/ui/Avatar";
import { Button } from "../../shadcn/components/ui/Button";

export function Topbar({ toggleSidebar }) {
  return (
    <div className="flex h-16 items-center justify-between border-b px-5 lg:px-20 w-full">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-sm md:text-xl font-semibold">
          Individual Information
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-accent">
          <Bell className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium text-xs md:text-sm">Amanda Smith</p>
          </div>
        </div>
      </div>
    </div>
  );
}
