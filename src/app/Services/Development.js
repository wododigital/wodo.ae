import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./services.css";
import ServiceGrid from "../../components/ServiceGrid/ServiceGrid";
// import ImageSlider from "../../components/ImageSlider/ImageSlider";
// import { Link } from "react-router-dom";
import LogoGrid from "../../components/LogoGrid/LogoGrid";
import CarouselSlider from "../../components/Carousel/CarouselSlider";
import { Helmet } from "react-helmet-async";
import ProjectsData from "../Projects/ProjectsData";
import BaseURL from "../../components/other/BaseURL";

function Development() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //   const developmentImages = [
  //     {
  //       id: 1,
  //       img: "" + BaseURL + "/media/2022/04/WODO-Branding-6.jpg",
  //     },
  //     {
  //       id: 2,
  //       img: "" + BaseURL + "/media/2022/04/WODO-Branding-6.jpg",
  //     },
  //     {
  //       id: 3,
  //       img: "" + BaseURL + "/media/2022/04/WODO-Branding-6.jpg",
  //     },
  //     {
  //       id: 4,
  //       img: "" + BaseURL + "/media/2022/04/WODO-Branding-6.jpg",
  //     },
  //   ];
  return (
    <>
      <Helmet>
        <title>Web Design & Development Services in UAE | WODO </title>
        <meta
          name="description"
          content="WODO provides custom web design & development services in UAE, creating responsive, engaging websites tailored to your business needs.​"
        />
        <meta
          name="keywords"
          content="web development, expert services, performance, user experience​​"
        />
        <meta
          property="og:title"
          content="Tailored Web Development Solutions for UAE Businesses - WODO"
        ></meta>
        <meta
          property="og:description"
          content="WODO offers bespoke web development in the UAE, specializing in responsive, user-friendly websites that represent your brand and engage your audience."
        ></meta>
        <meta
          property="og:image"
          content="https://wodo.digital/media/home/featured-image.webp"
        />
      </Helmet>
      <Header />
      <div className="services-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col">
              <h5 className="gf_h5 services-h5-light">Development</h5>
              <h3 className="gf_h3 services-h3 py-md-4 py-2">
                Building Tech-Experiences that Drive Customer Journeys and
                Growth​
              </h3>
              {/* <ElementorButton
                URL="/about-us"
                text="Our Projects"
                mode="dark"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="service-details">
        <div className="container py-5">
          <div className="row">
            <h5 className="gf_h5 services-h5-dark">Efficient Development</h5>
            <h4 className="services-h4 py-3">
              Transform your online presence into unbreakable online dominance
              with cutting-edge web & app development
            </h4>
            <div className="row d-flex align-items-center number-container">
              <div className="col-12 col-md-2 number pe-5">57%</div>
              <div className="col-12 col-md-10">
                <p className="gf_text m-0">
                  of internet users say they won’t recommend a business with a
                  poorly designed website on mobile. Customers judge a business
                  based on their website (Digital first impression). By now, you
                  have a perception about WODO just by looking at our website.
                  Performance and user experience play an essential role in
                  conveying the right message to your target audience when it
                  comes to development.
                </p>
              </div>
            </div>
            <div className="row ps-1">
              <div className="col ps-md-0 ps-4 pt-2">
                <p className="gf_text">
                  At WODO, we specialize in web and app development services
                  that go beyond first impressions. We build magnetic online
                  havens that captivate audiences, convert browsers, and wow
                  search engines. Startups or seasoned pro, we craft
                  unique e-commerce, captivating visuals, and seamless user
                  journeys that turn your online presence into a lead magnet.
                  So, conquer any platform with our native, hybrid, and
                  interactive app mastery, from iOS to AI/ML alchemy that
                  transforms data into gold. We craft user experiences and apps
                  that set you apart, not apart from your sanity. Your SaaS
                  dreams deserve a reality show, and WODO's the director. We
                  guide your software vision from seed to stardom, crafting
                  scalable solutions that personalize, automate, and predict
                  like a pro. Ditch the cookie-cutter, embrace the bespoke.
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
                    image: "" + BaseURL + "/media/2022/03/corporate-web.svg",
                    text: "MOBILE APPS",
                  },
                  {
                    image: "" + BaseURL + "/media/2022/03/e-com-web.svg",
                    text: "Web Development",
                  },
                  {
                    image: "" + BaseURL + "/media/2022/03/web-analytics.svg",
                    text: "AI and ML",
                  },
                  {
                    image:
                      "" + BaseURL + "/media/2022/03/hostin-and-security.svg",
                    text: "PLUGINS",
                  },
                  {
                    image: "" + BaseURL + "/media/2022/03/corporate-web.svg",
                    text: "WEB AUTOMATION",
                  },
                  {
                    image:
                      "" + BaseURL + "/media/2022/03/hostin-and-security.svg",
                    text: "CHROME EXTENSIONS",
                  },
                  {
                    image: "" + BaseURL + "/media/2022/03/corporate-web.svg",
                    text: "SAAS PRODUCTS",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        {/* <div className="container py-2 py-md-5">
        <div className="row">
          <div className="col">
            <ImageSlider images={developmentImages.map((image) => image.img)} />
          </div>
        </div>
      </div> */}
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
                    logo:
                      "" +
                      BaseURL +
                      "/media/2023/12/Development-technologies-logo-2.png",
                    URL: "",
                  },
                  {
                    logo:
                      "" +
                      BaseURL +
                      "/media/2023/12/Development-technologies-logo-6.png",
                    URL: "",
                  },
                  {
                    logo:
                      "" +
                      BaseURL +
                      "/media/2023/12/Development-technologies-logo-5.png",
                    URL: "",
                  },
                  {
                    logo:
                      "" +
                      BaseURL +
                      "/media/2023/12/Development-technologies-logo-4.png",
                    URL: "",
                  },
                  {
                    logo:
                      "" +
                      BaseURL +
                      "/media/2023/12/Development-technologies-logo-3.png",
                    URL: "",
                  },
                  {
                    logo:
                      "" +
                      BaseURL +
                      "/media/2023/12/Development-technologies-logo-1.png",
                    URL: "",
                  },
                  {
                    logo: "" + BaseURL + "/media/2022/03/WODO-HTML.jpg",
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
                    logo: "" + BaseURL + "/media/2022/03/WODO-React-js.jpg",
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
                  logo:
                    "" + BaseURL + "/media/2021/10/The-native-Angadi-Logo.png",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2023/12/wakefit-client-logo.jpg",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2024/04/BKP-logo-.png",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2022/03/Akriti-Kakar.png",
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
                  logo: "" + BaseURL + "/media/2021/10/MDS-Logo.png",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2023/04/WODO-DGTL-1.png",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2023/04/WODO-Clients-TMB-1.png",
                  URL: "",
                },
                {
                  logo:
                    "" +
                    BaseURL +
                    "/media/2023/12/ultraviolette-client-logo.jpg",
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

export default Development;
