import React, { useState } from "react";
import bgImg from "../../assets/community/bg-img.png";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Icons for toggle

export default function Communityform() {
  const [open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqData = [
    {
      question:
        "What is the best way to prevent common illnesses like colds and flu?",
      answer:
        "The best way to prevent common illnesses is by practicing good hygiene, such as washing hands frequently, avoiding close contact with sick individuals, staying hydrated, and getting a flu vaccine annually.",
    },
    { question: "How often should I go for a routine check-up?", answer: "" },
    {
      question: "What should I do if I experience symptoms of COVID-19?",
      answer: "",
    },
    {
      question:
        "How can I manage chronic conditions like diabetes or hypertension?",
      answer: "",
    },
    { question: "What are the benefits of getting vaccinated?", answer: "" },
  ];

  return (
    <div className="relative max-w-full mx-auto mb-14 mt-8 p-6 rounded-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-50 h-[30rem] w-[120vw] rounded-lg"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        left: "-450px",
          top: "-10px",
        }}
      ></div>

      {/* FAQ Content */}
      <h2 className="text-2xl font-bold text-center mb-6 text-black">
  Frequently Asked Questions
</h2>
<div className="relative z-10 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto px-4 sm:px-6 md:px-10">
  <div className="space-y-4 text-left">
    {faqData.map((item, index) => (
      <div
        key={index}
        className="border border-gray-200 rounded-lg shadow-md transition-all duration-300"
      >
        {/* Question */}
        <div
          className="flex justify-between items-center p-4 cursor-pointer text-lg sm:text-xl font-semibold text-gray-800 bg-orange-100 bg-opacity-20 hover:bg-orange-200"
          onClick={() => toggleOpen(index)}
        >
          <span className="text-left text-black">{item.question}</span>
          {open === index ? (
            <FiChevronUp className="text-gray-500" />
          ) : (
            <FiChevronDown className="text-gray-500" />
          )}
        </div>

        {/* Answer */}
        {open === index && (
          <div className="p-4 text-gray-700 bg-orange-100 bg-opacity-20 text-sm sm:text-base">
            {item.answer}
          </div>
        )}
      </div>
    ))}
  </div>


      </div>
      
      <div className="max-w-4xl mx-auto p-8">
  <h2 className="text-2xl font-bold mb-6">Need Further Assistance</h2>
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-gray-700 font-medium mb-2">Name</label>
      <input
        type="text"
        placeholder="Name"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2">Number</label>
      <input
        type="text"
        placeholder="Company Number"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2">Email</label>
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2">Email</label>
      <input
        type="email"
        placeholder="Company Email"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2">Location</label>
      <input
        type="text"
        placeholder="Location"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
    <div className="col-span-1 md:col-span-2">
      <label className="block text-gray-700 font-medium mb-2">Message</label>
      <textarea
        placeholder="Message"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
      ></textarea>
    </div>
    <div className="col-span-1 md:col-span-2">
      <button
        type="submit"
        className="w-full bg-purple-600 text-white rounded-lg p-3 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Submit
      </button>
    </div>
  </form>
</div>

    </div>

  );
}
