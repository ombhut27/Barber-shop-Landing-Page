import React from "react";
import { Scissors, User, Star } from "lucide-react";

const services = [
  {
    title: "Haircuts",
    description:
      "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.",
    items: ["Classic Cuts", "Modern Styles"],
    icon: <Scissors className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Beard Services",
    description:
      "Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.",
    items: ["Beard Trims", "Beard Shaping"],
    icon: <User className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Premium Services",
    description:
      "Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.",
    items: ["Hair Coloring", "Scalp Treatments"],
    icon: <Star className="w-10 h-10 text-yellow-500" />,
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#121212] text-white py-16 px-4 sm:px-6 lg:px-24">
      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-yellow-500 font-semibold text-base sm:text-lg">Premium Grooming</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 mb-4 relative inline-block">
          Our Barber Services
          <span className="block h-1 bg-yellow-500 w-20 sm:w-24 lg:w-28 mt-2 mx-auto rounded"></span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
          Professional barbering services to keep you looking sharp for everyday confidence or special occasions.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-[#1e1e1e] p-6 sm:p-8 rounded-xl border border-gray-700 
                       hover:shadow-lg hover:scale-[1.02] transform transition-transform duration-300"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-yellow-500 rounded-tl-xl rounded-bl-xl"></div>
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4">{service.description}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
