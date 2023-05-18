import React from "react";
import { motion } from "framer-motion";
import "./AnimatedSmallLogo.css";

const AnimatedSmallLogo = () => {
  return (
    <div className="logo-container">
      <div className="u-container">
        <motion.svg
          animate={{ y: -40 }}
          transition={{ type: "spring", stiffness: 40, duration: 2 }}
          className="U"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 56.3"
          style={{
            height: "60px",
            width: "60px",
            position: "relative",
            top: "40px",
          }}
        >
          <g fill="#f15a4f">
            <path d="m0,31.22V0h9.05v31.27c0,10.24,6.42,17,15.95,17s15.95-6.76,15.95-17V0h9.05v31.22c0,15.09-10.02,25.08-25,25.08S0,46.3,0,31.22Z">
              {/* <animateMotion
                path="M0,0 0 50 90 0 90 10"
                begin="0s"
                dur="2s"
                repeatCount="indefinite"
              /> */}
            </path>
          </g>
        </motion.svg>

        <svg
          className="line"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 8.89"
          // style={{ height: "60px", width: "60px" }}
          style={{ paddingTop: "2px" }}
        >
          <g fill="#f15a4f">
            <path d="m50,8.89H0V0h50v8.89Z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedSmallLogo;
