import { FaMapMarkerAlt, FaPhoneAlt, FaDirections } from "react-icons/fa";

const OurLocation = () => {
  return (
    <section className="bg-[#111111] py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-yellow-500 font-semibold uppercase">Visit Our Shop</p>
        <h2 className="text-4xl font-bold mt-2 mb-2">Our Location</h2>
        <span className="block h-1 bg-yellow-500 w-40 mt-2 mx-auto rounded"></span>
        <p className="text-gray-400">Conveniently located in Denton, TX:</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Map Placeholder */}
        <div className="bg-[#1e1e1e] rounded-md border border-gray-700 h-80 flex items-center justify-center">
          <FaMapMarkerAlt className="text-gray-600 text-5xl" />
        </div>

        {/* Contact Info Card */}
        <div className="bg-[#1e1e1e] rounded-md border border-gray-700 p-6">
          <h3 className="text-xl font-semibold mb-6 relative">
            Contact Information
          </h3>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-yellow-500 p-3 rounded-full">
              <FaMapMarkerAlt className="text-black text-lg" />
            </div>
            <div>
              <p className="font-bold">Address</p>
              <p className="text-gray-400 text-sm">
               500 N Bell Ave #109, Denton, TX 76209, United States
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-yellow-500 p-3 rounded-full">
              <FaPhoneAlt className="text-black text-lg" />
            </div>
            <div>
              <p className="font-bold">Phone</p>
              <p className="text-gray-400 text-sm">+1 940 612 9127</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md flex items-center gap-2 text-sm font-semibold hover:bg-yellow-400 transition">
              <FaDirections />
              Get Directions
            </button>
            <button className="bg-[#111111] border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition">
              Call Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
