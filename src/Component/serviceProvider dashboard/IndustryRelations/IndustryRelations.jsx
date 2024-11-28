import React from "react";
import { Filter, Clock } from "lucide-react";
import { Button } from "../../../shadcn/components/ui/Button";
import { Input } from "../../../shadcn/components/ui/Input";
import { Badge } from "../../../shadcn/components/ui/Badge";
import industryrelations1 from "../../../assets/serviceProvider dashboard/industry relations/industryrelations1.png";
import { IndustryPopup } from "./IndustryPopup";

export function IndustryRelations() {
  const messageBoards = [
    {
      title: "Technology Discussions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      title: "Meeting Discussions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      title: "Next Agenda Discussions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      title: "Last Meeting Discussions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
  ];

  const chatRooms = [
    {
      id: "1",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid",
      tags: ["Services", "Events"],
    },
    {
      id: "2",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid",
      tags: ["Services", "Events"],
    },
    {
      id: "3",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid",
      tags: ["Services", "Events"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative lg:h-[400px] h-[300px] mb-6">
        <div
          className="absolute inset-0 bg-cover bg-center  rounded-xl"
          style={{
            backgroundImage: `url(${industryrelations1})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center lg:px-4 px-3">
          <h1 className="text-2xl md:text-4xl font-bold md:px-3 flex items-center justify-center text-white mb-6 w-full">
            Industry Relations
          </h1>
          <div className="w-full max-w-3xl flex gap-2 lg:flex-row flex-col">
            <div className="relative flex-1">
              {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /> */}
              <Input
                placeholder="Search for discussions, professionals, or chat rooms"
                className="w-full pl-10 bg-white"
              />
            </div>
            <Button variant="secondary" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter By Topic
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Message Boards */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Message Boards
            </h2>
            <div className="space-y-4">
              {messageBoards.map((board, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium mb-2">{board.title}</h3>
                  <p className="text-sm text-gray-600">{board.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Rooms */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Chat Rooms
            </h2>
            <div className="space-y-4">
              {chatRooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-white p-4 rounded-lg shadow-sm"
                >
                  <h3 className="font-medium mb-2">Chat Room {room.id}</h3>
                  <p className="text-sm text-gray-600 mb-3">{room.message}</p>
                  <div className="flex gap-2">
                    <span className="text-sm text-gray-500">Tags:</span>
                    {room.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={tag === "Services" ? "default" : "secondary"}
                        className="rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6">
              <IndustryPopup />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="w-full flex items-start justify-start flex-col p-5 mt-5">
        <div className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Clock />
          <p className="">Recent Activity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* boxes start */}
          <div className="flex items-start justify-start flex-col bg-[#E9E9E9] p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-3">Post Title</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium iusto blanditiis, quia aut soluta eaque explicabo
              dolorum! Optio, ad distinctio corrupti molestiae, odit magni animi
              labore vel, accusamus aliquam eaque.
            </p>
          </div>
          <div className="flex items-start justify-start flex-col bg-[#E9E9E9] p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-3">Post Title</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium iusto blanditiis, quia aut soluta eaque explicabo
              dolorum! Optio, ad distinctio corrupti molestiae, odit magni animi
              labore vel, accusamus aliquam eaque.
            </p>
          </div>
          <div className="flex items-start justify-start flex-col bg-[#E9E9E9] p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-3">Post Title</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium iusto blanditiis, quia aut soluta eaque explicabo
              dolorum! Optio, ad distinctio corrupti molestiae, odit magni animi
              labore vel, accusamus aliquam eaque.
            </p>
          </div>
          <div className="flex items-start justify-start flex-col bg-[#E9E9E9] p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-3">Post Title</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium iusto blanditiis, quia aut soluta eaque explicabo
              dolorum! Optio, ad distinctio corrupti molestiae, odit magni animi
              labore vel, accusamus aliquam eaque.
            </p>
          </div>
          <div className="flex items-start justify-start flex-col bg-[#E9E9E9] p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-3">Post Title</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium iusto blanditiis, quia aut soluta eaque explicabo
              dolorum! Optio, ad distinctio corrupti molestiae, odit magni animi
              labore vel, accusamus aliquam eaque.
            </p>
          </div>
          <div className="flex items-start justify-start flex-col bg-[#E9E9E9] p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-3">Post Title</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium iusto blanditiis, quia aut soluta eaque explicabo
              dolorum! Optio, ad distinctio corrupti molestiae, odit magni animi
              labore vel, accusamus aliquam eaque.
            </p>
          </div>
          <div className="flex items-start justify-start flex-col bg-[#E9E9E9] p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-3">Post Title</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium iusto blanditiis, quia aut soluta eaque explicabo
              dolorum! Optio, ad distinctio corrupti molestiae, odit magni animi
              labore vel, accusamus aliquam eaque.
            </p>
          </div>
          <div className="flex items-start justify-start flex-col bg-[#E9E9E9] p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-3">Post Title</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium iusto blanditiis, quia aut soluta eaque explicabo
              dolorum! Optio, ad distinctio corrupti molestiae, odit magni animi
              labore vel, accusamus aliquam eaque.
            </p>
          </div>
          <div className="flex items-start justify-start flex-col bg-[#E9E9E9] p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-3">Post Title</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium iusto blanditiis, quia aut soluta eaque explicabo
              dolorum! Optio, ad distinctio corrupti molestiae, odit magni animi
              labore vel, accusamus aliquam eaque.
            </p>
          </div>
          <div className="flex items-start justify-start flex-col bg-[#E9E9E9] p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-3">Post Title</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium iusto blanditiis, quia aut soluta eaque explicabo
              dolorum! Optio, ad distinctio corrupti molestiae, odit magni animi
              labore vel, accusamus aliquam eaque.
            </p>
          </div>
          <div className="flex items-start justify-start flex-col bg-[#E9E9E9] p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-3">Post Title</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium iusto blanditiis, quia aut soluta eaque explicabo
              dolorum! Optio, ad distinctio corrupti molestiae, odit magni animi
              labore vel, accusamus aliquam eaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
