import React from "react";
import { User, Scissors, Home } from "lucide-react";

const benefits = [
  {
    title: "Expert Barbers",
    icon: <User className="w-5 h-5" />,
    description:
      "Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling.",
  },
  {
    title: "Premium Tools & Products",
    icon: <Scissors className="w-5 h-5" />,
    description:
      "We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin.",
  },
  {
    title: "Classic Barbershop Experience",
    icon: <Home className="w-5 h-5" />,
    description:
      "Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#121212] text-white py-20 px-6 lg:px-24">
      {/* Section Title */}
      <div className="text-center mb-14">
        <p className="text-yellow-500 font-semibold text-lg">Our Commitment</p>
        <h2 className="text-4xl font-bold mt-2 mb-4 relative inline-block">
          Why Choose PMC Barbershop?
          <span className="block h-1 bg-yellow-500 w-40 mt-2 mx-auto rounded"></span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          What makes us the premier barbershop in Denton, TX.
        </p>
      </div>

      {/* Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] p-8 rounded-xl border border-gray-700 relative group
                       hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 ease-in-out"
          >
            {/* Yellow left border on hover */}
            <div className="absolute left-0 top-0 h-full w-1 group-hover:w-1.5 bg-yellow-500 rounded-tl-xl rounded-bl-xl transition-all duration-300"></div>

            {/* Icon */}
            <div className="bg-[#2a2a2a] text-yellow-500 rounded-md px-3 py-2 inline-flex items-center mb-4
                            group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300">
              {item.icon}
              <span className="ml-2 text-sm font-medium">{item.title.split(" ")[0]}</span>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-500 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
