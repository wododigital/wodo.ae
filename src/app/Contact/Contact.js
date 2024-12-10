import React, { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./contact.css";
import Form from "./Form";
import { gsap } from "gsap";
import ContactForm from "./contactForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Contact() {
  const formRef = useRef(null);
  const tl = useRef(null);
  const [MenuStatus, setMenuStatus] = useState(false);
  const handleButtonClick = () => {
    setMenuStatus(!MenuStatus);
  };
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(formRef.current, {
      top: 0,
      duration: 0.7,
      ease: "power.out",
    });
  }, []);

  useEffect(() => {
    if (MenuStatus) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [MenuStatus]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact WODO - Digital Marketing & SEO UAE</title>
        <meta
          name="description"
          content="Get in touch with WODO, UAE’s digital marketing, web design & development, and SEO experts. Let’s discuss strategies to grow your business online. "
        />
        <meta
          name="keywords"
          content="Contact Wodo Digital, digital marketing contact, creative agency contact, web development inquiry, branding consultation, Wodo Digital support​"
        />
        <meta
          property="og:title"
          content="Connect with WODO - Your Digital Marketing Partner in UAE"
        ></meta>

        <meta
          property="og:description"
          content="Reach out to WODO for customized digital marketing and SEO services in the UAE. Partner with us to enhance your business’s digital footprint. "
        ></meta>
        <meta
          property="og:image"
          content="https://wodo.digital/media/home/featured-image.webp"
        />
        <meta
          property="og:image:alt"
          content="Digital Marketing, Web Design & Development Services at Wodo Digital"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:url" content="https://wodo.ae/contact-us/" />
      </Helmet>
      <Form
        ContainerRef={formRef}
        formSlider={MenuStatus}
        NavMenuHandle={handleButtonClick}
      />
      <Header />
      <div className="contact">
        <div className="container py-md-5 py-2">
          <div className="row">
            <div className="col-md-6">
              <h2 className="gf_h5 storysection-h5">Contact Us</h2>
              <h1 className="c_h1 pb-2">
                Tell us your wildest idea, and let's build it together!
              </h1>
              <Link to="tel:+919482290970">
                <div className="address-box">
                  <h3 className="gf_h4">
                    <span className="yellow-text">India</span> Office
                  </h3>
                  <p className="gf_h5">Anuj Srivastava</p>
                  <p className="gf_text">+91 80889 98516</p>
                </div>
              </Link>
              <Link to="tel:+1 (980) 335-7724">
                <div className="address-box">
                  <h3 className="gf_h4">
                    <span className="yellow-text">USA</span> Office
                  </h3>
                  <p className="gf_h5">Rahul Sajjan</p>
                  <p className="gf_text">+1 (980) 335-7724</p>
                </div>
              </Link>
              <Link to="tel:+971%2050%20722%208748">
                <div className="address-box">
                  <h3 className="gf_h4">
                    <span className="yellow-text">UAE</span> Office
                  </h3>
                  <p className="gf_h5">Suhas Ashok</p>
                  <p className="gf_text">+971 50 722 8748</p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 py-md-0 py-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
