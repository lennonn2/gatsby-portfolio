import React from "react";
import UBLogo from "../../images/unbounce.svg";
import ZHLogo from "../../images/zenhub.svg";

import styles from "./Experience.module.css";

const Experience: React.FC = (): JSX.Element => {
  return (
    <div className={styles.experience}>
      <div className={styles.item}>
        <div className={styles.imgWrapper}>
          <UBLogo />
        </div>
        <section>
          <h3 className={styles.header}>Unbounce</h3>
          <h5 className={styles.subheader}>April 2016 - September 2018</h5>
          <p className={styles.text}>
            I'm baby twee edison bulb meditation copper mug af trust fund
            hashtag taxidermy shoreditch. Sustainable quinoa keffiyeh venmo art
            party meh asymmetrical viral brooklyn trust fund swag
            intelligentsia. Beard salvia pinterest 8-bit seitan kinfolk twee
            etsy banh mi cronut organic synth locavore raw denim kitsch. Paleo
            raw denim taiyaki man bun chia. Forage vinyl 8-bit live-edge
            knausgaard. Pug humblebrag retro lo-fi, everyday carry you probably
            haven't heard of them poke typewriter meditation church-key
            adaptogen pour-over. Street art mumblecore.
          </p>
        </section>
      </div>
      <div className={styles.item}>
        <div className={styles.imgWrapper}>
          <ZHLogo />
        </div>
        <section>
          <h3 className={styles.header}>ZenHub</h3>
          <h5 className={styles.subheader}>May 2019 - Present</h5>
          <p className={styles.text}>
            I'm baby twee edison bulb meditation copper mug af trust fund
            hashtag taxidermy shoreditch. Sustainable quinoa keffiyeh venmo art
            party meh asymmetrical viral brooklyn trust fund swag
            intelligentsia. Beard salvia pinterest 8-bit seitan kinfolk twee
            etsy banh mi cronut organic synth locavore raw denim kitsch. Paleo
            raw denim taiyaki man bun chia. Forage vinyl 8-bit live-edge
            knausgaard. Pug humblebrag retro lo-fi, everyday carry you probably
            haven't heard of them poke typewriter meditation church-key
            adaptogen pour-over. Street art mumblecore.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Experience;
