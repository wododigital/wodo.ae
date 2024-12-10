import React from "react";
import Logo from "../media/wodo-logo.png";
import "./header_css.css";
import { Link } from "react-router-dom";
import LinkedIn from "../media/linkedin.svg";
import Facebook from "../media/facebook.svg";
import Instagram from "../media/instagram.svg";
import UaeFlag from "../media/uae-flag.webp";
import UsaFlag from "../media/usa-flag.webp";
import IndiaFlag from "../media/indian-flag.webp";

function Footer() {
  const MenuText = {
    textDecoration: "none",
    color: "#c8c8c8",
    fontSize: "1rem",
    fontWeight: "300",
    "&:hover": {
      color: "#ffffff",
    },
    backgroundColor: "transparent",
    border: "none",
  };

  const goToInsights = () => {
    window.location.href = "/insights";
  };
  return (
    <>
      <div className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-10 text-left">
              <Link to="/">
                <img src={Logo} alt="" className="header_logo" />
              </Link>
              <p
                className="text-light gf_text pt-3"
                style={{ fontWeight: 300 }}
              >
                Where brands break barriers, businesses evolve beyond
                technology, and visionaries make AI their competitive edge
              </p>
            </div>
            <div className="col-md-4 col-6 text-md-end text-start pt-4 footer_align_list">
              <ul style={{ listStyle: "none" }} className="ps-1">
                <li className="pt-2">
                  <Link to="/about-us/" style={MenuText}>
                    About Us
                  </Link>
                </li>
                <li className="pt-2">
                  <Link to="/join-wodo/" style={MenuText}>
                    Join Wodo
                  </Link>
                </li>
                <li className="pt-2">
                  <Link to="/projects/" style={MenuText}>
                    Projects
                  </Link>
                </li>
                <li className="pt-2">
                  <button onClick={goToInsights} style={MenuText}>
                    Insights
                  </button>
                </li>
                <li className="pt-2">
                  <Link to="/contact-us" style={MenuText}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-5 text-start pt-4 footer_align_list ps-0">
              <div>
                <ul style={{ listStyle: "none" }}>
                  {/* <li style={MenuText}>hello@wodo.digital</li> */}
                  <Link to="tel:+91%C2%A080889%C2%A098516">
                    <li style={MenuText} className="pt-2">
                      {/* <b>India</b> */}
                      <img src={IndiaFlag} alt="" width="25px" />
                      <br />
                      +91 80889 98516
                    </li>
                  </Link>
                  <Link to="tel:+1%20(980)%20335-7724">
                    <li style={MenuText} className="pt-2">
                      {/* <b>USA</b> */}
                      <img src={UsaFlag} alt="" width="25px" />
                      <br />
                      +1 (980) 335-7724
                    </li>
                  </Link>
                  <Link to="tel:+971%2050%20722%208748">
                    <li style={MenuText} className="pt-2">
                      {/* <b>UAE</b> */}
                      <img src={UaeFlag} alt="" width="25px" />
                      <br />
                      +971 50 813 5828
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          <div className="row pt-3">
            <div className="col-lg-1 col-md-2 col-3">
              <img src={Logo} alt="" className="footer_logo" />
            </div>
            <div className="col-lg-10 col-md-8 col-6 d-flex align-items-center border-line g-0 p-0"></div>
            <div className="col-lg-1 col-md-2 col-3 d-flex justify-content-between">
              <Link to="https://www.facebook.com/wodoagency">
                <img src={Facebook} alt="" width="20" />
              </Link>
              <Link to="https://www.instagram.com/wodo.digital">
                <img src={Instagram} alt="" width="18" />
              </Link>
              <Link to="https://www.linkedin.com/company/wodo-digital/mycompany/">
                <img src={LinkedIn} alt="" width="20" />
              </Link>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-md-4 col-12 text-center text-md-start">
              <p className="footer-text">
                © WODO Digital Solutions. All rights reserved.
              </p>
            </div>
            <div className="col-md-4 col-6 text-md-end text-start">
              <p>
                <Link className="footer-text" to="/terms-and-conditions/">
                  Terms and Conditions
                </Link>
              </p>
            </div>
            <div className="col-md-4 col-6 text-end">
              <p>
                <Link className="footer-text" to="/privacy-policy/">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
