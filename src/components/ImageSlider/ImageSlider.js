import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImageCard from './ImageCard';

function ImageSlider({ images }) { 

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="container py-4 fadeInUp-animation slider-container">
        <div className="row">
          <Slider {...settings}>
          {images.map((image, index) => (
            <>
                <ImageCard
                  key={index}
                  url={image.url}
                  img={image.img? image.img : image}

                />
            </>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
