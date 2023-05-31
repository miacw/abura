import React, { useState, useEffect, useRef, ReactDOM } from "react";
import { IconContext } from "react-icons";
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { motion } from "framer-motion";
import "./SheildButton.css";

const SheildButton = () => {
  const [showText, setshowText] = useState(false);
  const [hovered, setHovered] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    if (hovered) {
      //alert("Visit the well");
      setshowText(true);
    } else {
      setshowText(false);
    }
  }, [hovered]);

  return (
    <div className="socials-container">
      <div className="socials">
        <IconContext.Provider value={{ className: "socials-icons" }}>
          <ul className="socials-list">
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="https://www.instagram.com/aburalondon/">
                <BsInstagram />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="https://twitter.com/aburalondon?s=20">
                <BsTwitter />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="https://www.facebook.com/profile.php?id=100092637402397">
                <BsFacebook />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="https://www.facebook.com/profile.php?id=100092637402397">
                <BsTiktok />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="https://www.facebook.com/profile.php?id=100092637402397">
                <BsYoutube />
              </a>
            </motion.li>
          </ul>
        </IconContext.Provider>
      </div>
      <motion.div
        className="shield-container"
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        whileHover={{ scale: 1.05 }}
      >
        <>
          <motion.svg
            fill="#1f1212"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 532 511"
            className="sheild "
          >
            <path
              className="btnSvgPath"
              id="aburaU"
              d="M532,245c0,146.91-119.09,266-266,266h0C119.09,511,0,391.91,0,245V0s532,0,532,0v245Z"
            />
          </motion.svg>
          <motion.p
            className="popupText"
            initial={{ opacity: 0, y: 100 }}
            animate={
              showText
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : 0
            }
          >
            Visit the Well{" "}
            <button style={{ border: "none", background: "none" }}>
              <IconContext.Provider value={{ className: "arrow" }}>
                <HiOutlineArrowCircleRight />
              </IconContext.Provider>
            </button>
          </motion.p>
        </>

        {/* <motion.svg
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
        </motion.svg> */}

        {/* <motion.div
          ref={myRef}
          className="sheild-test"
          initial={{ rotate: 180 }}
          whileHover={{ scale: 1.1 }}
          onMouseMove={(e) => {
            const x = e.pageX - myRef.current.offsetLeft;
            const y = e.pageY - myRef.current.offsetTop;

            myRef.current.style.setProperty("--y", y + "px");
            myRef.current.style.setProperty("--x", x + "px");
          }}
        >
          <p>Visit the Well</p>
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default SheildButton;
