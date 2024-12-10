import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogHeroSection from "./BlogHeroSection";
import { Helmet } from "react-helmet-async";
import ListOfBlogs from "./ListOfBlogs";

function BlogMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Our Blogs | WODO Digital Solutions</title>
        <meta
          name="description"
          content="Explore insights, trends, and tips in digital marketing. Stay informed and ahead in the digital world.​​"
        />
        <meta
          name="keywords"
          content="WODO blog, digital marketing, insights, trends​"
        />
        <meta
          property="og:image"
          content="https://server-demo.wodo.digital/media/2024/06/fmw.jpg"
        />
        {/* <link rel="canonical" href="https://wodo.digital/blogs/" /> */}
      </Helmet>
      <Header />
      <BlogHeroSection />
      <ListOfBlogs />
      <Footer />
    </>
  );
}

export default BlogMain;
