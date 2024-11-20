import React from "react";
import { Navbar } from "../Component/Navbar";
import HeroSection from "../Component/Home/HeroSection";
import { PropertySearch } from "../Component/Home/PropertySearch";
import { ServiceSearch } from "../Component/Home/ServiceSearch";
import { Mission } from "../Component/Home/Mission";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <HeroSection />
        <div className="py-10 px-40">
          <PropertySearch />
          <ServiceSearch />
          <Mission />
        </div>
      </div>
    </div>
  );
};

export default Home;
