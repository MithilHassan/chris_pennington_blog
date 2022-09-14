import React from "react";
import document from "../assets/images/document.png";

function Blogs(props) {
  const { blogs, blogActive, setBlogActive } = props;
  return (
    <div className={blogActive ? "active container" : "container"}>
      <div className="blogs">
        <div className="box">
          <div className="box-header">
            <div className="box-title">My Blog Post</div>
            <div className="close-btn">
              <button onClick={() => setBlogActive(false)}></button>
            </div>
            <div className="header-lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="box-body">
            <div className="document-container">
              {blogs.map((blog, index) => {
                return (
                  <a key={index} href={blog.link} className="document">
                    <img src={document} alt="document" />
                    <p>{blog.title}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
