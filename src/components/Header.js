import React, { useEffect, useState } from "react";
import Logo from "../media/wodo-logo.png";
import Menu from "../media/wodo-hamburger-icon.png";
import Close from "../media/wodo-menu-close-icon.png";
import { Link, NavLink, useLocation } from "react-router-dom";
 
function Header() {
  const location = useLocation(); // To get the current path
  const [menuStatus, setMenuStatus] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [serviceActive,setServiceActive]=useState(false);
 
  const handleButtonClick = () => {
    setMenuStatus((prev) => !prev);
  };
 
  useEffect(() => {
    // Check if the current path should open the dropdown
    const dropdownPaths = [
      "design-and-branding/",
      "development/",
      "growth-and-performance-marketing/",
    ];
 
    const path = location.pathname.split("/").pop();
   
    if (dropdownPaths.includes(path)) {
      setServiceActive(true);
    } else {
      setServiceActive(false);
    }
    setMenuStatus(false);
  }, [location]);
 
  useEffect(() => {
    let lastScrollTop = 0;
 
    const handleScroll = () => {
      const header = document.querySelector(".header_container");
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
 
      if (scrollTop > lastScrollTop) {
        header.classList.remove("scrolled");
        header.style.top = "-100px"; // Hide the header
      } else {
        header.classList.add("scrolled");
        header.style.top = "0"; // Show the header
      }
      lastScrollTop = scrollTop;
    };
 
    window.addEventListener("scroll", handleScroll);
 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  const handleDropdownClick = () => {
    setDropdownOpen((prev) => !prev);
  };
 
  const handleDropdownItemClick = (to, e) => {
    e.preventDefault();
    setDropdownOpen(false);
    setMenuStatus(false);
 
    setTimeout(() => {
      window.location.href = to;
    }, 150);
  };
 
 
  return (
    <div className="header_container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              className="header_logo"
              alt="Best Digital Marketing Agency in Bangalore"
              title="Digital Marketing Agency For Startups"
            />
          </Link>
          <button
            className={`navbar-toggler ${menuStatus ? "active" : ""}`} // Add active class for styling
            type="button"
            onClick={handleButtonClick}
            aria-controls="navbarNav"
            aria-expanded={menuStatus ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <img src={menuStatus ? Close : Menu} alt="Menu" />{" "}
            {/* Toggle between menu and close icons */}
          </button>
 
          {/* Menu Items */}
          <div
            className={`collapse navbar-collapse ${menuStatus ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ml-5">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  exact
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/projects/"
                  activeClassName="active"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about-us/"
                  activeClassName="active"
                >
                  Our Story
                </NavLink>
              </li>
              <li
                className={`nav-item dropdown ${dropdownOpen ? "active" : ""}`}
              >
                <button
                  className={serviceActive ? 'nav-link dropdown-toggle active ': 'nav-link dropdown-toggle'}
                  type="button"
                  onClick={handleDropdownClick}
                  aria-expanded={dropdownOpen ? "true" : "false"}
                >
                  Services
                </button>
                <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/design-and-branding/"
                      onClick={(e) =>
                        handleDropdownItemClick("/design-and-branding/", e)
                      }
                    >
                      Design & Branding
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/development/"
                      onClick={(e) =>
                        handleDropdownItemClick("/development", e)
                      }
                    >
                      Development
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/growth-and-performance-marketing/"
                      onClick={(e) =>
                        handleDropdownItemClick(
                          "/growth-and-performance-marketing/",
                          e
                        )
                      }
                    >
                      Growth & Performance Marketing
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
              <a href="https://wodo.ae/insights" className="nav-link">Insights</a>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact-us/"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
 
export default Header;
 
 