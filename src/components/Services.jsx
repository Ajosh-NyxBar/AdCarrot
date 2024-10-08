import React, { useState } from "react";
import { SERVICES } from "../constants";

const Services = () => {
  const [activeTab, setActiveTab] = useState(SERVICES[0]);
  return (
    <section
      id="services"
      className="bg-stone-50 p-6
    text-emerald-950"
    >
      <div className="container mx-auto">
        <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
          Our Services
        </h2>
        <div className="flex items-center justify-center space-x-4">
          {SERVICES.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4 py-2 font-semibold tracking-tighter transition-colors lg:text-2xl
                
${
  activeTab.id === tab.id
    ? "bg-emerald-950 text-orange-50"
    : "bg-orange-50 text-emerald-950"
}`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center lg:flex-row">
          <div className="p-4 lg:w-1/2">
            <h2 className="mb-4 text-3xl lg:text-4xl">{activeTab.title}</h2>
            <p className="text-lg tracking-tighter text-emerald-950 lg:text-2xl">
              {activeTab.description}
            </p>
          </div>
          <div className="p-4 lg:w-1/2">
            <img src={activeTab.imgSrc} alt={activeTab.title} className="rounded-3xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
