import React from "react";
import ElementorButton from "../../../components/elementorButton/elementorButton";
import "./style.css";
import BaseURL from "../../../components/other/BaseURL";

function SliderCompany() {
  return (
    <>
      <div className="slider">
        <div className="slide-track">
          <div className="slide verticle_center_company">
            <img
              src={`${BaseURL}/media/2022/06/google-logo-web-1.png`}
              width="200"
              alt="Digital Marketing, Web Design & Development Services at Wodo Digital"
            />
          </div>
          <div className="slide verticle_center_company">
            <img
              src={`${BaseURL}/media/2022/06/godaddy-logo-2-1.png`}
              width="200"
              alt="Digital Marketing, Web Design & Development Services at Wodo Digital"
            />
          </div>
          <div className="slide verticle_center_company">
            <img
              src={`${BaseURL}/media/2022/06/Meta-Logo-1024x576-1.png`}
              width="200"
              alt="Digital Marketing, Web Design & Development Services at Wodo Digital"
            />
          </div>
          <div className="slide verticle_center_company">
            <img
              src={`${BaseURL}/media/2022/06/mailchimp-logo-black-png-transparent-860x239-1.png`}
              width="200"
              alt="Digital Marketing, Web Design & Development Services at Wodo Digital"
            />
          </div>
          <div className="slide verticle_center_company">
            <img
              src={`${BaseURL}/media/2022/06/2560px-Hostinger_logo_purple.svg-1.png`}
              width="200"
              alt="Digital Marketing, Web Design & Development Services at Wodo Digital"
            />
          </div>
          <div className="slide verticle_center_company">
            <img
              src={`${BaseURL}/media/2022/06/elementor-logo.png`}
              width="200"
              alt="Digital Marketing, Web Design & Development Services at Wodo Digital"
            />
          </div>
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
          <div>
            {/* dash */}
          </div>
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
            <p className="gf_text">
              Spice up your strategy with growth-driven genius. We don't do
              quick fixes; we're the strategic seasoning that makes your
              business a long-lasting success.
            </p>
            <br />
            <ElementorButton
              hide={true}
              mode="light"
              URL="/"
              text="CASE CRACKER"
            />
          </div>
          <div className="col-md-4  test">
            <img
              src={`${BaseURL}/media/2022/03/ezgif.com-gif-maker-4.gif`}
              alt="Development Services"
              className="services-gif"
            />
            <h3 className="gf_h4">Tech Solutions</h3>
            <p className="gf_text">
              Need it all? WODO's got you covered - from domain debut to online
              stardom, we're the tech wizards making your journey seamless,
              magical, and utterly delightful. (AI to Saas, Digital campaigns)
            </p>
            <br />
            <ElementorButton
              hide={true}
              mode="light"
              URL="/"
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
              Our customer service isn't a cold shoulder. We're the hotline you
              can't resist. Got questions? We've got answers - served up.
            </p>
            <br />
            <ElementorButton
              hide={true}
              mode="light"
              URL="/"
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
          className="py-md-5 py-2">
          <div>
            {/* dash */}
          </div>

          <div style={{ display: "flex", width: "100%", position: "relative" }}>
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
