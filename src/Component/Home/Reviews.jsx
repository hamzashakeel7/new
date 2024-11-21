import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import reviewAvatar from "../../assets/home/contact/reviewAvatar.jpg";
import contact from "../../assets/home/contact/contact.jpg";

export function Reviews() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const testimonials = [
    {
      text: "Auctor augue mauris augue neque. Cras sed felis eget velit aliquet. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
      name: "John",
      title: "Engineer",
      image: reviewAvatar,
    },
    {
      text: "Auctor augue mauris augue neque. Cras sed felis eget velit aliquet. Imperdiet dui accumsan sit.",
      name: "Dave",
      title: "Engineer",
      image: reviewAvatar,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos?",
      name: "Jack",
      title: "Engineer",
      image: reviewAvatar,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-12">
      <h2 className="text-center text-3xl font-bold text-purple-600 mb-8">
        Listen To What Our Members Have To Say
      </h2>
      <div className="relative flex items-center justify-center mx-auto p-10 w-full lg:w-[60vw] h-[28vh]">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <img
            src={contact}
            alt="Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-10 p-2 bg-purple-700 rounded-full shadow-md z-10"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <div className="relative z-10 flex gap-10 items-center bg-transparent text-white p-6 max-w-xl transition-transform duration-500 ease-in-out transform">
          <p className="text-center text-lg mb-4">
            {testimonials[currentIndex].text}
          </p>
          <div className="flex items-center gap-4">
            <div>
              <p className="font-bold">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-white">
                {testimonials[currentIndex].title}
              </p>
            </div>
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="h-20 w-28 rounded-full"
            />
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-10 p-2 bg-purple-700 rounded-full shadow-md z-10"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}
