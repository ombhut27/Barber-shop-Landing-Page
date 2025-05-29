import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-yellow-400 font-semibold text-sm sm:text-base">Book Your Appointment</h2>
        <h1 className="text-3xl sm:text-4xl font-bold relative inline-block">
          Contact Us
          <span className="block h-1 bg-yellow-500 w-24 sm:w-32 md:w-40 mt-2 mx-auto rounded"></span>
        </h1>
        <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Ready for a fresh look? Book your appointment today or contact us for any questions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left: Contact Info */}
        <div className="bg-[#1a1a1a] p-6 sm:p-8 rounded-md space-y-6">
          <ContactInfo
            icon="📍"
            title="Address"
            details="500 N Bell Ave #109, Denton, TX 76209, United States"
          />
          <ContactInfo
            icon="📞"
            title="Phone"
            details="+1 940-612-9127"
          />
          <ContactInfo
            icon="⏰"
            title="Business Hours"
            details="Mon-Fri: 9:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM, Sun: Closed"
          />
        </div>

        {/* Right: Contact Form */}
        <form className="bg-[#1a1a1a] p-6 sm:p-8 rounded-md space-y-4">
          <InputField label="Your Name" type="text" placeholder="Enter your full name" />
          <InputField label="Phone Number" type="text" placeholder="Enter your phone number" />
          <div>
            <label className="block text-sm mb-1">Service Interested In</label>
            <select className="w-full p-2 sm:p-3 bg-transparent border border-white rounded outline-none appearance-none text-white">
              <option className="text-black">Select an option</option>
              <option className="text-black">Haircut</option>
              <option className="text-black">Beard Trim</option>
              <option className="text-black">Hot Towel Shave</option>
              <option className="text-black">Haircut & Beard Combo</option>
              <option className="text-black">Kid's Haircut</option>
              <option className="text-black">Senior Haircut</option>
              <option className="text-black">Other</option>
            </select>
          </div>
          <InputField label="Preferred Date" type="date" />
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Tell us about your style preferences or any questions you have"
              className="w-full p-2 sm:p-3 bg-transparent border border-white rounded outline-none resize-none text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-300 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, title, details }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-yellow-400 text-black w-10 h-10 flex items-center justify-center rounded-full text-xl">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-sm sm:text-base">{title}</h4>
      <p className="text-sm text-gray-300">{details}</p>
    </div>
  </div>
);

const InputField = ({ label, type, placeholder }) => (
  <div>
    <label className="block text-sm mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-2 sm:p-3 bg-transparent border border-white rounded outline-none text-sm"
    />
  </div>
);

export default ContactUs;
