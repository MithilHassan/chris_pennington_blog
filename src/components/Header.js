import React from "react";
import logo from "../assets/images/cp.svg";
function Header(props) {
  const {
    about,
    setAbout,
    files,
    setFiles,
    setSettingsActive,
    setBlogActive,
    setVideoActive,
  } = props;
  return (
    <header>
      <ul className="menu">
        <li
          onClick={() =>
            about ? setAbout(false) : setAbout(true) + setFiles(false)
          }
          className={about ? "active logo" : "logo"}
        >
          <img src={logo} alt="logo " />
        </li>
        <li onClick={() => window.location.reload()}>Home</li>
        <li
          onClick={() =>
            files ? setFiles(false) : setFiles(true) + setAbout(false)
          }
          className={files && "active"}
        >
          Files
        </li>
        <li
          onClick={() =>
            setSettingsActive(true) +
            setBlogActive(false) +
            setVideoActive(false)
          }
        >
          Settings
        </li>
      </ul>
    </header>
  );
}

export default Header;
