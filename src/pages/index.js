import React from "react";
import Img from "gatsby-image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Helmet } from "react-helmet";

import styles from "./index.module.css";

export default ({ data }) => (
  <div className={styles.app}>
    <Helmet>
      <meta charset="utf-8" />

      <title>Niall Lennon | Software Developer</title>
      <meta name="description" content="Portfolio page for Niall Lennon" />
      <meta name="author" content="Niall Lennon" />
      <meta name="robots" content="index, follow" />
    </Helmet>
    {/* <header className={styles.header}>Header</header> */}
    <section className={styles.body}>
      <Img
        className={styles.imgWrapper}
        fluid={data.file.childImageSharp.fluid}
      />
      <div className={styles.name}>Niall Lennon</div>
      <p className={styles.text}>
        Software Developer - building cool things over at{" "}
        <a href="https://zenhub.com">zenhub</a>
      </p>
      <div className={styles.icons}>
        <a href="https://github.com/lennonn2" className={styles.linkIcon}>
          <FaGithub className={styles.iconGH} />
        </a>
        <a
          href="https://www.linkedin.com/in/nialllennon2/"
          className={styles.linkIcon}
        >
          <FaLinkedinIn className={styles.iconLI} />
        </a>
      </div>
    </section>
  </div>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
