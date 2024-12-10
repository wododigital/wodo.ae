import React from "react";
import { Link } from "react-router-dom";
import "./imageSlider.css";

function ImageCard({url, img}) {
  return (
    <div className="card mx-2 border-0">
      <Link to={url} target="_blank">
        <img src={img} className="slider-image card-img-top" alt="" />
      </Link>
    </div>
  );
}

export default ImageCard;
