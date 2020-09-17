import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import { FaGithub, FaLinkedinIn, FaAngellist } from "react-icons/fa";

import styles from "./Hero.module.css";

const query = graphql`
  query {
    file(relativePath: { eq: "Niall2.jpg" }) {
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

const Hero = () => {
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <section className={styles.body}>
          <Img
            className={styles.imgWrapper}
            fluid={data.file.childImageSharp.fluid}
          />
          <div className={styles.name}>Niall Lennon</div>
          <p className={styles.text}>
            Software Developer - building cool things over at{" "}
            <a href="https://zenhub.com">ZenHub</a>
          </p>
          <div className={styles.icons}>
            <a
              href="https://github.com/lennonn2"
              className={styles.linkIcon}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className={styles.iconGH} />
            </a>
            <a
              href="https://www.linkedin.com/in/nialllennon2/"
              className={styles.linkIcon}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedinIn className={styles.iconLI} />
            </a>
            <a
              href="https://angel.co/u/niall-lennon"
              className={styles.linkIcon}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaAngellist className={styles.iconAL} />
            </a>
          </div>
        </section>
      )}
    />
  );
};

export default Hero;
