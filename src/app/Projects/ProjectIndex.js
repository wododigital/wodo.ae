import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cta from "../Home/cta/Cta";
import ProjectsData from "./ProjectsData";
import ProjectCard from "./ProjectCard";
import { Helmet } from "react-helmet-async";

function ProjectHeroSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="Project_HeroSection">
        <div className="hero_backgroung_image">
          <div className="background_overlay"></div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: -65, left: 0, right: 0 }}>
              <div className="container">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      backgroundColor: "#fff",
                      height: 5,
                      marginTop: 5,
                      marginRight: 10,
                      position: "absolute",
                      left: "-65px",
                    }}
                  ></div>
                  <div className="mobile_heading">
                  <h1 className="Heading_title">Real-World Success</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BodySection({ projects }) {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleIndustryChange = (e) => {
    setSelectedIndustry(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const filteredProjects = projects.filter((project) => {
    return (
      (selectedIndustry === "" || project.industry === selectedIndustry) &&
      (selectedType === "" || project.type.includes(selectedType))
    );
  });

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="py-3 text-center">
              <select
                className="dropDownProject"
                value={selectedIndustry}
                onChange={handleIndustryChange}
              >
                <option value="">Industry</option>
                <option value="Agency">Agency</option>
                <option value="Corporate">Corporate</option>
                <option value="Crypto">Crypto</option>
                <option value="eCommerce">eCommerce</option>
                <option value="Education">Education</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Medical">Medical</option>
                <option value="Non-Profit">Non-Profit</option>
                <option value="Photography">Photography</option>
                <option value="Real Estate">Real Estate</option>
                <option value="SaaS">SaaS</option>
                <option value="Startups">Startups</option>
                <option value="Textile">Textile</option>
                <option value="Travel">Travel</option>
              </select>
            </div>
          </div>
          {/* <div className="col-12 col-md-6">
            <div className="py-3">
              <select
                className="dropDownProject"
                value={selectedType}
                onChange={handleTypeChange}
              >
                <option value="">Type of Project</option>
                <option value="Branding">Branding</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Pay Per Click">Pay Per Click</option>
                <option value="Search Engine Optimization">
                  Search Engine Optimization
                </option>
                <option value="UI/UX">UI/UX</option>
                <option value="Shopify">Shopify</option>
                <option value="Social Media Ads">Social Media Ads</option>
                <option value="Social Media Management">
                  Social Media Management
                </option>
                <option value="Web Development">Web Development</option>
              </select>
            </div>
          </div> */}
        </div>
        <div className="row py-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div key={index} className="col-md-6 py-4">
                <ProjectCard
                  title={project.title}
                  url={project.slug}
                  tags={project.type}
                  description={project.clientExcerpt}
                  backgroundImage={project.banner}
                />
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-4">
              <p>No projects found for the selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function ProjectIndex() {
    // const currentUrl = window.location.href;
  const sortedProjectsData = ProjectsData.sort((a, b) => a.id - b.id);
  return (
    <>
      <Helmet>
        <title>
          Digital Marketing & Web Design Success Stories | Wodo Digital Projects
        </title>
        <meta
          name="description"
          content="Discover how Wodo Digital’s expert digital marketing, web design, and development services have driven success for businesses across industries. Our case studies highlight tailored solutions, innovative strategies, and measurable results."
        />
        <meta
          name="keywords"
          content="Digital Marketing Case Studies, Web Design Success Stories, Development Services Projects, Wodo Digital, Business Transformation, Client Success, Innovative Strategies, Digital Solutions​"
        />
        <meta
          property="og:title"
          content="Digital Marketing & Web Design Success Stories | Wodo Digital Projects"
        ></meta>

        <meta
          property="og:description"
          content="Explore Wodo Digital’s portfolio of successful digital marketing, web design, and development projects. Our case studies showcase the impact of our tailored solutions and innovative strategies on business growth."
        ></meta>
        <meta
          property="og:image"
          content="https://wodo.digital/media/home/featured-image.webp"
        />
        <meta
          property="og:image:alt"
          content="Digital Marketing, Web Design & Development Services at Wodo Digital"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:url" content="https://wodo.ae/projects/" />
      </Helmet>
      <Header />
      <ProjectHeroSection />
      <BodySection projects={sortedProjectsData} />
      <Cta />
      <Footer />
    </>
  );
}

export default ProjectIndex;
