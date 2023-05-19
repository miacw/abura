import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import { motion } from "framer-motion";
import "./SheildButton.css";

const SheildButton = () => {
  const [showText, setshowText] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) {
      //alert("Visit the well");
      setshowText(true);
    } else {
      setshowText(false);
    }
  }, [hovered]);

  const line1 = "Visit The";
  const line2 = "Well";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, staggerChildren: 0.08 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="socials-container">
      <div className="socials">
        <IconContext.Provider value={{ size: "15px" }}>
          <ul className="socials-list">
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
            <li>
              <a href="https://www.facebook.com/profile.php?id=100092637402397">
                <BsTiktok />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100092637402397">
                <BsYoutube />
              </a>
            </li>
          </ul>
        </IconContext.Provider>
      </div>
      <div className="shield-container">
        <motion.svg
          className="sheild"
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
          whileHover={{ scale: 1.1 }}
          xmlns="http://www.w3.org/2000/svg"
          fill="#f6584d"
          viewBox="0 0 16 16"
          id="IconChangeColor"
        >
          {" "}
          <path
            d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
            id="mainIconPathAttribute"
          ></path>{" "}
        </motion.svg>
        <motion.p
          className="load-screen-message"
          variants={sentence}
          // initial="hidden"
          animate={showText ? "visible" : "hidden"}
        >
          {line1.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
          {line2.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.p>
      </div>
    </div>
  );
};

export default SheildButton;
