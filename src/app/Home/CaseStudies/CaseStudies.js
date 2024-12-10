// CaseStudies.js

import React from "react";
import ElementorButton from "../../../components/elementorButton/elementorButton";
import CarouselSlider from "../../../components/Carousel/CarouselSlider";
import projectsData from "../../Projects/ProjectsData";

function CaseStudies() {
    projectsData.sort((a, b) => a.id - b.id);
  return (
    <div className="container py-5">
      <div style={{ display: "flex", position: "relative" }}>
        <div
          style={{
            width: "60px",
            backgroundColor: "#1f1f1f",
            height: 5,
            marginTop: 5,
            marginRight: 10,
            position: "absolute",
            left: "-65px",
          }}
        >
          {/* dash */}
        </div>
        <div>
          <h2 className="Heading_title-black">
            SUCCESS
            <br />
            STORIES
          </h2>
          <p className="gf_text pt-2 home-p">
            The stories behind the stats—buckle up for a joyride through our
            case studies where real brands find their digital groove.
          </p>
        </div>
      </div>
      <CarouselSlider projects={projectsData}/>
      <br />
      <ElementorButton
        mode="light"
        text="TAKE A PEEK!"
        URL="/projects"
      />
    </div>
  );
}

export default CaseStudies;
