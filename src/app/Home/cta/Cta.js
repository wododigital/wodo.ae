import React from "react";
import { Link } from "react-router-dom";
import RightIcon from "../../../media/right-arrow.svg";

function Cta() {
  return (
    <>
      <div className="ctaSection py-5">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="gf_h3 text-light text-center fw-bold">
                Ready to Transform Your{" "}
                <span style={{ color: "#f8a925" }}>Digital Presence?</span>
              </h2>
              <p className="gf_text text-light text -center py-2">
              Let Wodo Digital be your partner in success. Whether you need cutting-edge digital marketing, custom web design, or robust web development, we’re here to help. Contact us today to start crafting tailored solutions that drive growth and elevate your brand in the digital landscape. Let’s turn your vision into reality.
              </p>
              <Link to="/contact">
                <div className="about-cta-btn py-3">
                  <p className="about-cta-text m-0">Book a Call</p>
                  <img src={RightIcon} alt="" className="about-cta-icon" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cta;
