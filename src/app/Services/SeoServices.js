import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroBg from "../../media/services-hero-bg.webp";
import "./seo.css";
import ElementorButton from "../../components/elementorButton/elementorButton";
import ClientCarousel from "../../components/ClientCarousel/ClientCarousel";
import bingGlobe from "../../media/bing-globe.webp";
import bgFrame1 from "../../media/bg-frame-1.webp";
import bgFrame2 from "../../media/bg-frame-2.webp";
import bgFrame3 from "../../media/bg-frame-3.webp";
import seoGif1 from "../../media/seoGif1.png";
import seoArrow from "../../media/seo-line.png";
import Seocon1 from "../../media/SeoIcon-1.webp";
import Seocon2 from "../../media/SeoIcon-2.webp";
import Seocon3 from "../../media/SeoIcon-3.webp";
import Seocon4 from "../../media/SeoIcon-4.webp";
import Seocon5 from "../../media/SeoIcon-5.webp";
import Seocon6 from "../../media/SeoIcon-6.webp";
import bingBg1 from "../../media/bing-bg-1.webp";
import bingBg2 from "../../media/bing-bg-2.webp";
import Seo1 from "../../media/seo1.webp";
import Seo2 from "../../media/Seo2.webp";
import Seo3 from "../../media/Seo3.webp";
import Seo4 from "../../media/Seo4.webp";
import Seo5 from "../../media/Seo5.webp";
import Seo6 from "../../media/Seo6.webp";
import CtaBg from "../../media/cta.jpg";
import FAQSection from "../../components/Faq's/FAQSection";

