import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    title: "Classic Services",
    price: 25,
    frequency: "/mo",
    features: [
      "Men's Haircut",
      "Kids Haircut (12 & under)",
      "Senior Haircut (65+)",
      "Military/First Responder Cut",
      "Basic Beard Trim",
      "Neck & Line Cleanup (between cuts)",
    ],
    cta: "Book Now",
    isPopular: true,
  },
  {
    title: "Premium Services",
    price: 35,
    frequency: "/mo",
    features: [
      "Haircut & Beard Combo",
      "Hot Towel Shave",
      "Full Beard Shaping & Design",
      "Color Camo (Gray Blending)",
      "Hair & Scalp Treatment",
      "Head Shave with Hot Towel",
    ],
    cta: "Book Now",
  },
  {
    title: "Packages",
    price: 50,
    frequency: "/mo",
    features: [
      "The Works (Cut, Shave, Treatment)",
      "Father & Son Combo",
      "Groom's Package",
      "Monthly Membership (2 cuts/mo)",
      "First-Time Client Special",
      "Loyalty Program",
    ],
    cta: "Book Now",
  },
];

const ServicePlans = () => {
  const [selectedPlanIdx, setSelectedPlanIdx] = useState(0);

  return (
    <section className="bg-[#0F0F0F] text-white py-16 px-4 md:px-10">
      <div className="text-center mb-12">
        <p className="text-yellow-500 font-semibold">
          Quality Barbering at Fair Prices
        </p>
        <h2 className="text-4xl font-bold">
          Our <span className="">Service Prices</span>
          <span className="block h-1 bg-yellow-500 w-40 mt-2 mx-auto rounded"></span>
        </h2>
        <p className="text-gray-400 mt-2">
          Choose from our range of professional barbering services.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, idx) => {
          const isSelected = selectedPlanIdx === idx;

          return (
            <div
              key={idx}
              onClick={() => setSelectedPlanIdx(idx)}
              className={`
                relative rounded-xl border p-6 flex flex-col justify-between cursor-pointer
                bg-[#1A1A1A]
                transition-transform  duration-300 ease-in-out
                ${isSelected
                  ? "border-yellow-500 shadow-xl scale-[1.05]"
                  : "border-neutral-700"
                }
                hover:scale-[1.03] hover:shadow-yellow-600 hover:border-yellow-500
              `}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-sm font-semibold px-3 py-1 rounded-full select-none">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {plan.title}
                </h3>
                <div className="flex items-baseline text-yellow-500 mb-4">
                  <span className="text-xl">$</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-base text-gray-400">
                    {plan.frequency}
                  </span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <FaCheckCircle className="text-yellow-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact-us"><button
                className={`
                  mt-6 w-full py-3 text-center font-semibold rounded-md
                  ${isSelected
                    ? "bg-yellow-500 text-black hover:bg-yellow-400"
                    : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                  }
                `}
              >
                {plan.cta}
              </button></a>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicePlans;
