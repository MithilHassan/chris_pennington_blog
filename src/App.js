import React, { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Files from "./components/Files";
import Settings from "./components/Settings";
import bg from "./assets/pattern/pattern-1.svg";
import Home from "./components/Home";
import blog from "./assets/data/blog.json";
import video from "./assets/data/video.json";
import Blogs from "./components/Blogs";
import Videos from "./components/Videos";
function App() {
  const [about, setAbout] = useState();
  const [files, setFiles] = useState();
  const [background, setBackground] = useState();
  const [settingsActive, setSettingsActive] = useState();
  const [blogActive, setBlogActive] = useState();
  const [videoActive, setVideoActive] = useState();
  const [blogs, setBlogs] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => setBlogs(blog), []);
  useEffect(() => setVideos(video), []);
  return (
    <div
      style={
        background
          ? { backgroundImage: `url(${background})` }
          : { backgroundImage: `url(${bg})` }
      }
      className="App"
    >
      <Header
        about={about}
        setAbout={setAbout}
        files={files}
        setFiles={setFiles}
        setSettingsActive={setSettingsActive}
        setBlogActive={setBlogActive}
        setVideoActive={setVideoActive}
      ></Header>
      <Home
        blogs={blogs}
        setSettingsActive={setSettingsActive}
        setBlogActive={setBlogActive}
        setVideoActive={setVideoActive}
      ></Home>
      <About about={about}></About>
      <Files files={files}></Files>
      <Settings
        setBackground={setBackground}
        settingsActive={settingsActive}
        setSettingsActive={setSettingsActive}
      ></Settings>

      <Blogs
        blogs={blogs}
        blogActive={blogActive}
        setBlogActive={setBlogActive}
      ></Blogs>
      <Videos
        videos={videos}
        videoActive={videoActive}
        setVideoActive={setVideoActive}
      ></Videos>
    </div>
  );
}

export default App;
