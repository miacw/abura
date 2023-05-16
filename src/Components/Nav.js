import React from "react";
import "./Nav.css";
import logoRedShort from "../public/content/logo-short-red.svg";
import logoPNG from "../public/content/logo-png.png";
import logoSVG from "../public/content/logo-red.svg";
import { IconContext } from "react-icons";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

const Nav = () => {
  function triggerForm() {
    window._klOnsite = window._klOnsite || [];
    window._klOnsite.push(["openForm", "R9uZQE"]);
  }
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={logoRedShort} alt="logo-png" />
      </div>
      <div className="logos">
        <IconContext.Provider value={{ size: "20px" }}>
          <ul className="logos-list">
            <li>
              <a href="https://www.instagram.com/aburalondon/">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/aburalondon?s=20">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100092637402397">
                <BsFacebook />
              </a>
            </li>
          </ul>
        </IconContext.Provider>
      </div>
      <button onClick={triggerForm} className="popupBtn">
        Stay in the Loop
      </button>
    </div>
  );
};

export default Nav;
