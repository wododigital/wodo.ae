import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
// import { useParams } from 'react-router-dom';
import Home from "./app/Home/Home";
import AboutUs from "./app/AboutUs/AboutUs";
import Contact from "./app/Contact/Contact";
import ProjectIndex from "./app/Projects/ProjectIndex";
import JoinWodo from "./app/Join-Wodo";
import DesignAndBranding from "./app/Services/DesignAndBranding";
import PrivacyPolicy from "./app/PolicyPages/PrivacyPolicy";
import TermsAndConditions from "./app/PolicyPages/TermsAndConditions";
import Development from "./app/Services/Development";
import GrowthPerformanceMarketing from "./app/Services/GrowthPerformanceMarketing";
import PrLandingPage from "./landing pages/PrLandingPage/PrLandingPage";
import NotFound from "./components/NotFound";
// import BlogMain from "./app/Blog/BlogMain";
// import SingleBlog from "./app/Blog/SingleBlog";
import SingleProject from "./app/Projects/SingleProject";
import ProjectsData from "./app/Projects/ProjectsData";
import PrThankYou from "./landing pages/PrLandingPage/PrThankYou";
import TopDevelopers from "./landing pages/TopDevelopers/TopDevelopers";
import DevelopmentThankYou from "./landing pages/TopDevelopers/DevelopmentThankYou";
import ThankYou from './app/Contact/ThankYou';
// import SeoServices from "./app/Services/SeoServices";
// import blogdata from './app/Blog/BlogData';

// function isValidBlogSlug(slug) {
//   const validSlugs = blogdata.map(blog => blog.slug);
//   return validSlugs.includes(slug);
// }

// function SlugHandler() {
//   const { slug } = useParams();

//   if (isValidBlogSlug(slug)) {
//     return <SingleBlog />;
//   }
//   return <NotFound />;
// }

function App() {
  return (
    <HelmetProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us/" element={<AboutUs />} />
        <Route path="/contact-us/" element={<Contact />} />
        <Route path="/projects/" element={<ProjectIndex projects={ProjectsData} />} />
        <Route path="/projects/:slug/" element={<SingleProject projects={ProjectsData} />} />
        <Route path="/design-and-branding/" element={<DesignAndBranding />} />
        <Route path="/join-wodo/" element={<JoinWodo />} />
        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions/" element={<TermsAndConditions />} />
        <Route path="/development/" element={<Development />} />
        <Route path="/growth-and-performance-marketing/" element={<GrowthPerformanceMarketing />} />
        <Route path="/pr-landing-page" element={<PrLandingPage />} />
        {/* <Route path="/blogs" element={<BlogMain />} /> */}
        {/* <Route path="/blogs/:slug" element={<SlugHandler />} /> */}
        <Route path="/pr-thank-you/" element={<PrThankYou />} />
        <Route path="/dev-thank-you/" element={<DevelopmentThankYou />} />
        <Route path="/thank-you/" element={<ThankYou />} />
        <Route path="/website-development/" element={<TopDevelopers />} />
        <Route path="/work-category/real-estate/" element={<Navigate to="/projects" replace />} />
        <Route path="/category/seo/" element={<Navigate to="/projects/" replace />} />
        <Route path="/contact/" element={<Navigate to="/contact-us/" replace />} />
        <Route path="/blogs/" element={<Navigate to="/insights/" replace />} />
        <Route path="/blog/" element={<Navigate to="/insights/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </HelmetProvider>
  );
}

export default App;
