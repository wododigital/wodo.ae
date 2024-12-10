import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import blogData from "./BlogData";
import { Helmet } from "react-helmet-async";
import "./style.css";
import BlogCarousel from "./BlogCarousel";

function BlogDetailsHeroSection() {
  const { slug } = useParams();
  const post = blogData.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const createdDate = new Date(post.createdDate);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const postDate = createdDate.toLocaleDateString(undefined, options);
  const postTime = createdDate.toLocaleTimeString();
  const canonicalUrl = `https://wodo.digital/blogs/${slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className="BlogDetails_HeroSection">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-8">
              <div
                style={{ display: "flex", flexDirection: "row", gap: "14px" }}
              >
                <div>
                  <span>
                    <i class="fas fa-calendar"></i> {postDate}
                  </span>
                </div>

                <div>
                  <span>
                    <i class="far fa-clock"></i> {postTime}
                  </span>
                </div>

                <div>
                  <span>
                    <i class="fas fa-tags"></i> {post.categories.join(", ")}
                  </span>
                </div>
              </div>

              <h1 class="py-2">{post.title}</h1>
              <p>{post.excerpt}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BlogDetailsLayout() {
  const { slug } = useParams();
  const post = blogData.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const shareUrl = window.location.href;

  const openShareWindow = (url) => {
    window.open(url, "Share", "width=600,height=400");
  };

  return (
    <>
      <div className="container">
        <div className="row py-3">
          <div className="col-md">
            <img
              src={post.featuredImage}
              alt={post.title}
              style={{ maxWidth: "100%" }}
            />
            <div
              className="py-3 blog_content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
          <div className="col-md-3 ps-md-2">
            <div className="newsletter_block">
              <h4 className="gf_h4">Newsletter</h4>
              <input type="text" className="" placeholder="Email ID" />
              <button className="subscribe_now_btn my-2 border-0 mb-3">
                <span>Subscribe Now</span>
              </button>

              <div style={{ display: "flex", flexDirection: "row", gap: 15 }}>
                <div
                  className="elementor-share-btn elementor-share-btn_facebook"
                  title="Share on facebook"
                >
                  <span className="elementor-share-btn__icon">
                    <i
                      className="fab fa-facebook"
                      style={{ color: "#fff" }}
                    ></i>
                  </span>
                </div>

                <div
                  className="elementor-share-btn elementor-share-btn_whatsapp"
                  title="Share on whatsapp"
                >
                  <span className="elementor-share-btn__icon">
                    <i
                      className="fab fa-whatsapp"
                      style={{ color: "#fff" }}
                    ></i>
                  </span>
                </div>
                <div
                  className="elementor-share-btn elementor-share-btn_twitter"
                  title="Share on twitter"
                >
                  <span className="elementor-share-btn__icon">
                    <i className="fab fa-twitter" style={{ color: "#fff" }}></i>
                  </span>
                </div>
                <div
                  className="elementor-share-btn elementor-share-btn_mail"
                  title="Share on mail"
                >
                  <span className="elementor-share-btn__icon">
                    <i
                      className="fas fa-envelope"
                      style={{ color: "#fff" }}
                    ></i>
                  </span>
                </div>

                <Link to="" target="_blank">
                  <div
                    className="elementor-share-btn elementor-share-btn_linkedin"
                    title="Share on linkedin"
                  >
                    <span className="elementor-share-btn__icon">
                      <i
                        className="fab fa-linkedin-in"
                        style={{ color: "#fff" }}
                      ></i>
                    </span>
                  </div>
                </Link>
                <div
                  className="elementor-share-btn elementor-share-btn_pinterest"
                  title="Share on Pinterest"
                >
                  <span className="elementor-share-btn__icon">
                    <i
                      className="fab fa-pinterest"
                      style={{ color: "#fff" }}
                    ></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const SingleBlog = () => {
  const { slug } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  return (
    <>
      <Header />
      <BlogDetailsHeroSection />
      <BlogDetailsLayout />
      <BlogCarousel />
      <Footer />
    </>
  );
};

export default SingleBlog;
