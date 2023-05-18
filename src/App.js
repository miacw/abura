import { render } from "@testing-library/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Form from "./Form";
import Nav from "./Components/Nav";
import AnimatedCharacters from "./Components/AnimatedText";
import Slideshow from "./Components/Slideshow";
import AnimatedSmallLogo from "./Components/Animations/AnimatedSmallLogo";
function App() {
  const [replay, setReplay] = useState(true);
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

  const sentenceText = [
    { type: "header1", text: "TASTES AND" },
    {
      type: "header2",
      text: "TALES OF THE",
    },
    {
      type: "header3",
      text: "DIASPORA.",
    },
  ];

  const container = {
    visible: {
      transition: { staggerChildren: 0.025 },
    },
  };

  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };

  return (
    <div>
      <Nav />
      <div className="container">
        {/* <Form /> */}

        {/* <Slideshow /> */}
      </div>
    </div>
  );
}

export default App;
