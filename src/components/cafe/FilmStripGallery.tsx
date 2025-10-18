import React from 'react';

interface FilmStripGalleryProps {
  images: string[];
  speed?: number; // duration in seconds for one full scroll
}

const FilmStripGallery: React.FC<FilmStripGalleryProps> = ({ images, speed = 40 }) => {
  // Duplicate images to create a seamless loop
  const duplicatedImages = [...images, ...images];
  
  const animationStyle = {
    animationDuration: `${speed}s`,
  };

  return (
    <div className="film-strip-container w-full h-64 overflow-hidden">
        <div className="film-strip-track h-full py-8" style={animationStyle}>
          {duplicatedImages.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-72 h-full rounded-lg overflow-hidden shadow-lg group cursor-pointer mx-4">
                <img 
                    src={src} 
                    alt={`Cafe vibe ${index}`} 
                    className="w-full h-full object-cover border-4 border-cream-white/20 transition-all duration-300 group-hover:border-saffron-gold group-hover:scale-105"
                />
            </div>
          ))}
        </div>
    </div>
  );
};

export default FilmStripGallery;
