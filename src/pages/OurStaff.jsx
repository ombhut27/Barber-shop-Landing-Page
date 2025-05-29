import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const staffMembers = [
  {
    name: 'Jason Rodriguez',
    role: 'Owner & Master Barber',
    description:
      'With over 15 years of experience, Jason founded PMC Barbershop to bring premium men\'s grooming services to Denton. Specializing in classic cuts and modern styles.',
    image: '/staff_1.jpg',
  },
  {
    name: 'Marcus Williams',
    role: 'Senior Barber',
    description:
      'Marcus brings 8 years of experience to PMC Barbershop. His expertise in fades, beard sculpting, and precision lineup work has earned him a loyal clientele.',
    image: '/staff_2.jpg',
  },
  {
    name: 'Terrence Jackson',
    role: 'Barber & Stylist',
    description:
      'Terrence specializes in modern men\'s styling, textured cuts, and hair designs. With his creative approach and technical skill, he excels at transforming your look.',
    image: '/staff_3.jpg',
  },
];

const OurStaff = () => {
  return (
    <section className="bg-[#121212] text-white py-16 px-6 md:px-12">
      <div className="text-center mb-14">
        <p className="text-yellow-500 font-medium">Expert Stylists</p>
        <h2 className="text-4xl font-bold mt-2 mb-3">
          Meet <span>Our Barbers</span>
          <span className="block h-1 bg-yellow-500 w-40 mt-2 mx-auto rounded"></span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our team of skilled barbers is dedicated to providing you with the perfect cut and grooming experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {staffMembers.map((staff, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-md text-center
                       transform transition-transform duration-300 ease-in-out
                       hover:scale-105 hover:shadow-xl"
          >
            <img
              src={staff.image}
              alt={staff.name}
              className="w-full h-64 object-contain"
            />
            <div className="p-6">
              <div className="w-12 h-1 bg-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold">{staff.name}</h3>
              <p className="text-yellow-500 font-semibold text-sm mt-1">{staff.role}</p>
              <p className="text-gray-400 text-sm mt-3">{staff.description}</p>

              <div className="flex justify-center gap-4 mt-5">
                <a href="#" className="bg-[#2a2a2a] p-2 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
                  <FaInstagram />
                </a>
                <a href="#" className="bg-[#2a2a2a] p-2 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStaff;
