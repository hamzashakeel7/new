import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";

const Message = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Section */}
      <div className="w-1/3 bg-white shadow-md p-4 flex flex-col">
        {/* Messages */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FaFacebookMessenger className="text-purple-600 text-xl mr-2" />
            Messages
          </h2>
          <div className="space-y-4">
            {/* Message Item */}
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-gray-100 rounded-lg hover:shadow-lg"
              >
                <img
                  src="https://via.placeholder.com/40"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-medium text-gray-800">John Doe</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Rooms */}
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FaFacebookMessenger className="text-purple-600 text-xl mr-2" />
            Chat Rooms
          </h2>
          <div className="space-y-4">
            {/* Room Item */}
            {[1, 2, 3].map((room) => (
              <div
                key={room}
                className="flex items-center p-3 bg-gray-100 rounded-lg hover:shadow-lg"
              >
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                  R{room}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Room {room}</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white shadow-md flex flex-col">
        {/* Live Chat Header */}
        <div className="border-b p-4">
          <h2 className="text-lg font-semibold">Live Chat</h2>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Incoming Message */}
          <div className="flex items-start">
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore.
              </p>
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex items-start justify-end">
            <div className="bg-purple-600 text-white p-3 rounded-lg">
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore.
              </p>
            </div>
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              className="w-10 h-10 rounded-full ml-3"
            />
          </div>
        </div>

        {/* Input Box */}
        <div className="border-t p-4 flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 mr-3"
          />
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
