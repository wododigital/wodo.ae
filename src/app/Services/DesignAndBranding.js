import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./services.css";
import ServiceGrid from "../../components/ServiceGrid/ServiceGrid";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import LogoGrid from "../../components/LogoGrid/LogoGrid";
import CarouselSlider from "../../components/Carousel/CarouselSlider";
import { Helmet } from "react-helmet-async";
import ProjectsData from "../Projects/ProjectsData";
import BaseURL from "../../components/other/BaseURL";


function DesignAndBranding() {
  // const location = useLocation();
  // const canonicalUrl = `https://wodo.digital${location.pathname}`;
  const designImages = [
    {
      id: 1,
      img: `${BaseURL}/media/2022/04/WODO-Branding-8.jpg`,
      url: "",
    },
    {
      id: 2,
      img: "" + BaseURL + "/media/2022/04/WODO-Branding-2.jpg",
      url: "",
    },
    {
      id: 3,
      img: "" + BaseURL + "/media/2022/04/WODO-Branding-4.jpg",
      url: "",
    },
    {
      id: 4,
      img: "" + BaseURL + "/media/2022/04/WODO-Branding-5.jpg",
      url: "",
    },
    {
      id: 5,
      img: "" + BaseURL + "/media/2022/04/WODO-Branding-7.jpg",
      url: "",
    },
    {
      id: 6,
      img: "" + BaseURL + "/media/2022/04/WODO-Branding-9.jpg",
      url: "",
    },
    {
      id: 7,
      img: "" + BaseURL + "/media/2022/04/WODO-Branding-1.jpg",
      url: "",
    },
    {
      id: 8,
      img: "" + BaseURL + "/media/2022/04/WODO-Branding-3.jpg",
      url: "",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Expert Design and Branding Services UAE | WODO</title>
        <meta
          name="description"
          content="Transform your brand with WODO’s UAE-focused design, branding, and web design services, including logo creation and complete visual identity."
        />
        <meta
          name="keywords"
          content="design services, branding solutions, visual identity"
        />
        <meta
          property="og:title"
          content="Creative Design & Branding Solutions for UAE Brands - WODO"
        ></meta>

        <meta
          property="og:description"
          content="Boost your brand’s visual appeal with WODO’s UAE-based design and branding services, including logo design, brand strategy, and visual identity creation."
        ></meta>
        <meta
          property="og:image"
          content="https://server-demo.wodo.digital/media/2024/06/fmw.jpg"
        />
      </Helmet>
      <Header />
      <div className="services-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col">
              <h5 className="gf_h5 services-h5-light">Craft. Brand. Thrive.</h5>
              <h2 className="gf_h3 services-h3 py-md-4 py-2">
                Designing brand experiences that drive business growth
              </h2>
              {/* <ElementorButton
                URL="/about-us"
                text="Hop Into Option"
                mode="dark"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="service-details">
        <div className="container py-5">
          <div className="row">
            <h5 className="gf_h5 services-h5-dark">Visual Design</h5>
            <h4 className="services-h4 py-3">
              Visual Branding that Resonates: Beyond Aesthetics, Building
              Meaningful Connections
            </h4>
            <div className="row d-flex align-items-center number-container">
              <div className="col-12 col-md-2 number pe-5">70%</div>
              <div className="col-12 col-md-10">
                <p className="gf_text m-0">
                  Imagine this: you stumble across a brand online. It’s not just
                  beautiful – it speaks to you, whispers possibilities, and
                  sparks a feeling you can’t explain. That’s the power of design
                  at WODO. We’re not just pixel pushers; we’re brand
                  storytellers, unlocking deeper connections through visual
                  magic.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <ServiceGrid
                services={[
                  {
                    image: "" + BaseURL + "/media/2022/03/wodo-icons-02.svg",
                    text: "UI/UX Design",
                  },
                  {
                    image: "" + BaseURL + "/media/2022/03/wodo-icons-04.svg",
                    text: "LOGO Design",
                  },
                  {
                    image: "" + BaseURL + "/media/2022/03/wodo-icons-03.svg",
                    text: "Branding Identity",
                  },
                  {
                    image: "" + BaseURL + "/media/2022/03/wodo-icons-05.svg",
                    text: "Graphic Design",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="container py-2 py-md-5">
          <div className="row">
            <div className="col">
              <ImageSlider images={designImages} />
            </div>
          </div>
        </div>
        <div className="container py-2 py-md-5">
          <div className="row">
            <div className="col">
              <h2 className="gf_h2 services-h2 pb-3">
                Toolkit <br />
                We Use​
              </h2>
              <LogoGrid
                logos={[
                  {
                    logo: "" + BaseURL + "/media/2022/03/WODO-Adobe-XD.jpg",
                    URL: "",
                  },
                  {
                    logo: "" + BaseURL + "/media/2022/03/WODO-illustrator.jpg",
                    URL: "",
                  },
                  {
                    logo:
                      "" + BaseURL + "/media/2022/03/WODO-Google-Analytics.jpg",
                    URL: "",
                  },
                  {
                    logo:
                      "" + BaseURL + "/media/2022/03/WODO-Elementor-Logo.jpg",
                    URL: "",
                  },
                  {
                    logo:
                      "" +
                      BaseURL +
                      "/media/2022/03/WODO-Zeplin-e1647881121637.jpg",
                    URL: "",
                  },
                  {
                    logo:
                      "" + BaseURL + "/media/2022/03/wodo-wordpress-logo.jpg",
                    URL: "",
                  },
                  {
                    logo: "" + BaseURL + "/media/2022/03/Shopify-WODO.jpg",
                    URL: "",
                  },
                  {
                    logo: "" + BaseURL + "/media/2022/03/WODO-CSS.jpg",
                    URL: "",
                  },
                  {
                    logo: "" + BaseURL + "/media/2022/03/WODO-JS.jpg",
                    URL: "",
                  },
                  {
                    logo: "" + BaseURL + "/media/2022/03/WODO-Webflow.jpg",
                    URL: "",
                  },
                  {
                    logo: "" + BaseURL + "/media/2022/03/WODO-React-js.jpg",
                    URL: "",
                  },
                  {
                    logo: "" + BaseURL + "/media/2022/03/WODO-HTML.jpg",
                    URL: "",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="container py-2 py-md-5">
          <div className="row">
            <h2 className="gf_h2 services-h2 pb-3">Our Clients</h2>
            <LogoGrid
              logos={[
                {
                  logo: "" + BaseURL + "/media/2021/10/Hombale-Films-Logo.png",
                  URL: "",
                },
                {
                  logo:
                    "" +
                    BaseURL +
                    "/media/2023/04/WODO-Clients-Gandhadagudi-1.png",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2021/10/MDS-Logo.png",
                  URL: "",
                },
                {
                  logo:
                    "" + BaseURL + "/media/2021/10/The-native-Angadi-Logo.png",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2023/04/WODO-Clients-TMB-1.png",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2021/10/Prollox-logo.png",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2023/04/WODO-Clients-TLE-1.png",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2023/03/Godrej-Logo.jpg",
                  URL: "",
                },
                {
                  logo:
                    "" +
                    BaseURL +
                    "/media/2023/12/ultraviolette-client-logo.jpg",
                  URL: "",
                },
                {
                  logo:
                    "" +
                    BaseURL +
                    "/media/2023/04/WODO-Clients-Hasiruagro-2.png",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2023/04/WODO-DGTL-1.png",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2021/10/Tankerwala-Logo.png",
                  URL: "",
                },
              ]}
            />
          </div>
        </div>
        <div className="container py-2 py-md-5">
          <div className="row">
            <div className="col">
              <h2 className="gf_h2 services-h2 pb-1">
                Our <br />
                Projects
              </h2>
              <CarouselSlider projects={ProjectsData} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DesignAndBranding;
