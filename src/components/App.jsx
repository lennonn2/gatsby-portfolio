import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Hero from "./Hero";
import Header from "./Header";
import Tabs from "./Tabs";

import Background from "../images/background.inline.svg";
import styles from "./index.module.css";
import "../styles/vars.css";

const App = () => {
  const savedTheme =
    (typeof window !== "undefined" && window.localStorage.getItem("theme")) ||
    null;
  const [theme, setTheme] = useState(savedTheme);
  const themeClass =
    (theme || savedTheme) === "light" ? "lightTheme" : "darkTheme";

  const toggleTheme = () => {
    const newTheme = (theme || savedTheme) === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <Helmet>
        <body className={themeClass} />
      </Helmet>
      <div className={`${styles.app}`}>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Hero />
        <Tabs />
      </div>
    </>
  );
};

export default App;
