import React from "react";
import { Navbar } from "../Component/Navbar";
import HeroSection from "../Component/Home/HeroSection";
import { PropertySearch } from "../Component/Home/PropertySearch";
import { ServiceSearch } from "../Component/Home/ServiceSearch";
import { Mission } from "../Component/Home/Mission";
import GatheringGalore from "../Component/Home/GatheringGalore";
import Contact from "../Component/Home/Contact";
import { Reviews } from "../Component/Home/Reviews";
import { PurpleSection } from "../Component/Home/PurpleSection";
import { Fundraising } from "../Component/Home/Fundraising";
import Newsletter from "../Component/Home/Newsletter";
import { Footer } from "../Component/Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
        <HeroSection />
        <div className="lg:py-10 lg:px-40 px-5">
          <PropertySearch />
          <ServiceSearch />
          <Mission />
          <GatheringGalore />
          <Contact />
          <Reviews />
        </div>
        <div>
          <PurpleSection />
        </div>
        <div>
          <Fundraising />
          <Newsletter />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
