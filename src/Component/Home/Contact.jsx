import * as React from "react";
import contact from "../../assets/home/contact/contact.jpg";
import contact1 from "../../assets/home/contact/contact1.jpg";
import contact2 from "../../assets/home/contact/contact2.jpg";
import contact3 from "../../assets/home/contact/contact3.jpg";

const Contact = () => {
  const images = [contact1, contact2, contact3];
  const titles = ["Partner With Us", "Trusted Voices", "Join Our Team"];

  return (
    <div className="">
      <h2 className="text-center text-3xl font-bold text-purple-600 mb-8">
        Contact Us
      </h2>
      <div className="relative w-full lg:max-w-[75vw] mx-auto h-64">
        {/* Larger background box with image and overlay */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <img
            src={contact}
            alt="contactbg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Three overlay boxes */}
        <div className="absolute inset-0 flex justify-center items-center gap-6">
          {titles.map((title, index) => (
            <div
              key={index}
              className="relative w-64 h-40 overflow-hidden rounded-lg border-2 border-transparent hover:border-purple-600 transition"
            >
              <img
                src={images[index]} // Access image using index
                alt={title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 hover:bg-black/30 hover:text-black flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
