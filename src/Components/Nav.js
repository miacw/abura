import React from "react";
import "./Nav.css";

const Nav = () => {
  function triggerForm() {
    window._klOnsite = window._klOnsite || [];
    window._klOnsite.push(["openForm", "R9uZQE"]);
  }
  return (
    <div className="nav-container">
      <button onClick={triggerForm} className="popupBtn">
        Stay in the Loop
      </button>
    </div>
  );
};

export default Nav;
