import React, { useState } from "react";
import { FiDownload } from "react-icons/fi"; // Import the download icon
import bgImg from "../../assets/community/bg-img.png";

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
    <div className="relative max-w-2xl mx-auto mb-14 mt-8 p-6 border border-gray-200 rounded-lg">
      {/* Background Image behind the form */}
      <div
        className="absolute inset-0 opacity-50 h-[30rem] w-[30rem]"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border rounded-lg">
              <div
                className="flex justify-between items-center p-4 cursor-pointer text-lg font-semibold text-gray-800 bg-gray-100 rounded-lg"
                onClick={() => toggleOpen(index)}
              >
                <span>{item.question}</span>
                <FiDownload
                  className={`text-gray-500 transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {open === index && (
                <div className="p-4 text-gray-700 bg-gray-50 rounded-b-lg">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 mb-10 border-t border-gray-200">
          <h3 className="text-xl font-semibold mb-4">
            Need Further Assistance
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Company Number"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Location"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Message"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20 md:h-full"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
