import React from "react";
import videoIcon from "../assets/images/video.svg";
function Videos(props) {
  const { videos, videoActive, setVideoActive } = props;

  return (
    <div className={videoActive ? "active container" : "container"}>
      <div className="videos">
        <div className="box">
          <div className="box-header">
            <div className="box-title">Recent Youtube Videos</div>
            <div className="close-btn">
              <button onClick={() => setVideoActive(false)}></button>
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
              {videos.map((video, index) => {
                return (
                  <a key={index} href={video.link} className="document">
                    <img src={videoIcon} alt="document" />
                    <p>{video.title}</p>
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

export default Videos;
