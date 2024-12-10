import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from "../media/wodo-logo.png";
import fileIcon from "./IconsJson/file.json";
import phoneIcon from "./IconsJson/call.json";
import mailIcon from "./IconsJson/mail.json";
import wodoIcon from "./IconsJson/wodoIcon.json";
import Lottie from "react-lottie";
import closeIcon from "../media/wodo-menu-close-icon.png";

// import NavMenu1 from '../media/NavMenu1.svg'

function NavMenu(props) {
  const icon1 = {
    loop: true,
    autoplay: true,
    animationData: fileIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const icon2 = {
    loop: true,
    autoplay: true,
    animationData: phoneIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const icon3 = {
    loop: true,
    autoplay: true,
    animationData: mailIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const icon4 = {
    loop: true,
    autoplay: true,
    animationData: wodoIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function HeaderNavMenu() {
    return (
      <>
        <nav className="navbar">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src={Logo}
                className="header_logo"
                alt="Best Digital Marketing Agency in Bangalore"
                title="Digital Marketing Agency For Startups"
              />
            </Link>
            <span
              className="navbar-toggler"
              onClick={props.NavMenuHandle}
              style={{ border: "none", paddingRight: 28 }}
              type="button"
            >
              <span className="close-icon">
                <img src={closeIcon} alt="" />
              </span>
              {/* <img src={Menu} alt="" style={{height:'42px'}} /> */}
            </span>
          </div>
        </nav>
      </>
    );
  }

  const SvgMenuIcon1 = () => (
    <Lottie options={icon1} height={80} width={50} className="lotti-icon" />
  );

  const SvgMenuIcon2 = () => (
    <Lottie options={icon2} height={60} width={50} className="lotti-icon" />
  );

  const SvgMenuIcon4 = () => (
    <Lottie options={icon3} height={70} width={60} className="lotti-icon" />
  );

  const SvgMenuIcon5 = () => (
    <Lottie options={icon4} height={40} width={45} className="lotti-icon" />
  );

  function MenusBtns() {
    return (
      <>
        <div className="row">
          <div className="col-md verticle_center_NavMenu">
            <div className="menuItems">
              <li
                className="NavMenuText"
                ref={(el) => (props.HeadingRef.current[0] = el)}
                onClick={props.NavMenuHandle}
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className="NavMenuText"
                ref={(el) => (props.HeadingRef.current[1] = el)}
                onClick={props.NavMenuHandle}
              >
                <Link to="/projects/" className="nav-link">
                  Projects
                </Link>
              </li>
              <li
                className="NavMenuText"
                ref={(el) => (props.HeadingRef.current[2] = el)}
                onClick={props.NavMenuHandle}
              >
                <Link to="/about-us/" className="nav-link">
                  Our Story
                </Link>
              </li>

              <div className="btn-group dropend">
                <li
                  type="button"
                  className="dropdown-toggle NavMenuText"
                  ref={(el) => (props.HeadingRef.current[3] = el)}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </li>
                <ul className="dropdown-menu">
                  <li>
                    <span
                      className="dropdown-item"
                      onClick={props.NavMenuHandle}
                    >
                      <lli>
                        <Link to="/design-and-branding/" className="nav-link">
                          Design & Branding
                        </Link>
                      </lli>
                    </span>
                  </li>
                  <li>
                    <hr
                      className="dropdown-divider"
                      style={{ borderTop: "1px solid #FFF" }}
                    />
                  </li>
                  <li>
                    <span
                      className="dropdown-item"
                      onClick={props.NavMenuHandle}
                    >
                      <li>
                        <Link to="/development/" className="nav-link">
                          Development
                        </Link>
                      </li>
                    </span>
                  </li>
                  <li>
                    <hr
                      className="dropdown-divider"
                      style={{ borderTop: "1px solid #FFF" }}
                    />
                  </li>
                  <li>
                    <span
                      className="dropdown-item"
                      onClick={props.NavMenuHandle}
                    >
                      <li>
                        <Link
                          to="/growth-and-performance-marketing/"
                          className="nav-link"
                        >
                          Growth & Performance Marketing
                        </Link>
                      </li>
                    </span>
                  </li>
                </ul>
              </div>

              <li
                className="NavMenuText"
                ref={(el) => (props.HeadingRef.current[4] = el)}
                onClick={props.NavMenuHandle}
              >
                <Link to="https://wodo.digital/insights/" className="nav-link">
                  Insights
                </Link>
              </li>

              <li
                className="NavMenuText"
                ref={(el) => (props.HeadingRef.current[5] = el)}
                onClick={props.NavMenuHandle}
              >
                <Link to="/contact-us/" className="nav-link">
                  Contact
                </Link>
              </li>
            </div>
          </div>
          <div className="col-md verticle_center_NavMenu d-none d-md-block">
            <div className="gridContainerNavMenu">
              <Link to="/contact" className="gridItemNavMenu">
                <div style={{ padding: 10 }}>
                  <SvgMenuIcon1 />
                  <li className="boxTextNavMenu text-light">
                    Drop an <br />
                    Enquiry
                  </li>
                </div>
              </Link>

              <Link to="tel:+918088998516" className="gridItemNavMenu">
                <div style={{ padding: 10 }}>
                  <SvgMenuIcon2 />
                    <h4 className="boxTextNavMenu text-light">
                      Speak on <br />
                      the phone
                    </h4>
                </div>
              </Link>
              <Link to="/join-wodo/" className="gridItemNavMenu">
                <div style={{ padding: 10 }}>
                  <SvgMenuIcon5 />
                    <li className="boxTextNavMenu text-light">
                      Be a part <br />
                      of WODO
                    </li>
                </div>
              </Link>
              <Link  to="mailto:hello@wodo.digital" className="gridItemNavMenu">
                <div style={{ padding: 10 }}>
                  <SvgMenuIcon4 />
                    <li className="boxTextNavMenu text-light">
                      Send us <br />
                      an email
                    </li>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  function SocialBtn() {
    return (
      <>
        <div
          style={{
            position: "absolute",
            zIndex: "9999999",
            bottom: "25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }} className="social-media-icon-box"
        >
          <div
            style={{
              width: "3px",
              backgroundColor: "#fff",
              height: 60,
              marginBottom: 20,
            }}
          >
            {/* dash */}
          </div>

          <Link
            className="social-icon"
            ref={(el) => (props.Icons.current[0] = el)}
            to="https://www.instagram.com/wodo.digital/"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </Link>

          <Link
            className="social-icon"
            ref={(el) => (props.Icons.current[1] = el)}
            to="https://www.facebook.com/wodoagency"
            target="_blank"
          >
            <i className="fab fa-facebook"></i>
          </Link>

          <Link
            className="social-icon"
            ref={(el) => (props.Icons.current[2] = el)}
            to="https://www.linkedin.com/company/wodo-digital-solutions"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="navMenu"
        style={props.MenuStatus === true ? { top: 0 } : { top: 1300 }}
      >
        {/* <div className="navMenu" ref={props.NavBar}> */}

        <HeaderNavMenu />
        <div className="container" style={{ color: "#fff" }}>
          <MenusBtns />
          <SocialBtn />
        </div>
      </div>
    </>
  );
}

export default NavMenu;