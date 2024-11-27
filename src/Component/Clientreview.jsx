import React from "react";
import clientBg from "../assets/home/prperty/client1.png"; // Replace with actual client review background image
import topRightImg from "../assets/home/prperty/bg.png"; // Replace with actual top-right decorative image
import happyClientsBg from "../assets/home/prperty/bg2.png"; // Replace with actual Happy Clients background image
import c1 from "../assets/home/prperty/client1.png"; // First client image
import c2 from "../assets/home/prperty/client2.png"; // Second client image

const ClientReview = () => {
  const reviews = [
    {
      id: 1,
      quote:
        "The most reliable website ever. For a long time, I have been trying to find tenants for my new condo in Atlanta. I found MCACS and they are very reliable. I need to leave my work for home; their agents handle the whole negotiation and I get my pay immediately.",
      name: "Paul Cooper",
      position: "Landlord, Atlanta USA",
      avatar: c1,
    },
    {
      id: 2,
      quote:
        "Reliable, Friendly, Professionals. I recently moved into town and started getting a new apartment. I have met with a couple of agents and they couldn't provide what I needed. Then I came across MCACS one day and got a new apartment in less than a week.",
      name: "Shelly Ann",
      position: "Tenant",
      avatar: c2,
    },
  ];

  return (
    <>
      {/* Client Review Section */}
      <div className="relative bg-indigo-950 text-white py-16">
        {/* Top-Right Decorative Image */}
        <img
          src={topRightImg}
          alt="Decorative Element"
          className="absolute mb-20 top-[-20px] right-[50px] w-64 h-32 md:w-48 md:h-48"
        />

        {/* Main Content */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-left mb-8">
            What Our Clients are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white text-black rounded-lg shadow-lg p-6 relative"
              >
                <p className="italic text-lg mb-4">"{review.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-14 h-14 rounded-full border-2 border-purple-500"
                  />
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Happy Clients Section */}
      <div
  className="relative bg-cover bg-center py-16"
  style={{ backgroundImage: `url(${happyClientsBg})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white bg-opacity-75 pointer-events-none"></div>

  {/* Content */}
  <div className="relative container mx-auto px-4 text-center">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-4xl font-bold underline">40+</h3>
        <p className="text-lg font-semibold text-black">Happy Clients</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold underline">540+</h3>
        <p className="text-lg font-semibold text-black">Projects Completed</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold underline">300+</h3>
        <p className="text-lg font-semibold text-black">Dedicated Members</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold underline">25+</h3>
        <p className="text-lg font-semibold text-black">Awards Won</p>
      </div>
    </div>
  </div>
</div>

     
    </>
  );
};

export default ClientReview;
