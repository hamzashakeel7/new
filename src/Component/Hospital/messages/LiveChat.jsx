import * as React from "react";
import { MessageCircleMore, Send } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../shadcn/components/ui/Avatar";
import { Button } from "../../../shadcn/components/ui/Button";
import { Input } from "../../../shadcn/components/ui/Input";
import { ScrollArea } from "../../../shadcn/components/ui/ScrollArea";
import avatar2 from "../../../assets/serviceProvider dashboard/messages/avatar2.png";
import avatar3 from "../../../assets/serviceProvider dashboard/messages/avatar3.png";

export function LiveChat() {
  const [newMessage, setNewMessage] = React.useState("");
  const scrollAreaRef = React.useRef(null);

  const messages = React.useMemo(
    () => [
      {
        id: "1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna",
        sender: {
          name: "John Doe",
          avatar: avatar2,
          isCurrentUser: false,
        },
      },
      {
        id: "2",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna",
        sender: {
          name: "Amanda Smith",
          avatar: avatar3,
          isCurrentUser: true,
        },
      },
      {
        id: "3",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna",
        sender: {
          name: "John Doe",
          avatar: avatar2,
          isCurrentUser: false,
        },
      },
    ],
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    // Handle message submission
    setNewMessage("");
  };

  React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="container mx-auto p-1 lg:p-4 lg:max-w-5xl lg:h-[calc(100vh-6rem)] h-[calc(100vh-8rem)]">
      <div className="flex flex-col h-full bg-white rounded-lg shadow-sm">
        <div className="p-2 lg:p-4 border-b flex items-start justify-start gap-3">
          <MessageCircleMore />
          <h1 className="text-xl font-semibold">Live Chat</h1>
        </div>

        <ScrollArea ref={scrollAreaRef} className="flex-1 p-2 lg:p-4">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4  ${
                  message.sender.isCurrentUser ? "flex-row-reverse" : ""
                }`}
              >
                <Avatar className="h-10 w-10 bg-cover">
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

        <div className="p-4 border-t">
          <form onSubmit={handleSubmit} className="flex gap-2">
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
      </div>
    </div>
  );
}
