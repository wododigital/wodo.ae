import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import "./style.css";

function BlogItems({ posts }) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="grid-blog-item">
          <Link to={`/blogs/${post.slug}`}>
            <div style={{ position: "relative" }}>
              <div>
                <img
                  style={{ maxWidth: "100%" }}
                  src={post.featuredImage}
                  alt={post.title}
                />
                <span className="post_badge">{post.categories[0]}</span>
              </div>
              <Link
                to={`/blogs/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <h3 className="post_title">{post.title}</h3>
              </Link>
              <p className="post_content">
                {post.excerpt.length > 90
                  ? `${post.excerpt.substring(0, 90).trim()}...`
                  : post.excerpt}
              </p>
              <Link to={`/blogs/${post.slug}`} className="readmore_btn">
                Read More...
              </Link>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default BlogItems;
