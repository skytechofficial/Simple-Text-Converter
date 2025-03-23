import React from 'react';

const images = [
  {
    src: 'https://plus.unsplash.com/premium_photo-1687892170417-f9a11a402ef7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
    alt: 'Nature Waterfall',
  },
  {
    src: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyfGVufDB8fDB8fHww',
    alt: 'Nature Forest',
  },
  {
    src: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlYW0lMjB3b3JrfGVufDB8fDB8fHww',
    alt: 'Nature Mountain',
  },
  {
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXB1dGVyfGVufDB8fDB8fHww',
    alt: 'Nature River',
  },
  {
    src: 'https://images.unsplash.com/photo-1612814824743-c760091da7f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBkZXNrJTIwaG9tZSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Nature Sunset',
  },
  {
    src: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbXB1dGVyJTIwZGVzayUyMGhvbWUlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D',
    alt: 'Nature Beach',
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Development Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-64 hover:scale-110 transform transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
