import React from "react";

import ThemeIcon from "../ThemeIcon";

import styles from "./Header.module.css";

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button onClick={toggleTheme} className={styles.iconButton}>
          <span className={styles.themeText}>{theme}</span>
          <ThemeIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
