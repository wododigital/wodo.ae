import React from "react";
import ElementorButton from "../../../components/elementorButton/elementorButton";
import "./style.css";
import BaseURL from "../../../components/other/BaseURL";

function SliderCompany() {
  const images = [
    `${BaseURL}/media/2022/06/google-logo-web-1.png`,
    `${BaseURL}/media/2022/06/godaddy-logo-2-1.png`,
    `${BaseURL}/media/2022/06/Meta-Logo-1024x576-1.png`,
    `${BaseURL}/media/2022/06/mailchimp-logo-black-png-transparent-860x239-1.png`,
    `${BaseURL}/media/2022/06/2560px-Hostinger_logo_purple.svg-1.png`,
    `${BaseURL}/media/2022/06/elementor-logo.png`,
  ];

  const repeatedImages = Array(30).fill(images).flat();

  return (
    <>
      <div className="slider">
        <div className="slide-track">
          {repeatedImages.map((src, index) => (
            <div className="slide verticle_center_company" key={index}>
              <img src={src} width="200" alt="Company Logo" onError={() => console.log(`Image failed to load: ${src}`)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Services() {
  return (
    <>
      <div className="container pt-md-5 pt-3">
        <div style={{ display: "flex", width: "100%", position: "relative" }}>
          <div>{/* dash */}</div>     
          <div>
            <h2 className="gf_h2 text-dark">
              BREATHING LIFE INTO
              <br />
              DIGITAL IDEAS!
            </h2>
            {/* <p className="gf_text pt-2 home-p">
              Your brand deserves an online presence that tells its story and connects with your audience. WODO crafts custom digital experiences that engage, inspire, and ultimately drive conversions. Let's build something remarkable together.
            </p> */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 test">
            <img
              src={`${BaseURL}/media/2022/03/ezgif.com-gif-maker-3.gif`}
              alt="Design and Branding Services"
              className="services-gif"
            />
            <h3 className="gf_h4">
              Growth Galore,
              <br /> No Boredom
            </h3>
            <p className="gf_text text-justify">
            Spice up your strategy with growth-driven genius. No quick fixes here—we’re the strategic seasoning that ensures your business thrives for the long haul.
            </p>
            <br />
            <ElementorButton
              hide={true}
              mode="light"
              URL="/performance-marketing-services/"
              text="CASE CRACKER"
            />
          </div>
          <div className="col-md-4  test">
            <img
              src={`${BaseURL}/media/2022/03/ezgif.com-gif-maker-4.gif`}
              alt="Development Services"
              className="services-gif"
            />
            <h3 className="gf_h4">Tech Triumph,<br/> Every Time</h3>
            <p className="gf_text text-justify">
            Need it all? WODO’s got you covered from domains to stardom; we’re the tech magicians for seamless, delightful journeys in AI, SaaS, and digital campaigns.
            </p>
            <br />
            <ElementorButton
              hide={true}
              mode="light"
              URL="/custom-web-development-services"
              text="TAP TO VIEW"
            />
          </div>
          <div className="col-md-4 test">
            <img
              src={`${BaseURL}/media/2022/03/ezgif.com-gif-maker-5.gif`}
              alt="Growth and Performance Marketing"
              className="services-gif"
            />
            <h3 className="gf_h4">
              Hotline Bling, <br />
              Not Silent Ring
            </h3>
            <p className="gf_text">
            Our support isn’t a cold shoulder. We’re the hotline you simply can’t ignore. Got questions? We’ve got answers—delivered with style.
            </p>
            <br />
            <ElementorButton
              hide={true}
              mode="light"
              URL="/design-and-branding-services"
              text="Let's talk solution"
            />
          </div>
        </div>
        <div className="pt-md-5 pt-2">
          <div
            style={{
              display: "flex",
              width: "100%",
              position: "relative",
            }}
            className="py-md-5 py-2"
          >
            <div>{/* dash */}</div>

            <div
              style={{ display: "flex", width: "100%", position: "relative" }}
            >
              <h2 className="gf_h2 me-5">
                DIGITAL
                <br />
                PARTNERS
              </h2>
              <SliderCompany />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
