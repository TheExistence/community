//** @jsx jsx */

import React from "react";
import PropTypes from "prop-types";
import { Flex, jsx } from "theme-ui";

import { Header, Footer } from "@modules/navigation";

import "./prismjs.css"; //<- Load in Prismjs css. Our custom styles have to be loaded this way cause Prismjs is blackboxed from our own code.

const Layout = ({ children }) => (
  <>
    <Header />
    <Flex
      as="main"
      sx={{
        maxWidth: "1364px",
        m: "0 auto",
        pl: 4,
        pr: 0,
        position: "relative",
      }}
      className="content-boundary"
    >
      {children}
    </Flex>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
