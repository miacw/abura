import React from "react";
import "./Nav.css";
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
        <img src={logoSVG} alt="logo-png" />
      </div>
      <div className="logos">
        <IconContext.Provider value={{ size: "20px" }}>
          <ul className="logos-list">
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <BsFacebook />
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
