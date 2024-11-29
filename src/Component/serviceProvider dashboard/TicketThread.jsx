import * as React from "react";
import { X } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../shadcn/components/ui/Avatar";
import { Button } from "../../shadcn/components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../shadcn/components/ui/Card";
import { Textarea } from "../../shadcn/components/ui/Textarea";
import avatar from "../../assets/serviceProvider dashboard/messages/avatar2.png";

export function TicketThread() {
  const messages = [
    {
      id: "1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna",
      sender: {
        name: "Admin",
        avatar: avatar,
        isAdmin: true,
      },
      response:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      id: "2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna",
      sender: {
        name: "Admin",
        avatar: avatar,
        isAdmin: true,
      },
      response:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
  ];

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="space-y-1">
          <CardTitle>Query</CardTitle>
          <p className="text-sm text-muted-foreground">
            Query Which You Submitted Through Help And Support Form
          </p>
        </div>
        <Button variant="ghost" size="icon">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Messages Thread */}
        <div className="space-y-6">
          {messages.map((message) => (
            <div key={message.id} className="space-y-4">
              {/* Admin Message */}
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage
                    src={message.sender.avatar}
                    alt={message.sender.name}
                  />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Admin</p>
                  <div className="rounded-lg bg-gray-100 p-4">
                    <p className="text-sm leading-relaxed text-gray-700">
                      {message.content}
                    </p>
                  </div>
                </div>
              </div>

              {/* User Response */}
              {message.response && (
                <div className="flex gap-4 flex-row-reverse">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="User"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="rounded-lg bg-purple-600 p-4">
                      <p className="text-sm leading-relaxed text-white">
                        {message.response}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Comment Section */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Comment</h3>
          <Textarea
            placeholder="Write your comment here"
            className="min-h-[100px]"
          />
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Submit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
