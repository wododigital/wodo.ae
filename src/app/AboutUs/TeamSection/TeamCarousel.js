import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TeamCard from "./TeamCard";
import { useRef } from "react";
import API_URL from "../../../config";


function TeamCarousel({ teamData }) {

  const slider = useRef(null);
  var leftIcon = `<svg class='leftIconsvg' viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M119 47.3166C119 48.185 118.668 48.9532 118.003 49.6212L78.8385 89L118.003 128.379C118.668 129.047 119 129.815 119 130.683C119 131.552 118.668 132.32 118.003 132.988L113.021 137.998C112.356 138.666 111.592 139 110.729 139C109.865 139 109.101 138.666 108.436 137.998L61.9966 91.3046C61.3322 90.6366 61 89.8684 61 89C61 88.1316 61.3322 87.3634 61.9966 86.6954L108.436 40.002C109.101 39.334 109.865 39 110.729 39C111.592 39 112.356 39.334 113.021 40.002L118.003 45.012C118.668 45.68 119 46.4482 119 47.3166Z" fill="black"></path></svg>`;
  var rightIcon = `<svg class='rightIconsvg' viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M119 47.3166C119 48.185 118.668 48.9532 118.003 49.6212L78.8385 89L118.003 128.379C118.668 129.047 119 129.815 119 130.683C119 131.552 118.668 132.32 118.003 132.988L113.021 137.998C112.356 138.666 111.592 139 110.729 139C109.865 139 109.101 138.666 108.436 137.998L61.9966 91.3046C61.3322 90.6366 61 89.8684 61 89C61 88.1316 61.3322 87.3634 61.9966 86.6954L108.436 40.002C109.101 39.334 109.865 39 110.729 39C111.592 39 112.356 39.334 113.021 40.002L118.003 45.012C118.668 45.68 119 46.4482 119 47.3166Z" fill="black"></path></svg>`;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container py-4 fadeInUp-animation">
        <div className="row">
          <div className="text-end">
            <button
              className=" arrow-btn"
              onClick={() => slider?.current?.slickPrev()}
            >
              {" "}
              <div dangerouslySetInnerHTML={{ __html: leftIcon }} />{" "}
            </button>
            <button
              className=" right-icon arrow-btn"
              onClick={() => slider?.current?.slickNext()}
            >
              <div dangerouslySetInnerHTML={{ __html: rightIcon }} />
            </button>
          </div>

          <Slider ref={slider} {...settings}>
            {teamData.map((item, index) => (
              <TeamCard
                key={index}
                name={item.name}
                designation={item.designation}
                linkedinUrl={JSON.parse(item.social_links).linkedin}
                image={`${API_URL}/media/team-profiles/${item.id}/${item.profile}`}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default TeamCarousel;
