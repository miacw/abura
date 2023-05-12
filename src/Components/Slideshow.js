import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { render } from "@testing-library/react";
import AnimatedCharacters from "./AnimatedText";

export const Child1 = (show) => {
  const [replay, setReplay] = useState(true);
  const MINUTE_MS = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      setReplay(!replay);
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

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

  const handleReplay = () => {
    setReplay(!replay);
    // setTimeout(() => {
    //   setReplay(true);
    // }, 600);
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
        <button onClick={handleReplay} className="replayBtn">
          Replay
        </button>
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

  const handleReplay = () => {
    setReplay(!replay);
    // setTimeout(() => {
    //   setReplay(true);
    // }, 600);
  };
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
          <button onClick={handleReplay} className="replayBtn">
            Replay
          </button>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
export const Child3 = (show) => {
  return (
    <motion.div
      initial={{ x: 1000, y: "200%" }}
      animate={{ x: 0, transition: { ease: "linear", duration: 0.5 } }}
      exit={{ x: -1000 }}
    >
      <h1>Child3</h1>
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
  const [showChild1, setChild1] = useState(true);
  const [showChild2, setChild2] = useState(false);
  const [showChild3, setChild3] = useState(false);

  const nextStep = () => {
    if (index === children.length - 1) {
      setIndex(0);
    } else {
      if (index === 0) {
        setChild1(false);
        setChild2(true);
      }
      if (index === 1) {
        setChild2(false);
        setChild3(true);
      }
      if (index === 2) {
        setChild3(false);
        setChild1(true);
      }
      setIndex(index + 1);
    }
  };
  return (
    <>
      <motion.div className="slideshow-container">{children[index]}</motion.div>
      <button className="nextBtn" onClick={nextStep}>
        Next
      </button>
    </>
  );
};

export default Slideshow;
