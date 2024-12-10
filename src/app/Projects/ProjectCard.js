import React from 'react';
import '../../components/Carousel/CarouselCard.css';
import icon from '../../media/right-arrow.svg';
import { Link } from 'react-router-dom';


const ProjectCard = ({title,url,tags,description,backgroundImage}) => {
  const cardStyle = {
    backgroundImage: `url("${backgroundImage}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    color: 'white',
    borderRadius: '15px',
  };

  return (

    <Link to={`/projects/${url}/`}>
    <div className="card mx-2 border-0">
      <div className="card-body carousel-body" style={cardStyle}>
        <Link to={`/projects/${url}/`} className="card-content carousel-content" style={{ textDecoration: 'none', color: '#fff' }}>
          <h2 className="card-title">{title}</h2>
          <h3 className="card-text">{description}</h3>
          <span className="link-icon">
            <img src={icon} alt="Link Icon" width="25" />
          </span>
            <p className="tags">
              {tags.map((tag, index) => (
                <span key={index} className="tag_badge">{tag}</span>
              ))}
            </p>
        </Link>
      </div>
    </div>
    </Link>
  );
};

export default ProjectCard;
