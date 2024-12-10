import React, { useEffect }  from "react";
import BlogItems from "./BlogItems";
import blogData from './BlogData';


function ListOfBlogs() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
  return (
    <div className="container">
      <div className="grid-blog-container py-5">
        <BlogItems posts={blogData}/>
      </div>
    </div>
  );
}

export default ListOfBlogs;
