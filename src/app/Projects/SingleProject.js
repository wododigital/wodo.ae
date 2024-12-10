import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ElementorButton from "../../components/elementorButton/elementorButton";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./style.css";
import CarouselSlider from "../../components/Carousel/CarouselSlider";
import projectsData from "./ProjectsData";
import RightIcon from "../../media/right-arrow.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NotFound from "../../components/NotFound";

const SingleProject = ({ projects }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { slug } = useParams();
  const normalizedSlug = slug.trim().toLowerCase();
  const project = projects.find(
    (proj) => proj.slug.trim().toLowerCase() === normalizedSlug
  );
  if (!project) {
    return <NotFound />;
  }
  projectsData.sort((a, b) => a.id - b.id);
//   const canonicalUrl = `https://wodo.digital/projects/${slug}/`;

  return (
    <>
      <Helmet>
        <title>{project.title}</title>
        <meta name="description" content={project.excerpt} />
      </Helmet>
      <Header />
      <div
        className="singleprojecthero"
        style={{
          backgroundImage: `url(${project.banner})`,
          backgroundColor: project.bannerColour,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12">
              <h2 className="gf_h2 singleprojecthero-h2">{project.title}</h2>
              <p className="gf_text pt-2">{project.projectObjective}</p>
            </div>
            <div className="col-7"></div>
          </div>
        </div>
      </div>
      <div
        className="singleproject-tags py-3"
        style={{
          backgroundColor: project.bannerColour,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12">
              <p className="gf_text">
                Type:
                {project.type.map((type, index) => (
                  <span className="tag-badge" key={index}>
                    {type}
                  </span>
                ))}
              </p>
            </div>
            <div className="col-md-5 col-12">
              <p>
                Industry: <span className="tag-badge">{project.industry}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="project-details">
        <div className="container">
          <div className="row py-md-5 py-3">
            <div className="col-md-4 col-12">
              <h2 className="gf_h2 project-h2">Objective</h2>
            </div>
            <div className="col-md-8 col-12">
              <p className="gf_text">{project.projectObjective}</p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-md-4 col-12">
              <h2 className="gf_h2 project-h2 project-h2">Website</h2>
            </div>
            <div className="col-md-8 col-12">
              <p className="gf_text">{project.websiteExecution}</p>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-center py-md-5 py-3">
            <div className="col-md-10 col-11 fullsite-col">
              <img
                src={project.fullSiteImage}
                alt=""
                className="fullsite-img"
              />
            </div>
            <div className="row py-5">
              <div className="col text-center">
                <ElementorButton URL={project.siteUrl} text="Visit Site" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {project.execution && (
        <div className="container">
          <div className="row py-3">
            <div className="col-md-4 col-12">
              <h2 className="gf_h2 project-h2">Execution</h2>
            </div>
            <div className="col-md-8 col-12">
              <p className="gf_text">{project.execution}</p>
            </div>
          </div>
        </div>
      )}

      {project.services && (
        <div className="services">
          <div className="container py-md-5 py-3">
            <div className="row">
              <div className="col">
                <h2 className="gf_h2 project-h2">Services</h2>
              </div>
            </div>
            <div className="row py-3 d-flex justify-content-between align-items-stretch">
              {project.services.map((service, index) => (
                <div className="col-md-6 col-12" key={index}>
                  <div className="service-item mb-2">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">
                          {service.description}
                        </p>
                      </div>
                      <div className="service-icon">
                        <img
                          src={service.icon}
                          alt={service.title}
                          width="35"
                        />
                      </div>
                    </div>
                    <div className="service-images">
                      {service.images && service.images.length > 0 && (
                        <ImageSlider
                          images={service.images.map((img) => img.url)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {project.results && (
        <div className="results">
          <div className="container py-5">
            <div className="row">
              <div className="col">
                <h2 className="gf_h2 project-h2">Results</h2>
              </div>
            </div>
            <div className="row py-3">
              {project.results.map((result, index) => (
                <div
                  className="col-md-3 col-12 d-flex align-items-stretch justify-content-center"
                  key={index}
                >
                  <div className="results-grid mb-2 text-center w-100">
                    <div className="results-num">
                      <h2 className="results-value">
                        {result.value}
                        {result.unit}
                      </h2>
                    </div>
                    <div className="results-title">
                      <p>{result.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="project-carousel">
        <div className="container py-4">
          <div className="row">
            <div className="col">
              <h2 className="gf_h2 project-h2">View More</h2>
              <CarouselSlider projects={projectsData} />
            </div>
          </div>
        </div>
      </div>

      <div className="ctaSection py-5">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h3 className="gf_h3 text-light text-center fw-bold">
                Like What You See?{" "}
                <span style={{ color: "#f8a925" }}>Talk to us.</span>
              </h3>
              <p className="gf_text text-light text -center py-2">
                Interested in discussing your next project? Request a
                consultation below.
              </p>
              <Link to="/contact/">
                <div className="about-cta-btn py-3">
                  <p className="about-cta-text m-0">Inquire Now</p>
                  <img src={RightIcon} alt="" className="about-cta-icon" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProject;
