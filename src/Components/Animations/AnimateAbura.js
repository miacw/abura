import React, { useState } from "react";
import { motion, stagger } from "framer-motion";
import "./AnimateAbura.css";

const ASvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.9 50" fill="#f15a4f">
    <path d="m0,50h6.4l1.7-5.7c.2-.5.9-2.5,3.4-2.5h15.6c2.4,0,3.2,2,3.3,2.5l1.8,5.7h6.7L24.3,0h-10.1L0,50Zm11.2-17l7.1-26.2c.1-.5.3-.9.8-.9s.8.4.9.9l7.3,26.2c.2.8.4,3.3-2.6,3.3h-10.9c-3,.1-2.8-2.5-2.6-3.3Z" />
  </svg>
);

const BSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35.3 50.1"
    fill="#f15a4f"
  >
    <path d="m0,50.1h16c11.7,0,19.3-6.3,19.3-17.4,0-6.5-2.8-11.2-7.9-13.8,4.6-1.4,6.1-5.6,6.1-9.1,0-5.9-4.1-9.8-11.1-9.8H0v50.1h0Zm6.4-7.9v-18.7c0-1.8,1.2-3.1,3-3.1h5.7c8.4,0,13.8,4.6,13.8,12.1s-5.4,12.2-13.8,12.2h-5.9c-1.7,0-2.8-1-2.8-2.5Zm0-29.6v-4.6c0-1.5,1.1-2.5,2.8-2.5h12.4c3.4,0,5.5,1.9,5.5,4.8s-2,4.8-5.5,4.8h-12.4c-1.7,0-2.8-1-2.8-2.5Z" />
  </svg>
);

const RSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.5 50" fill="#f15a4f">
    <path d="m.1,50h6.3v-27.7c0-.8.2-1.9,1.6-1.9,1.2,0,1.7,1.1,2.1,1.6l18.2,28h7.3l-17.8-27.2c-.3-.4-.5-.8-.5-1.2,0-.7.5-1.3,1.7-1.3h6.9c6.3,0,10.6-4.2,10.6-10.2S32.2,0,25.9,0H0l.1,50H.1ZM6.4,12.1v-4.1c0-1.9,1.2-2.7,3.1-2.7h15.2c3.4,0,5.5,1.8,5.5,4.8s-2.1,4.8-5.5,4.8h-15.2c-1.9.1-3.1-.7-3.1-2.8Z" />
  </svg>
);

const USvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35.2 49.9"
    fill="#f15a4f"
  >
    <path d="m17.6,39.5c10.5,0,17.6-7,17.6-17.6V0h-6.4v22c0,7.2-4.5,11.9-11.2,11.9s-11.2-4.8-11.2-11.9V0H0v21.9c0,10.6,7.1,17.6,17.6,17.6Zm17.5,10.4H0v-6.2h35.1v6.2Z" />
  </svg>
);
const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const Wrapper = (props) => {
  return <span /*className="word-wrapper"*/>{props.children}</span>;
};

const ItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 24, duration: 6 },
  },
  closed: {
    opacity: 0,
    y: "150%",
  },
};

const AnimateAbura = () => {
  const item = {
    closed: {
      y: "200%",
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,

      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        type: "spring",
        bounce: 0,
        stiffness: 45,

        duration: 2,
        delayChildren: 0.3,
        staggerChildren: 0.8,
      },
    },
  };

  const text = "A DIASPORA LEGACY";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, staggerChildren: 0.5 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,

      transition: { duration: 3.5, delay: 1.8 },
    },
  };

  return (
    <div className="logo-animation">
      <div className="logo-ul-container">
        <motion.ul
          className="motion-ul"
          initial="closed"
          animate="open"
          transition={{ duration: 1.5, delay: 2 }}
          variants={{
            open: {
              transition: {
                // type: "spring",
                ease: "linear",
                bounce: 0,
                duration: 2.5,
                delay: 0.9,
                delayChildren: 0.6,
                staggerChildren: 0.3,
              },
            },
            closed: {},
          }}
        >
          {/* <motion.li variants={ItemVariants}>{ASvg}</motion.li>
      <motion.li variants={ItemVariants}>{BSvg}</motion.li>
      <motion.li variants={ItemVariants}>{USvg}</motion.li>
      <motion.li variants={ItemVariants}>{RSvg}</motion.li>
      <motion.li variants={ItemVariants}>{ASvg}</motion.li> */}
          <motion.li variants={item}>{ASvg}</motion.li>
          <motion.li variants={item}>{BSvg}</motion.li>
          <motion.li variants={item}>{USvg}</motion.li>
          <motion.li variants={item}>{RSvg}</motion.li>
          <motion.li variants={item}>{ASvg}</motion.li>
        </motion.ul>
      </div>
      <div className="underline-container">
        {/* <motion.div
          className="underline"
          style={{ overflow: "hidden" }}
          initial={{ x: -800 }}
          animate={{ x: 2000 }}
          transition={{
            duration: 6,
            ease: "linear",
          }}
        ></motion.div> */}
        <div className="header-container">
          <motion.h2
            variants={sentence}
            initial="hidden"
            animate={"visible"}
            transition={{ delay: 0.8 }}
          >
            {text.split("").map((char, index) => {
              return (
                <motion.span key={index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default AnimateAbura;
