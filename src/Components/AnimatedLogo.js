import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Slideshow.css";

import logoSVGRed from "../public/content/logo-red2.svg";
import logoSVGGreen from "../public/content/logo-green.svg";
import logoSVGCream from "../public/content/logo-cream.svg";
import logoSVGBlack from "../public/content/logo-black.svg";

const AnimatedLogo = (number) => {
  let [index, setIndex] = useState(0);

  const logosArr = [
    { src: logoSVGRed, alt: "logo-red" },
    {
      src: logoSVGCream,
      alt: "logo-cream",
    },
    {
      src: logoSVGGreen,
      alt: "logo-green",
    },
    {
      src: logoSVGBlack,
      alt: "logo-black",
    },
  ];

  React.useEffect(() => {
    const interval = setTimeout(
      () => setIndex((index + 1) % logosArr.length),
      350
    );
    return () => {
      clearInterval(interval); // removes React warning when gets unmounted
    };
  }, [index]);

  return <img src={logosArr[index].src} alt={logosArr[index].src}></img>;
};

export default AnimatedLogo;
