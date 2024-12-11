import * as React from "react";
import { Send } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../shadcn/components/ui/Avatar";
import { Button } from "../../../shadcn/components/ui/Button";
import { Input } from "../../../shadcn/components/ui/Input";
import { ScrollArea } from "../../../shadcn/components/ui/ScrollArea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../shadcn/components/ui/Card";
import avatar from "../../../assets/serviceProvider dashboard/messages/avatar.png";
import avatar2 from "../../../assets/serviceProvider dashboard/messages/avatar2.png";
import avatar3 from "../../../assets/serviceProvider dashboard/messages/avatar3.png";

export function CorporateMessages() {
  const [newMessage, setNewMessage] = React.useState("");

  const messages = [
    {
      id: "1",
      content: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      sender: {
        name: "John Doe",
        avatar: avatar,
      },
    },
    {
      id: "2",
      content: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      sender: {
        name: "John Doe",
        avatar: avatar2,
      },
    },
    {
      id: "3",
      content: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      sender: {
        name: "John Doe",
        avatar: avatar3,
      },
    },
  ];

  const chatRooms = [
    {
      id: "R1",
      name: "Room 1",
      lastMessage: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
    },
    {
      id: "R2",
      name: "Room 2",
      lastMessage: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
    },
    {
      id: "R3",
      name: "Room 3",
      lastMessage: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
    },
  ];

  const liveChatMessages = [
    {
      id: "1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna",
      sender: {
        name: "John Doe",
        avatar: avatar2,
        isCurrentUser: false,
      },
    },
    {
      id: "2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna",
      sender: {
        name: "Amanda Smith",
        avatar: avatar3,
        isCurrentUser: true,
      },
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Messages Section */}
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                  >
                    <Avatar>
                      <AvatarImage
                        src={message.sender.avatar}
                        alt={message.sender.name}
                      />
                      <AvatarFallback>
                        {message.sender.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium">{message.sender.name}</h3>
                      <p className="text-sm text-gray-500 truncate">
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Rooms Section */}
          <Card>
            <CardHeader>
              <CardTitle>Chat Rooms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {chatRooms.map((room) => (
                  <div
                    key={room.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      {room.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium">{room.name}</h3>
                      <p className="text-sm text-gray-500 truncate">
                        {room.lastMessage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Live Chat */}
        <Card>
          <CardHeader>
            <CardTitle>Live Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-6">
                {liveChatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-4 ${
                      message.sender.isCurrentUser ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Avatar>
                      <AvatarImage
                        src={message.sender.avatar}
                        alt={message.sender.name}
                      />
                      <AvatarFallback>
                        {message.sender.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`relative max-w-[80%] rounded-lg p-4 text-sm ${
                        message.sender.isCurrentUser
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="mt-4">
              <form className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
