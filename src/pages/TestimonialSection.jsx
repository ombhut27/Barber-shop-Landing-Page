import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Mike Johnson',
    rating: 5,
    content: "Costly compared to other barbershops with better haircuts.",
  },
  {
    name: 'David Martinez',
    rating: 5,
    content: "As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!",
  },
  {
    name: 'Chris Taylor',
    rating: 5,
    content: "The hot towel shave experience at PMC Barbershop is phenomenal! It’s the perfect blend of old-school barbering with modern techniques. My beard has never looked better.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-[#121212] text-white py-16 px-4 md:px-10">
      <div className="text-center mb-10">
        <p className="text-yellow-500 font-semibold">Testimonials</p>
        <h2 className="text-3xl font-bold">
          What <span className="text-white ">Our Clients Say</span>
          <span className="block h-1 bg-yellow-500 w-40 mt-2 mx-auto rounded"></span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-[#1c1c1c] p-6 rounded-lg shadow-md flex flex-col justify-between h-full border border-neutral-700
                       hover:border-yellow-500 hover:shadow-yellow-600 hover:scale-[1.03] transition-transform  duration-300 ease-in-out"
          >
            <div>
              <FaQuoteLeft className="text-yellow-700 mb-2" />
              <p className="italic mb-4">{testimonial.content}</p>
              <FaQuoteRight className="text-yellow-700 self-end ml-auto" />
            </div>
            <div className="mt-6 flex items-center border-t border-neutral-700 pt-4">
              <div className="flex text-yellow-500 mr-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="border-l border-yellow-500 pl-2 font-semibold text-white">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
