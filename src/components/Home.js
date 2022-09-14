import React from "react";
import folder from "../assets/images/folder.png";
function Home(props) {
  const { blogs, setSettingsActive, setVideoActive, setBlogActive } = props;

  return (
    <main>
      <div className="folder-container">
        <div
          onClick={() =>
            setBlogActive(true) +
            setVideoActive(false) +
            setSettingsActive(false)
          }
          className="folder"
        >
          <img src={folder} alt="" />
          <p className="folder-name">My Blog Posts</p>
        </div>
        <div
          onClick={() =>
            setVideoActive(true) +
            setBlogActive(false) +
            setSettingsActive(false)
          }
          className="folder"
        >
          <img src={folder} alt="" />
          <p className="folder-name">My Recent Videos</p>
        </div>
      </div>
      <div className="recent-posts">
        <h2 className="title">Recent Posts</h2>
        <div className="posts">
          {blogs.slice(0, 8).map((blog, index) => {
            return (
              <div key={index} className="box">
                <div className="box-header">
                  <div className="close-btn">
                    <button
                      onClick={(event) =>
                        (event.target.parentNode.parentNode.parentNode.style.display =
                          "none")
                      }
                    ></button>
                  </div>
                  <div className="box-title">Blog Post</div>
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
                  <a className="bold-link" href={blog.link}>
                    {blog.title}
                  </a>
                  <br />
                  <p>{blog.pubDate}</p>
                  <p>
                    Category : &nbsp;
                    <span style={{ textDecoration: "underline" }}>
                      {blog.category}
                    </span>
                  </p>
                  <p>
                    Tags : &nbsp;
                    <span style={{ textDecoration: "underline" }}>
                      {blog.tags}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Home;
