import React from "react";

const BarberBanner = () => {
  return (
    <div className="bg-[#121212] text-white py-8 px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Section */}
      <div className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left">
        <p className="text-yellow-500 font-semibold text-sm sm:text-base">
          Fama Barber Shop in Denton
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-2">
          Classic Cuts, Modern Style
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-500 mt-4 border-b-4 border-yellow-600 inline-block">
          Fama Barber Shop
        </h2>

        <p className="text-gray-300 mt-6 text-sm sm:text-base md:text-lg">
          At FBS Barbershop, we combine traditional barbering techniques with
          modern styling to give you the perfect look. Our experienced barbers
          deliver precision cuts, beard grooming, and relaxing hot towel shaves
          in a classic barbershop atmosphere.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 text-gray-400 text-sm sm:text-base">
          <span className="text-yellow-500">📍</span>
          <span>Denton, TX</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
          <a href="#ourservice" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-white text-white py-3 px-6 rounded hover:bg-white hover:text-black transition">
              📞 Our Services
            </button>
          </a>
          <a href="#contact-us" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-yellow-500 text-black py-3 px-6 rounded hover:bg-yellow-600 transition">
              📞 Book Now
            </button>
          </a>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full lg:w-[48%]">
        <img
          src="barber-banner.jpg"
          alt="PMC Barbershop Team"
          className="rounded shadow-lg w-full object-cover"
          style={{ maxHeight: "400px" }}
        />
      </div>
    </div>
  );
};

export default BarberBanner;
