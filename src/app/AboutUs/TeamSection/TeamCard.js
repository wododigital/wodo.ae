import React from 'react';
import './TeamCard.css';
import linkedinicon from './linkedin.svg'

const TeamCard = ({ name, designation, linkedinUrl, image, instagramUrl, }) => {

  return (
    <div className="card mx-2 border-0">
    <img src={image} class="card-img-top team-image" alt="Wodo Team"></img>
      <div className="card-body team-card">
        <div className="card-content team-card-content">
        <h3 className="card-title team-name">{name}</h3>
        <p className="card-text team-designation gf_text">{designation}</p>
        <div className="icon-div d-flex">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-icon me-3">
            <img src={linkedinicon} alt="LinkedIn icon" width="25" />
          </a>
          {/* <Link to={instagramUrl} className="social-icon">
            <img src={instaicon} alt="Instagram Icon" />
          </Link> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;