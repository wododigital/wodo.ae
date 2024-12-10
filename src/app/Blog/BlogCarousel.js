import React, { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlogItems from "./BlogItems";
import blogData from "./BlogData";

function BlogCarousel() {
  const slider = useRef(null);
  const [shuffledBlogData, setShuffledBlogData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Shuffle blog data when component mounts
    setShuffledBlogData(shuffleArray(blogData));
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const leftIcon = `<svg class='leftIconsvg' viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M119 47.3166C119 48.185 118.668 48.9532 118.003 49.6212L78.8385 89L118.003 128.379C118.668 129.047 119 129.815 119 130.683C119 131.552 118.668 132.32 118.003 132.988L113.021 137.998C112.356 138.666 111.592 139 110.729 139C109.865 139 109.101 138.666 108.436 137.998L61.9966 91.3046C61.3322 90.6366 61 89.8684 61 89C61 88.1316 61.3322 87.3634 61.9966 86.6954L108.436 40.002C109.101 39.334 109.865 39 110.729 39C111.592 39 112.356 39.334 113.021 40.002L118.003 45.012C118.668 45.68 119 46.4482 119 47.3166Z" fill="black"></path></svg>`;

  const rightIcon = `<svg class='rightIconsvg' viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M119 47.3166C119 48.185 118.668 48.9532 118.003 49.6212L78.8385 89L118.003 128.379C118.668 129.047 119 129.815 119 130.683C119 131.552 118.668 132.32 118.003 132.988L113.021 137.998C112.356 138.666 111.592 139 110.729 139C109.865 139 109.101 138.666 108.436 137.998L61.9966 91.3046C61.3322 90.6366 61 89.8684 61 89C61 88.1316 61.3322 87.3634 61.9966 86.6954L108.436 40.002C109.101 39.334 109.865 39 110.729 39C111.592 39 112.356 39.334 113.021 40.002L118.003 45.012C118.668 45.68 119 46.4482 119 47.3166Z" fill="black"></path></svg>`;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container py-4 fadeInUp-animation">
      <div className="row">
        <div className="gf_h3 py-3">Recommended Blogs</div>
        <div className="text-end">
          <button
            className=" arrow-btn"
            onClick={() => slider?.current?.slickPrev()}
          >
            <div dangerouslySetInnerHTML={{ __html: leftIcon }} />
          </button>
          <button
            className=" right-icon arrow-btn"
            onClick={() => slider?.current?.slickNext()}
          >
            <div dangerouslySetInnerHTML={{ __html: rightIcon }} />
          </button>
        </div>
        <Slider ref={slider} {...settings}>
          {shuffledBlogData.map((post) => (
            <div key={post.id}>
              <BlogItems posts={[post]} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BlogCarousel;
