import * as React from "react";
import { MessageCircle, UserPlus } from "lucide-react";
import { Button } from "../../../shadcn/components/ui/Button";
import { Input } from "../../../shadcn/components/ui/Input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../../../shadcn/components/ui/Dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../shadcn/components/ui/Avatar";

export function IndustryPopup() {
  const [open, setOpen] = React.useState(false);

  const participants = [
    { name: "John Doe", role: "Senior Member" },
    { name: "David Smith", role: "Senior Member" },
    { name: "John Doe", role: "Senior Member" },
    { name: "John Doe", role: "Senior Member" },
    { name: "Kelvin John", role: "Senior Member" },
    { name: "Mike Doe", role: "Senior Member" },
    { name: "John Doe", role: "Senior Member" },
    { name: "John Doe", role: "Senior Member" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-3">
          Create New Chat Room
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-[330px] bg-white rounded-xl">
        <DialogHeader>
          <div className="flex items-center gap-2 font-semibold">
            <MessageCircle className="h-5 w-5" />
            Create Chat Room
          </div>
        </DialogHeader>

        <div className="space-y-4 md:pt-4 pt-0">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">
              Create Chat Topic
            </label>
            <Input placeholder="Add Company Title" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium leading-none">
                Participants
              </label>
              <Button
                variant="secondary"
                size="sm"
                className="h-8 bg-purple-600 text-white hover:bg-purple-700"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Invite Participants
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-lg border p-4">
              {participants.map((participant, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={participant.avatar}
                      alt={participant.name}
                    />
                    <AvatarFallback>
                      {participant.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {participant.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {participant.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Create
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