function Hero() {
  return (
    <>
      <div
        className="container-fluid py-5 py-lg-5"
        style={{ backgroundImage: `url(${HeroBg})`, backgroundPosition: "top" }}
      >
        <div className="container py-3 py-lg-5">
          <div className="row ">
            <div className="col-md-7 col-sm-12">
              <h5 className="wodo-text py-2">
                Your Gateway to High-Quality Leads in the AI Era with Bing SEO 
              </h5>
              <h1 className="text-white py-2">
                Top-Tier Bing SEO Services to Maximize Your Visibility
              </h1>
              <h5 className="text-white py-2">
                High-Impact Bing SEO Strategies Designed to Drive Real Business
                Results
              </h5>
              <div className="row py-md-4 py-2">
                <div className="col-6 ">
                  <h1 className="wodo-text numbers">25M+</h1>
                  <h6 className="text-white">Monthly Organic Visitors</h6>
                </div>
                <div className="col-6">
                  <h1 className="wodo-text numbers">25M</h1>
                  <h6 className="text-white">Ecommerce Transactions</h6>
                </div>
              </div>
              <div className="row py-md-4 py-2">
                <div className="col-6">
                  <h1 className="wodo-text numbers">475+</h1>
                  <h6 className="text-white">SEO Case Studies</h6>
                </div>
                <div className="col-6">
                  <h1 className="wodo-text numbers">530+</h1>
                  <h6 className="text-white">Ecommerce Projects</h6>
                </div>
              </div>

              <button className="seo-btn my-md-2 mb-md-0 my-4">
                Start Optimizing Now
              </button>
            </div>
            <div
              className="col-sm-12 col-md-5 border border-warning "
              style={{ borderRadius: "10px" }}
            >
              <form>
                <div className="form-row seo-lead-form p-3 p-md-5">
                  <h3 className="text-center wodo-text">
                    Get a Free SEO Audit
                  </h3>
                  <div className="col py-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="col py-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col py-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col py-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Website URL"
                    />
                  </div>
                  <div className="col py-2 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                    />
                  </div>
                  <ElementorButton
                    mode="dark"
                    URL="/"
                    text="Request Free Quote"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function WhyBing() {
  return (
    <>
      <div className="container-fluid py-md-5 py-3">
        <div className="carousel py-md-5 py-3">
          <h3 className="text-center mb-5">
            Global Brands that have trusted us
          </h3>
          <ClientCarousel />
        </div>
        <div className="container py-md-5 py-3">
          <div className="row pt-md-5 pt-3">
            <div className="col-md-8 col-sm-12">
              <h5 className="p-md-3">
                Are You Missing Out on Bing’s Global Search Traffic?
              </h5>
              <p className="p-md-3">
                Bing powers searches on 1.5 billion devices worldwide, including
                Windows computers, Xbox consoles, and mobile phones. With over
                36% of desktop searches conducted on Bing in key regions like
                Europe, Asia, and the Americas, optimizing your site for Bing is
                crucial to accessing a global audience.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 text-end">
              <img src={bingGlobe} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img src="" alt="" />
            </div>
            <div className="col-2"></div>
            <div className="col-2"></div>
            <div className="col-2"></div>
            <div className="col-2"></div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function Opportunities() {
  return (
    <>
      <div className="container-fluid py-lg-5 py-md-3">
        <div className="container py-lg-5 py-md-3">
          <div className="row ">
            <div className="col-md-6 col-sm-12">
              <h5 className="wodo-text fw-regular gf_text">
                Turn the Tide: Why Bing SEO is Your Next Power Play? 
              </h5>
              <h2 className="text-dark py-2">
                Stay Ahead of the Curve with Bing SEO’s Unique Opportunities
              </h2>
              <h5 className="text-dark py-2">
                Ready to Stand Out Where Others Aren’t Looking? Bing SEO Could
                Be Your Secret Weapon for Driving Real Business Results.
              </h5>
              <div className="container">
                <div className="row py-md-4 py-2">
                  <div className="col-6">
                    <h1 className="wodo-text numbers numbers">25M+</h1>
                    <h6 className="text-dark">Monthly Organic Visitors</h6>
                  </div>
                  <div className="col-6">
                    <h1 className="wodo-text numbers">25M</h1>
                    <h6 className="text-dark">Ecommerce Transactions</h6>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row py-md-4 py-2">
                  <div className="col-6">
                    <h1 className="wodo-text numbers">475+</h1>
                    <h6 className="text-dark">SEO Case Studies</h6>
                  </div>
                  <div className="col-6">
                    <h1 className="wodo-text numbers">530+</h1>
                    <h6 className="text-dark">Ecommerce Projects</h6>
                  </div>
                </div>
              </div>
              <button type="button" className="seo-btn mt-4 mb-5 mb-md-0">
                Explore Your Opportunities on Bing
              </button>
            </div>
            <div className="col-md-3">
              <div className="bg-dark rounded p-4 mb-4">
                <h4 className="wodo-text gf_text fw-bold">
                  Capture Unclaimed Visibility
                </h4>
                <p className="fw-light text-light">
                  With fewer brands optimizing for Bing, your company can
                  capture a larger share of voice, positioning you above
                  competitors.
                </p>
              </div>
              <div className="bg-dark rounded p-4">
                <h4 className="wodo-text gf_text fw-bold">
                  Harness Bing’s AI Advantage
                </h4>
                <p className="fw-light text-light">
                  Integration with AI tools like Microsoft Copilot enhances
                  search capability, boosting your content's visibility in
                  AI-powered searches.
                </p>
              </div>
            </div>
            <div className="col-md-3 mt-5">
              <div className="bg-dark rounded p-4 mb-4">
                <h4 className="wodo-text gf_text fw-bold">
                  Capture Unclaimed Visibility
                </h4>
                <p className="fw-light text-light">
                  With fewer brands optimizing for Bing, your company can
                  capture a larger share of voice, positioning you above
                  competitors.
                </p>
              </div>
              <div className="bg-dark rounded p-4">
                <h4 className="wodo-text gf_text fw-bold">
                  Harness Bing’s AI Advantage
                </h4>
                <p className="fw-light text-light">
                  Integration with AI tools like Microsoft Copilot enhances
                  search capability, boosting your content's visibility in
                  AI-powered searches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Services() {
  return (
    <>
      <div className="container-fluid pt-lg-5 pt-3">
        <div className="container py-md-5 py-3">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p className="wodo-text">
                Rank on Bing with Our Comprehensive Bing SEO Services ? 
              </p>
              <h2 className="text-dark">Bing SEO Services Offered by WODO</h2>
              <p className="text-dark">
                Tailored Bing SEO solutions designed for your success.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 text-md-end">
              <button type="button" className="seo-btn my-2">
                Discover Our Full Service Suite
              </button>
            </div>
          </div>
        </div>
        <div className="container py-2 py-md-3">
          <div className="row g-3 justify-content-between">
            <div
              className="col-12 col-lg seo-col p-5"
              style={{
                backgroundImage: `url(${bgFrame1})`,
                backgroundSize: "30%",
                backgroundPosition: "bottom right",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#1F1F1F",
                borderRadius: "10px",
              }}
            >
              <h5 className="text-white fw-bold seo-h4 pb-3">
                Bing Keyword Research & Strategy
              </h5>
              <p className="text-white fw-light gf_text">
                We conduct in-depth research to identify high-impact keywords
                tailored specifically to Bing’s user base, ensuring precise
                targeting and higher rankings.
              </p>
            </div>
            <div
              className="col-12 col-lg seo-col p-5 border border-dark"
              style={{
                backgroundImage: `url(${bgFrame2})`,
                backgroundSize: "contain",
                backgroundPosition: "center right",
                backgroundRepeat: "no-repeat",
                backgrounColor: "white",
                borderRadius: "10px",
              }}
            >
              <h5 className="text-dark fw-bold seo-h4 pb-3">
                On-Page Optimization
              </h5>
              <p className="text-dark fw-light gf_text pe-md-5 pe-0">
                Our team will optimize your website structure, enhance content,
                and fine-tune internal linking to align with Bing’s specific
                ranking criteria.
              </p>
            </div>
            <div
              className="col-md-4 col-sm-12 border border-warning p-5"
              style={{ borderRadius: "10px" }}
            >
              <h5 className="text-dark seo-h4 fw-bold pb-3">
                Local SEO for Bing
              </h5>
              <p className="text-dark fw-light gf_text">
                Our local SEO services ensure your Bing Places profile and local
                citations are fully optimized, helping you dominate local
                searches and attract nearby customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-lg-5 pb-3">
        <div className="custom-grid justify-content-between">
          {/* First Column */}
          <div
            className="col-first border border-black p-5"
            style={{ borderRadius: "10px" }}
          >
            <h5 className="text-dark seo-h4 fw-bold pb-3">
              Technical SEO Optimization
            </h5>
            <p className="text-dark fw-light gf_text">
              With fewer brands optimizing for Bing, your company can capture a
              larger share of voice, positioning you above competitors.
            </p>
          </div>

          {/* Second Column (Larger) */}
          <div
            className="col-second p-5"
            style={{
              backgroundImage: `url(${bgFrame3})`,
              backgroundSize: "30%",
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#1F1F1F",
              borderRadius: "10px",
            }}
          >
            <h5 className="text-white seo-h4 fw-bold pb-3">
              Off-Page SEO & Link Building
            </h5>
            <p className="text-white fw-light gf_text">
              Building high-quality, authoritative backlinks is crucial for Bing
              rankings. We also manage your brand’s online reputation to
              strengthen authority.
            </p>
          </div>

          {/* Third Column */}
          <div
            className="col-third p-5"
            style={{ borderRadius: "10px", backgroundColor: "#1f1f1f" }}
          >
            <h5 className="text-white seo-h4 fw-bold pb-3">
              Bing Webmaster Tools Management
            </h5>
            <p className="text-white fw-light gf_text">
              We manage all aspects of Bing Webmaster Tools, from submitting
              sitemaps to resolving indexing issues, ensuring your site’s
              optimal performance
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function HowItWorks() {
  return (
    <>
      <div
        className="container-fluid py-3 py-md-5"
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <div className="container py-3 py-md-5">
          <div className="row">
            <h2 className="text-light mb-4">
              How WODO’s Bing SEO Services Work
            </h2>
            <div className="col-lg-3 col-md-6 col-12 p-4">
              <img src={seoGif1} alt="" className="text-left" width={120} />
              <img src={seoArrow} alt="" className="text-left w-50" />
              <h3 className="seo-h4 fw-bold text-light my-4">
                1. Global Bing SEO Audit
              </h3>
              <p className="text-light">
                We begin by evaluating your site’s performance on Bing across
                key international markets, identifying technical issues, content
                gaps, and opportunities for growth.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-12 p-4">
              <img src={seoGif1} alt="" className="text-left" width={120} />
              <img src={seoArrow} alt="" className="text-left w-50" />
              <h3 className="seo-h4 fw-bold text-light my-4">
                2.Customized Bing Optimization Plan
              </h3>
              <p className="text-light">
                We begin by evaluating your site’s performance on Bing across
                key international markets, identifying technical issues, content
                gaps, and opportunities for growth.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-12 p-4">
              <img src={seoGif1} alt="" className="text-left" width={120} />
              <img src={seoArrow} alt="" className="text-left w-50" />
              <h3 className="seo-h4 fw-bold text-light my-4">
                3.Monitoring and Reporting
              </h3>
              <p className="text-light">
                Using Bing Webmaster Tools and regional analytics, we track your
                performance across markets. You’ll receive detailed reports on
                traffic growth, rankings, and opportunities for further
                optimization in various countries.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-12 p-4">
              <img src={seoGif1} alt="" className="text-left" width={120} />
              <h3 className="seo-h4 fw-bold text-light my-4">
                4.Implementation
              </h3>
              <p className="text-light">
                Our team implements both on-page and off-page optimizations,
                ensuring that your site is fully optimized for Bing’s search
                algorithms across multiple countries and languages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Advantages() {
  return (
    <>
      <div className="container-fluid py-3 py-md-5">
        <div className="container py-md-5 py-3">
          <div className="row">
            <p className="wodo-text">
              Bing SEO: The Unseen Advantage for Industry Titans 
            </p>
            <h2 className="text-dark">Industry-Specific Bing SEO Advantages</h2>
            <p className="text-dark">
              Bing SEO isn’t just about rankings—it’s about transforming your
              business by reaching valuable, often overlooked audiences.
            </p>
          </div>
          <div className="row mt-4 g-3 justify-content-between">
            <div className="col-12 col-lg seo-col bing-col d-flex flex-wrap justify-content-between align-items-end p-4 px-md-5 py-md-3">
              <h5 className="w-50 text-white fw-bold gf_text pb-4">
                B2B Services
              </h5>
              <img src={Seocon3} alt="" width={100} className="bing-img" />
              <p className="text-white fw-light gf_text">
                Reach decision-makers and professionals who rely on Bing,
                increasing your chances of securing higher-quality leads.
              </p>
            </div>
            <div className="col-12 col-lg seo-col bing-col d-flex flex-wrap justify-content-between align-items-end p-4 px-md-5 py-md-3">
              <h5 className="w-50 text-white fw-bold gf_text pb-4">
                SaaS Companies
              </h5>
              <img src={Seocon1} alt="" width={100} className="bing-img" />
              <p className="text-white fw-light gf_text">
                Get in front of business leaders searching for SaaS solutions,
                driving product awareness and higher adoption rates.
              </p>
            </div>
            <div className="col-12 col-lg seo-col bing-col d-flex flex-wrap justify-content-between align-items-end p-4 px-md-5 py-md-3">
              <h5 className="w-50 text-white fw-bold gf_text pb-4">
                E-commerce
              </h5>
              <img src={Seocon2} alt="" width={100} className="bing-img" />
              <p className="text-white fw-light gf_text">
                Capture purchase-ready users searching for products on Bing,
                increasing conversions and customer loyalty.
              </p>
            </div>
            <div className="col-12 col-lg seo-col bing-col d-flex flex-wrap justify-content-between align-items-end p-4 px-md-5 py-md-3">
              <h5 className="w-50 text-white fw-bold gf_text pb-4">
                Healthcare
              </h5>
              <img src={Seocon6} alt="" width={100} className="bing-img" />
              <p className="text-white fw-light gf_text">
                Improve your visibility in local searches, helping potential
                patients find your services more easily.
              </p>
            </div>
            <div className="col-12 col-lg seo-col bing-col d-flex flex-wrap justify-content-between align-items-end p-4 px-md-5 py-md-3">
              <h5 className="w-50 text-white fw-bold gf_text pb-4">Finance</h5>
              <img src={Seocon5} alt="" width={100} className="bing-img" />
              <p className="text-white fw-light gf_text">
                Establish trust with Bing’s affluent users, positioning your
                brand as a reliable financial partner and increasing service
                inquiries.
              </p>
            </div>
            <div className="col-12 col-lg seo-col bing-col d-flex flex-wrap justify-content-between align-items-end p-4 px-md-5 py-md-3">
              <h5 className="w-50 text-white fw-bold gf_text pb-4">
                Real Estate
              </h5>
              <img src={Seocon4} alt="" width={100} className="bing-img" />
              <p className="text-white fw-light gf_text">
                Dominate local real estate markets by optimizing for Bing,
                ensuring your property listings get maximum exposure.
              </p>
            </div>
            <div className="text-center py-2">
              <button className="seo-btn my-md-2 d-inline">
                Learn How Bing SEO Can Transform Your Industry
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AiEdge() {
  return (
    <>
      <div
        className="container-fluid py-3 py-md-5"
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <div className="container py-3 py-md-5">
          <div className="row">
            <div className="col-md-5 col-12 align-content-between">
              <p className="wodo-text">Get the AI Edge with Bing SEO</p>
              <h2 className="text-light">Get an AI Edge with GEO</h2>
              <p className="text-light gf_text">
                Leverage the future of search with Bing’s integration into
                AI-powered tools like Microsoft Copilot.
              </p>
              <button className="seo-btn-light my-md-2 mb-5">
                Unlock Your AI Advantage
              </button>
            </div>
            <div className="col-md-7 col-12">
              <div className="row gap-3 gap-md-0 justify-content-around">
                <div
                  className="col-md-5 col-12 bing-col p-3 p-md-4"
                  style={{
                    backgroundImage: `url(${bingBg1})`,
                    backgroundSize: "50%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h3 className="text-light seo-h4 fw-bold mb-5">
                    AI Optimization
                  </h3>
                  <p className="text-light gf_text">
                    WODO ensures your content is optimized for AI-driven
                    searches, which is critical for standing out in the new
                    zero-click search environment.
                  </p>
                </div>
                <div
                  className="col-md-5 col-12 bing-col p-3 p-md-4"
                  style={{
                    backgroundImage: `url(${bingBg2})`,
                    backgroundSize: "50%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h3 className="text-light seo-h4 fw-bold mb-5">
                    Bing’s Search Features
                  </h3>
                  <p className="text-light gf_text">
                    Maximize your content’s visibility with structured data and
                    rich snippets to ensure you capture attention in AI-driven
                    results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function WhyChooseUs() {
  return (
    <>
      <div className="container-fluid py-3 py-md-5">
        <div className="container py-md-5 py-3">
          <div className="row">
            <p className="wodo-text">
              When Excellence is the Only Option, Choose WODO
            </p>
            <h2 className="text-dark">
              Why Choose WODO for your Bing SEO Optimizaton?
            </h2>
            <p className="text-dark">
              The Top SEO Agency Dedicated to Your Success
            </p>
            <div className="row g-4">
              <div className="col-12 col-md-6 d-flex">
                <div className="w-25">
                  <img src={Seo1} alt="" className="img-fluid" />
                </div>
                <div className="w-75 border-top border-black me-2">
                  <h3 className="bing-h3 pt-2 px-3">Dedicated Resources</h3>
                  <p className="gf_text px-3">
                    Get access to a personal account manager who is available
                    24/7 to support your campaign needs.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex">
                <div className="w-25">
                  <img src={Seo5} alt="" className="img-fluid" />
                </div>
                <div className="w-75 border-top border-black me-2">
                  <h3 className="bing-h3 pt-2 px-3">Client Portal Access</h3>
                  <p className="gf_text px-3">
                    Stay informed and in control with real-time updates,
                    progress tracking, and campaign insights through our client
                    portal.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex">
                <div className="w-25">
                  <img src={Seo4} alt="" className="img-fluid" />
                </div>
                <div className="w-75 border-top border-black me-2">
                  <h3 className="bing-h3 pt-2 px-3">Continuous Innovation</h3>
                  <p className="gf_text px-3">
                    We never stop experimenting. Our team constantly tests and
                    refines strategies to keep your brand ahead of the
                    competition.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex">
                <div className="w-25">
                  <img src={Seo6} alt="" className="img-fluid" />
                </div>
                <div className="w-75 border-top border-black me-2">
                  <h3 className="bing-h3 pt-2 px-3">Weekly Progress Reports</h3>
                  <p className="gf_text px-3">
                    Transparency is key—receive detailed, easy-to-understand
                    reports on your SEO performance every week.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex">
                <div className="w-25">
                  <img src={Seo3} alt="" className="img-fluid" />
                </div>
                <div className="w-75 border-top border-black me-2">
                  <h3 className="bing-h3 pt-2 px-3">End-to-End SEO Solution</h3>
                  <p className="gf_text px-3">
                    We cover every aspect of SEO—from on-page to off-page,
                    ensuring a holistic and seamless strategy that drives
                    results.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex">
                <div className="w-25">
                  <img src={Seo2} alt="" className="img-fluid" />
                </div>
                <div className="w-75 border-top border-black me-2">
                  <h3 className="bing-h3 pt-2 px-3">Adaptive SEO Strategies</h3>
                  <p className="gf_text px-3">
                    WODO’s strategies evolve with your business, ensuring that
                    your SEO approach is always ahead of the curve.
                  </p>
                </div>
              </div>
              <div className="text-center py-2">
                <button className="seo-btn my-md-3 d-inline">
                  Unlock Your AI Advantage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Faq() {
  const seoFaqs = [
    {
      question: "What makes Bing SEO different from Google SEO?",
      answer:
        "Bing prioritizes exact keyword matches, multimedia content, and social signals, making it different from Google’s context-based algorithms.",
    },
    {
      question: "Why is Bing SEO important for my business?",
      answer:
        "Bing’s audience includes high-value demographics, providing a lucrative opportunity to capture leads and conversions that competitors may overlook.",
    },
    {
      question:
        "How does WODO customize Bing SEO strategies for different industries?",
      answer:
        "We tailor our strategies based on your industry’s unique needs, ensuring the right approach for maximum impact.",
    },
    {
      question: "What results can I expect from Bing SEO?",
      answer:
        "With WODO’s expertise, you can expect higher rankings, increased traffic, and a boost in lead generation from a valuable audience.",
    },
    {
      question: "WHow long does it take to see results from Bing SEO efforts?",
      answer:
        "Typically, you’ll start seeing improvements in a few weeks, with significant results in 3-6 months, depending on the competition and industry.",
    },
  ];

  return (
    <>
      <div className="container-fluid py-3 py-md-5">
        <div className="container">
          <div className="row">
            <h2 className="pb-3">
              Frequently Asked Questions About Bing SEO Services
            </h2>
            <FAQSection faqData={seoFaqs} />
          </div>
        </div>
      </div>
    </>
  );
}

function Cta() {
  return (
    <>
      <div
        className="container-fluid py-3 py-lg-5"
        style={{
          backgroundImage: `url(${CtaBg})`,
          backgroundPosition: "center",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ minHeight: "50vh" }}
        >
          <div className="row">
            <div className="col text-center">
              <h2 className="text-light">Start Winning with Bing Today</h2>
              <p className="gf_text text-light">
                Take the First Step Towards Higher-Quality Leads and Business
                Growth
              </p>
              <button className="seo-btn my-md-3 d-inline">
                Get a Free SEO Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SeoServices() {
  return (
    <>
      <Header />
      <Hero />
      <WhyBing />
      <Opportunities />
      <Services />
      <HowItWorks />
      <Advantages />
      <AiEdge />
      <WhyChooseUs />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

export default SeoServices;
