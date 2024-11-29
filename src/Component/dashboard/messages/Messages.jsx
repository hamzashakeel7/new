import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";

const Message = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left Section */}
      <div className="w-full md:w-1/3 bg-white shadow-md p-4 flex flex-col">
        {/* Messages */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
          <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 7.25H19.25M6.75 12.25H19.25M24.25 21L20.0946 18.9222C19.7796 18.7647 19.6221 18.686 19.457 18.6305C19.3105 18.5812 19.1596 18.5456 19.0065 18.5241C18.834 18.5 18.6579 18.5 18.3058 18.5H5.75C4.34986 18.5 3.6498 18.5 3.11503 18.2275C2.64461 17.9879 2.26216 17.6054 2.02249 17.135C1.75 16.6002 1.75 15.9001 1.75 14.5V5C1.75 3.59986 1.75 2.8998 2.02249 2.36502C2.26216 1.89461 2.64461 1.51216 3.11503 1.27249C3.6498 1 4.34987 1 5.75 1H20.25C21.6501 1 22.3503 1 22.885 1.27249C23.3554 1.51216 23.7379 1.89461 23.9775 2.36502C24.25 2.8998 24.25 3.59987 24.25 5V21Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            Messages
          </h2>
          <div className="space-y-4">
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
          <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 7.25H19.25M6.75 12.25H19.25M24.25 21L20.0946 18.9222C19.7796 18.7647 19.6221 18.686 19.457 18.6305C19.3105 18.5812 19.1596 18.5456 19.0065 18.5241C18.834 18.5 18.6579 18.5 18.3058 18.5H5.75C4.34986 18.5 3.6498 18.5 3.11503 18.2275C2.64461 17.9879 2.26216 17.6054 2.02249 17.135C1.75 16.6002 1.75 15.9001 1.75 14.5V5C1.75 3.59986 1.75 2.8998 2.02249 2.36502C2.26216 1.89461 2.64461 1.51216 3.11503 1.27249C3.6498 1 4.34987 1 5.75 1H20.25C21.6501 1 22.3503 1 22.885 1.27249C23.3554 1.51216 23.7379 1.89461 23.9775 2.36502C24.25 2.8998 24.25 3.59987 24.25 5V21Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            Chat Rooms
          </h2>
          <div className="space-y-4">
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
        <div className="border-t p-4 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 sm:mr-3 w-full sm:w-auto"
          />
          <button className="w-full sm:w-auto bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
