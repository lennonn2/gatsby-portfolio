import React from "react";
import { Helmet } from "react-helmet";

import App from "../components/App";

import "../styles/global.css";

export default () => (
  <>
    <Helmet>
      <meta charset="utf-8" />
      <title>Niall Lennon | Software Developer</title>
      <meta name="description" content="Portfolio page for Niall Lennon" />
      <meta name="author" content="Niall Lennon" />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <App />
  </>
);
