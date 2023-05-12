import React from "react";
import { motion } from "framer-motion";
import "./AnimateText.css";

// Word wrapper
const Wrapper = (props) => {
  return <span className="word-wrapper">{props.children}</span>;
};

const tagMap = {
  header1: "h1",
  header2: "h1",
  header3: "h1",
  header4: "h1",
  header5: "h1",
  header6: "h1",
};

const classMap = {
  header1: "header1",
  header2: "header2",
  header3: "header3",
  header4: "header4",
  header5: "header5",
  header6: "header6",
};

const AnimatedCharacters = (props) => {
  const item = {
    hidden: {
      y: "200%",

      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1 },
    },
    visible: {
      y: 0,

      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  // split each word in props.text into an array
  const splitWords = props.text.split(" ");
  const words = [];

  // push each word into array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  const Tag = tagMap[props.type];
  const headerClass = classMap[props.type];

  return (
    <Tag className={classMap[props.type]}>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    className={headerClass}
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </Tag>
  );
};

export default AnimatedCharacters;
