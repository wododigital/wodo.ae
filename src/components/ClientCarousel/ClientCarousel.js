import React from 'react';
import './clientcarousel.css';

const ClientCarousel = () => {
  // Array of client logo URLs
  const clientLogos = [
    'https://wodo.digital/media/2022/06/godaddy-logo-2-1.png',
    'https://wodo.digital/media/2022/06/godaddy-logo-2-1.png',
    'https://wodo.digital/media/2022/06/godaddy-logo-2-1.png',
    'https://wodo.digital/media/2022/06/godaddy-logo-2-1.png',
    'https://wodo.digital/media/2022/06/godaddy-logo-2-1.png',
  ];

  return (
    <div className="position-relative overflow-hidden">
      {/* Scrolling container */}
      <div className="d-flex w-200 gap-4 animate-loop">
        {/* Duplicate image sets for continuous scroll */}
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="d-flex gap-4">
            {clientLogos.map((logo, i) => (
              <div key={i} className="position-relative">
                <img
                  src={logo}
                  alt={`Client logo ${i + 1}`}
                  className="w-20 h-auto grayscale transition duration-500 ease-in-out hover-grayscale-0"
                  width={150}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
