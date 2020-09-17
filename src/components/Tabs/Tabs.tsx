import React, { useState } from "react";

import Experience from "../Experience";
import Projects from "../Projects";

import styles from "./Tabs.module.css";

const Tabs: React.FC = (): JSX.Element => {
  const [tab, setTab] = useState(0);
  const experienceClassname = `${styles.tab} ${tab === 0 ? styles.active : ""}`;
  const projectsClassname = `${styles.tab} ${tab === 1 ? styles.active : ""}`;
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button onClick={() => setTab(0)} className={experienceClassname}>
          Experience
        </button>
        <button onClick={() => setTab(1)} className={projectsClassname}>
          Projects
        </button>
      </div>
      {tab === 0 ? <Experience /> : <Projects />}
    </div>
  );
};

export default Tabs;
