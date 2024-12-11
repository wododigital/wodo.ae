import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./services.css";
import ServiceGrid from "../../components/ServiceGrid/ServiceGrid";
import LogoGrid from "../../components/LogoGrid/LogoGrid";
import CarouselSlider from "../../components/Carousel/CarouselSlider";
import { Helmet } from "react-helmet-async";
import ProjectsData from "../Projects/ProjectsData";
import BaseURL from "../../components/other/BaseURL";

function GrowthPerformanceMarketing() {
  // const location = useLocation();
  // const canonicalUrl = `https://wodo.digital${location.pathname}`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const marketingImages = [
  //   {
  //     id: 1,
  //     img: "" + BaseURL + "/media/2022/04/WODO-Branding-6.jpg",
  //   },
  //   {
  //     id: 2,
  //     img: "" + BaseURL + "/media/2022/04/WODO-Branding-6.jpg",
  //   },
  //   {
  //     id: 3,
  //     img: "" + BaseURL + "/media/2022/04/WODO-Branding-6.jpg",
  //   },
  //   {
  //     id: 4,
  //     img: "" + BaseURL + "/media/2022/04/WODO-Branding-6.jpg",
  //   },
  // ];
  return (
    <>
      <Helmet>
        <title>Digital Marketing & Performance Services UAE | WODO</title>
        <meta
          name="description"
          content="Achieve growth with WODO’s digital marketing and performance services in UAE, including PPC, targeted ads, and data-driven SEO strategies.​"
        />
        <meta
          name="keywords"
          content="growth marketing, performance strategies, targeted campaigns​​​"
        />
        <meta
          property="og:title"
          content="Results-Driven Growth & Performance Marketing for UAE - WODO"
        ></meta>
        <meta
          property="og:description"
          content="Unlock your business’s potential with WODO’s data-driven performance marketing strategies, crafted for UAE audiences to increase traffic, engagement, and conversions."
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
              <h5 className="gf_h5 services-h5-light">
                Growth & Performance Marketing
              </h5>
              <h3 className="gf_h3 services-h3 py-4">
                Fuel Your Brand Explosion: Growth & Performance Marketing
              </h3>
              {/* <ElementorButton
                URL="/about-us"
                text="Flip Through"
                mode="dark"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <h5 className="gf_h5 services-h5-dark">Performance Marketing</h5>
          <h4 className="services-h4 py-3">
            Performance Marketing Built to Thrill: Reach, Convert, Dominate
          </h4>
          <div className="row d-flex align-items-center">
            <div className="col">
              <p className="gf_text m-0">
                Forget cookie-cutter campaigns and one-size-fits-all tactics. At
                WODO, we craft{" "}
                <span style={{ fontWeight: 700 }}>
                  digital experiences that dance with your audience
                </span>
                . Every industry has its own rhythm, and we know how to move to
                its beat. Think of us as your marketing maestros, weaving
                stories that grab your customers by the heart and lead them
                straight to your checkout basket. It's not just about pixels and
                algorithms; it's about{" "}
                <span style={{ fontWeight: 700 }}>
                  understanding souls and sparking desires.
                </span>
              </p>
            </div>
          </div>
          <div className="row number-box my-3">
            <div className="col-12 col-md-4">
              <div className="number-box-number text-center">28%</div>
              <div className="number-box-text gf_text">
                of “nearby” or “near me” searches end in a purchase.
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="number-box-number text-center">43%</div>
              <div className="number-box-text gf_text">
                clients are spending 43% more on digital marketing post pandemic
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="number-box-number text-center">35%</div>
              <div className="number-box-text gf_text">
                increase in revenue growth by investing on google ads.
              </div>
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
                  image:
                    "" + BaseURL + "/media/2022/03/social-media-marketin.svg",
                  text: "SOCIAL MEDIA MARKETING",
                },
                {
                  image:
                    "" + BaseURL + "/media/2022/03/ppc-lead-generation.svg",
                  text: "GOOGLE ADS LEAD GENERATION",
                },
                {
                  image: "" + BaseURL + "/media/2022/03/wodo-icons-04.svg",
                  text: "EMAIL MARKETING",
                },
                {
                  image: "" + BaseURL + "/media/2022/03/native-ads.svg",
                  text: "NATIVE & APP ADS",
                },
                {
                  image: "" + BaseURL + "/media/2022/03/basic-n-advanc-seo.svg",
                  text: "BASIC & ADVANCED SEO",
                },
                {
                  image:
                    "" + BaseURL + "/media/2022/03/social-media-managment.svg",
                  text: "SOCIAL MEDIA MANAGEMENT",
                },
                {
                  image:
                    "" +
                    BaseURL +
                    "/media/2022/03/stratergy-and-consutaion.svg",
                  text: "STRATEGY & CONSULTATION",
                },
                {
                  image:
                    "" +
                    BaseURL +
                    "/media/2022/03/converstion-and-optimisation.svg",
                  text: "CONVERSION OPTIMISATION",
                },
                {
                  image:
                    "" +
                    BaseURL +
                    "/media/2022/03/user-analytics-and-research.svg",
                  text: "USER ANALYTICS & RESEARCH",
                },
                {
                  image: "" + BaseURL + "/media/2022/04/Content-writing.svg",
                  text: "CONTENT WRITING",
                },
                {
                  image: "" + BaseURL + "/media/2022/03/video-production.svg",
                  text: "VIDEO ADS PRODUCTION",
                },
                {
                  image: "" + BaseURL + "/media/2022/03/ad-photpshoot.svg",
                  text: "PRODUCT PHOTOGRAPHY",
                },
              ]}
            />
          </div>
        </div>
      </div>
      {/* <div className="container py-2 py-md-5">
        <div className="row">
          <div className="col">
            <ImageSlider images={marketingImages.map((image) => image.img)} />
          </div>
        </div>
      </div> */}
      <div className="container py-2 py-md-5">
        <div className="row">
          <div className="col">
            <h2 className="gf_h2 services-h2 pb-3">
              Toolkit <br />
              We Use
            </h2>
            <LogoGrid
              logos={[
                {
                  logo: "" + BaseURL + "/media/2022/03/WODO-facebook-Meta.jpg",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2022/03/WODO-Mailchimp.jpg",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2022/03/WODO-ahref-logo.jpg",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2022/03/WODO-Semrush.jpg",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2022/03/wodo-gads.jpg",
                  URL: "",
                },
                {
                  logo:
                    "" + BaseURL + "/media/2022/03/WODO-Google-Analytics.jpg",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2022/03/Active-Campaign.png",
                  URL: "",
                },
                {
                  logo:
                    "" + BaseURL + "/media/2022/03/WODO-Microsoft-Clarity.jpg",
                  URL: "",
                },
                {
                  logo:
                    "" + BaseURL + "/media/2022/03/wodo-mixpanel-logo-1.jpg",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2022/03/WODO-Similar-Web.jpg",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2022/03/WODO-Converter-Kit.jpg",
                  URL: "",
                },
                {
                  logo: "" + BaseURL + "/media/2022/03/WODO-Splitbee.jpg",
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
                logo: "" + BaseURL + "/media/2023/03/Godrej-Logo.jpg",
                URL: "",
              },
              {
                logo:
                  "" + BaseURL + "/media/2023/04/WODO-Clients-Hasiruagro-2.png",
                URL: "",
              },
              {
                logo: "" + BaseURL + "/media/2021/10/MDS-Logo.png",
                URL: "",
              },
              {
                logo: "" + BaseURL + "/media/2021/10/Tankerwala-Logo.png",
                URL: "",
              },
              {
                logo: "" + BaseURL + "/media/2023/04/WODO-Cient-Lenskart.png",
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
                logo:
                  "" + BaseURL + "/media/2023/04/WODO-Clients-Rightcon-1.png",
                URL: "",
              },
              {
                logo:
                  "" + BaseURL + "/media/2023/04/WODO-Clients-Leadrat-1.png",
                URL: "",
              },
              {
                logo:
                  "" + BaseURL + "/media/2023/04/WODO-Clients-Gharoffice-1.png",
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

      <Footer />
    </>
  );
}

export default GrowthPerformanceMarketing;
