import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { render } from "@testing-library/react";
import AnimatedCharacters from "./AnimatedText";

import AnimatedLogo from "./AnimatedLogo";

export const Child1 = (show) => {
  const [replay, setReplay] = useState(true);
  const MINUTE_MS = 4000;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setReplay(!replay);
  //     console.log("playing");
  //   }, MINUTE_MS);

  //   return () => {
  //     clearInterval(interval);

  //     console.log("clearing");
  //   }; // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  // }, []);

  React.useEffect(() => {
    const interval = setTimeout(() => setReplay(!replay), 4000);
    return () => {
      clearInterval(interval); // removes React warning when gets unmounted
    };
  }, [replay]);

  const placeholderText = [
    {
      type: "header1",
      text: "Flavour,",
    },
    {
      type: "header2",
      text: "Rhythm,",
    },
    { type: "header3", text: "Expression." },
  ];

  const container = {
    visible: {
      transition: { staggerChildren: 0.025 },
    },
  };

  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0, transition: { ease: "linear", duration: 0.5 } }}
      exit={{ x: -1000, transition: { delay: 1 } }}
    >
      <motion.div
        className="headers"
        initial="hidden"
        animate={replay ? "visible" : "hidden"}
        variants={container}
      >
        <div className="text-container">
          {placeholderText.map((item, index) => {
            return <AnimatedCharacters {...item} key={index} />;
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Child2 = (show) => {
  const [replay, setReplay] = useState(true);

  const sentenceText = [
    { type: "header4", text: "TASTES AND" },
    {
      type: "header5",
      text: "TALES OF THE",
    },
    {
      type: "header6",
      text: "DIASPORA.",
    },
  ];

  const container = {
    visible: {
      transition: { staggerChildren: 0.025 },
    },
    exit: {
      y: -1000,
      transition: { ease: "linear", duration: 0.5 },
    },
  };

  React.useEffect(() => {
    const interval = setTimeout(() => setReplay(!replay), 4000);
    return () => {
      clearInterval(interval); // removes React warning when gets unmounted
    };
  }, [replay]);
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0, transition: { ease: "linear", duration: 0.5 } }}
      exit={{ x: -1000, transition: { delay: 1 } }}
    >
      <AnimatePresence>
        <motion.div
          className="headers"
          initial="hidden"
          animate={replay ? "visible" : "hidden"}
          variants={container}
        >
          <div className="text-container">
            {sentenceText.map((item, index) => {
              return <AnimatedCharacters {...item} key={index} />;
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export const Child3 = () => {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0, transition: { ease: "linear", duration: 0.5 } }}
      exit={{ x: -1000 }}
    >
      {/* <div className="text-container"> */}
      <div style={{ display: "flex", margin: 0, width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
            width: "100%",
          }}
        >
          <AnimatedLogo />
          <AnimatedLogo />
          <AnimatedLogo />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
            width: "100%",
          }}
        >
          <AnimatedLogo />
          <AnimatedLogo />
          <AnimatedLogo />
        </div>
      </div>
    </motion.div>
  );
};

const Slideshow = () => {
  const children = [
    <Child1 showChild1 />,
    <Child2 showChild2 />,
    <Child3 showChild3 />,
  ];
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const interval = setTimeout(() => {
      if (index === children.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
    return () => {
      clearInterval(interval); // removes React warning when gets unmounted
    };
  }, [index]);

  return (
    <>
      <motion.div
        className={index === 2 ? "last-slide" : "slideshow-container"}
      >
        {children[index]}
      </motion.div>
      {/* <button className="nextBtn" onClick={nextStep}>
        Next
      </button> */}
    </>
  );
};

export default Slideshow;
