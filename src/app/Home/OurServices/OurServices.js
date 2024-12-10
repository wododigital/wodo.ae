import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OurServices.css";

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: "01.",
      Closedtitle: "01. Design and Branding",
      Opentitle:
        "Create a Powerful Brand Identity with WODO’s Design and Branding Services",
      content: `At WODO, we understand that a strong brand is the foundation of any successful business. Our Design and Branding services are a critical part of our Digital Marketing, Web Design & Development Services suite. We focus on crafting visually stunning and memorable brand identities that resonate with your target audience. From logo design and visual branding to comprehensive brand strategies, we ensure your brand stands out in the crowded digital landscape. Let us help you create a brand that not only looks great but also tells your unique story.`,
      buttonText: "Learn More",
      buttonLink: "/development",
    },
    {
      id: "02.",
      Closedtitle: "02. Web & App Development",
      Opentitle:
        "Build Robust Digital Experiences with WODO’s Development Services",
      content: `Our Development services are a core component of our Digital Marketing, Web Design & Development Services. Whether you need a cutting-edge website, a custom web application, or an e-commerce platform, WODO’s expert developers are here to deliver. We specialize in creating secure, scalable, and user-friendly websites that provide an exceptional user experience across all devices. Our development process is thorough and transparent, ensuring that your website is not only visually appealing but also built to perform, driving your business forward.`,
      buttonText: "Learn More",
      buttonLink: "/design-and-branding",
    },
    {
      id: "03.",
      Closedtitle: "03. Growth Marketing",
      Opentitle:
        "Drive Business Growth with WODO’s Growth and Performance Marketing Services",
      content: `WODO’s Growth and Performance Marketing services are tailored to accelerate your business growth as part of our comprehensive Digital Marketing, Web Design & Development Services. We use data-driven strategies to optimize your marketing efforts and ensure maximum ROI. Our services include targeted campaigns across multiple channels, performance tracking, and continuous optimization to meet your business goals. Whether you’re looking to increase sales, boost engagement, or expand your reach, our team is here to help you achieve sustainable growth`,
      buttonText: "Learn More",
      buttonLink: "/growth-and-performance-marketing",
    },
    {
      id: "04.",
      Closedtitle: "04. SEO Services",
      Opentitle: "Dominate Search Rankings with WODO’s Advanced SEO Services",
      content: `As a key offering within our Digital Marketing, Web Design & Development Services, WODO’s Advanced SEO services help your business achieve top search engine rankings and drive targeted organic traffic to your website. We employ the latest SEO techniques, including on-page optimization, technical SEO, and high-quality link building, to improve your website’s visibility. Our SEO experts also focus on creating content that not only ranks well but also engages your audience and converts visitors into customers. Stay ahead of the competition with WODO’s cutting-edge SEO strategies`,
      buttonText: "Learn More",
      buttonLink: "/growth-and-performance-marketing",
    },
  ];

  const Slide = ({
    id,
    Closedtitle,
    Opentitle,
    content,
    isActive,
    onClick,
    buttonText,
    buttonLink,
  }) => {
    return (
      <li className={`slide ${isActive ? "slides-active" : ""}`} onClick={onClick}>
        <Link href="#" className="action">
          <span>{id}</span>
          <span>{isActive ? Opentitle : Closedtitle}</span>
        </Link>
        <div className="slide-content">
          {isActive && (
            <>
              <div>
                <span className="service-id">{id}</span>
                <h3>{Opentitle}</h3>
                <p>{content}</p>
                <Link to={buttonLink} className="slide-button">
                  {buttonText}
                </Link>
              </div>
            </>
          )}
        </div>
      </li>
    );
  };

  return (
    <>
      <div className="container pt-md-5 pt-2 pb-2">
        <div className="row">
            <div className="col-xl-6 col-12">
            <h2 className="gf_h2">
          OUR
          <br />
          SERVICES
        </h2>
            </div>
            <div className="col-xl-6 col-12">
            <p className="gf_text pt-2">
          Discover how our expert services in Design and Branding, Development,
          Growth and Performance Marketing, and Advanced SEO can transform your
          business
        </p>
            </div>
        </div>


      </div>
      <div className="container pt-3 pt-md-3 pb-3 pb-md-5">
        <div className="container-slides">
          <ul className="slides">
            {slides.map((slide, index) => (
              <Slide
                key={index}
                id={slide.id}
                Closedtitle={slide.Closedtitle}
                Opentitle={slide.Opentitle}
                content={slide.content}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                buttonText={slide.buttonText}
                buttonLink={slide.buttonLink}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OurServices;