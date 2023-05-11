import React from "react";
import "./Nav.css";
import logoPNG from "../public/content/logo-png.png";

const Nav = () => {
  function triggerForm() {
    window._klOnsite = window._klOnsite || [];
    window._klOnsite.push(["openForm", "R9uZQE"]);
  }
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={logoPNG} alt="logo-png" />
      </div>
      <button onClick={triggerForm} className="popupBtn">
        Stay in the Loop
      </button>
    </div>
  );
};

export default Nav;
