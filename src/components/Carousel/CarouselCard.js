import React from "react";
import "./CarouselCard.css";
import icon from "../../media/right-arrow.svg";
import { useNavigate } from "react-router-dom";

const CarouselCard = ({ project }) => {
  const navigate = useNavigate();

  const cardStyle = {
    backgroundImage: `url("${project.banner}")`,
    backgroundSize: "200%",
    backgroundPosition: "center",
    height: "400px",
    color: "white",
    borderRadius: "15px"
  };

  const handleClick = () => {
    navigate(`/projects/${project.slug}/`);
    window.scrollTo(0, 0); // Ensure the page scrolls to the top
  };

  return (
    <div className="card border-0" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="card-body carousel-body animatedBackground" style={cardStyle}>
        <div className="card-content carousel-content" style={{ textDecoration: "none", color: "#fff" }}>
          <h3 className="card-title gf_h6">{project.title}</h3>
          <p className="card-text">
            {project.clientExcerpt.length > 70
              ? `${project.clientExcerpt.substring(0, 70).trim()}...`
              : project.clientExcerpt}
          </p>
          <span className="link-icon">
            <img src={icon} alt="Link Icon" width="25" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
