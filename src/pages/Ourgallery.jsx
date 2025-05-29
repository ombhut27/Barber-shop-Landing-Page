import React from 'react';

const galleryImages = [
  {
    src: '/gallery.jpg', // Replace with actual paths or imported images
    alt: 'Haircut Detail',
  },
  {
    src: '/gallery_1.jpg',
    alt: 'Barbershop Front',
  },
  {
    src: '/gallery_2.jpg',
    alt: 'Awards and Trophies',
  },
];

const GallerySection = () => {
  return (
    <section className="bg-[#121212] text-white py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <p className="text-yellow-500 font-semibold">Our Work & Shop</p>
        <h2 className="text-4xl font-bold mb-2">
          Our <span className="">Barbershop Gallery</span>
          <span className="block h-1 bg-yellow-500 w-40 mt-2 mx-auto rounded"></span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-md">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full  transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
