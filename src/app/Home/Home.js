import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/App.css";
import "../../css/index.css";
import { Helmet } from "react-helmet-async";

import HeroSection from "./HeroSection/HeroSection";
import ProjectTabs from "./ProjectTabs/ProjectTabs";
import Services from "./Services/Services";
import Awards from "./Awards/Awards";
import Clients from "./Clients/Clients";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import CaseStudies from "./CaseStudies/CaseStudies";
import Cta from "./cta/Cta.js";
import OurServices from "./OurServices/OurServices.js";
import Faqs from "./Faq's/Faqs.js";

const Home = () => {
  // const currentUrl = window.location.href;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Digital Marketing, Web Design & SEO Services in UAE | WODO
        </title>
        <meta
          name="description"
          content="WODO offers expert digital marketing, web design & development, and SEO services in UAE to elevate your online presence with tailored strategies."
        />
        <meta
          name="keywords"
          content="Digital Marketing Services, Web Design and Development, Custom Website Design, E-commerce Development, SEO Services, PPC Campaigns, Social Media Marketing, Custom Web Development, UX/UI Design.​"
        />
        <meta
          property="og:title"
          content="WODO - Your Partner in UAE Digital Marketing & SEO"
        ></meta>

        <meta
          property="og:description"
          content="Get comprehensive digital marketing solutions in UAE with WODO. From SEO to social media and web development, we drive business growth online."
        ></meta>
        <meta
          property="og:image"
          content="https://wodo.digital/media/home/featured-image.webp"
        />
        <meta
          property="og:image:alt"
          content="Digital Marketing, Web Design & SEO Services in UAE | WODO"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:url" content="https://wodo.ae" />
      </Helmet>

      <FloatingButton />
      <Header />
      <HeroSection />
      <ProjectTabs />
      <OurServices />
      <Services />
      <Clients />
      <Awards />
      <CaseStudies />
      <Faqs />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
