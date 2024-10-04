import React from "react";
import profile1 from "../assets/profile1.jpeg";
import profile2 from "../assets/profile2.jpeg";
import profile3 from "../assets/profile3.jpg";
import { IoIosArrowForward } from "react-icons/io";
import heroImg from "../assets/hero-image.png";
const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center bg-emerald-950 text-orange-50">
      <div className="w-full  p-8 md:w-1/2 ">
        <div className="mb-4 flex space-x-2">
          <img
            src={profile1}
            alt="profile1"
            className="w-12 h-12 rounded-full border-2 border-orange-50"
          />
          <img
            src={profile2}
            alt="profile2"
            className="w-12 h-12 rounded-full border-2 border-orange-50"
          />
          <img
            src={profile3}
            alt="profile3"
            className="w-12 h-12 rounded-full border-2 border-orange-50"
          />
        </div>
        <h1 className="text-4xl tracking-tighter md:text-5xl lg:text-7xl">
          We Create Impactful ads that
          <span className="text-orange-300"> Elevate</span> Your Brand
        </h1>
        <button className="mt-8 flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-2 text-orange-50 hover:bg-orange-300 hover:text-emerald-950">
          <span>Know More</span>
          <IoIosArrowForward />
        </button>
      </div>
      <div className="w-full md:w-1/2 lg:p-8">
        <img src={heroImg} alt="hero" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Hero;
