import React from "react";

const OurStory = () => {
  return (
    <section className="bg-[#121212] text-white py-16 px-6 lg:px-24">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-yellow-500 font-semibold text-lg">Our Story</p>
        <h2 className="text-4xl font-extrabold mt-2 mb-4">
          About FBS Barbershop
        </h2>
        <p className="text-gray-300 text-lg">
          Established in 2018, FBS Barbershop has been providing premium grooming
          services to the men of Denton, TX. Our mission is to deliver
          exceptional haircuts and grooming services in a welcoming, classic
          barbershop environment.
        </p>
      </div>

      {/* Content Block */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="relative w-full lg:w-1/2">
          <img
            src="/fbs_shop.jpg" // Replace with your actual image path
            alt="PMC Barbershop Exterior"
            className="rounded-xl shadow-lg w-full"
          />
          <div className="absolute bottom-4 right-4 bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg text-sm">
            5+ years
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="border-l-4 border-yellow-500 pl-4 text-gray-300 text-lg">
            Established in 2018, FBS Barbershop has been providing premium grooming
            services to the men of Denton, TX. Our mission is to deliver exceptional
            haircuts and grooming services in a welcoming, classic barbershop
            environment.
          </p>

          <div className="bg-[#1e1e1e] text-gray-300 p-6 rounded-lg">
            <p className="text-yellow-500 text-3xl leading-none mb-2">“</p>
            <p className="text-base">
              We take pride in our attention to detail and personalized service,
              ensuring each client leaves looking and feeling their best. Our
              skilled barbers combine traditional techniques with modern trends
              to create custom styles that suit each individual's personality and
              lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
