import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className={styles.content}>{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
