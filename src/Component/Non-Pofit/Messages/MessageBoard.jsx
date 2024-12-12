import * as React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../../../shadcn/components/ui/Button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../shadcn/components/ui/Avatar";
import { Card, CardContent } from "../../../shadcn/components/ui/Card";
import avatar from "../../../assets/serviceProvider dashboard/messages/avatar.png";
import { MessagePopup } from "./MessagePopup";
import { Link } from "react-router-dom";

export function MessageBoard() {
  const discussionTopic =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vest";

  const messages = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: `msg-${i}`,
      user: {
        name: "John Doe",
        avatar: avatar,
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore ma",
    }));

  return (
    <div className="container mx-auto p-2 md:p-4 w-full">
      <div className="flex justify-between items-center mb-3 lg:mb-6 lg:flex-row flex-col gap-3 lg:gap-0">
        <div className="flex items-center justify-center gap-2 lg:flex-row">
          <MessageCircle />
          <h1 className="text-xl font-semibold">Message Board</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Back</Button>
          <MessagePopup />
        </div>
      </div>

      <Card className="mb-3 md:mb-8">
        <CardContent className="p-3 lg:p-6">
          <div className="space-y-2 lg:space-y-4">
            <h2 className="font-semibold">Discussion Topic</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {discussionTopic}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {messages.map((message) => (
          <Card key={message.id} className="bg-gray-50">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    className="w-full"
                    src={message.user.avatar}
                    alt={message.user.name}
                  />
                  <AvatarFallback>
                    {message.user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-sm">{message.user.name}</h3>
                    <Link to="/nonprofit/livechat">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 -mr-2"
                      >
                        Reply
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 break-words">
                    {message.content}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
