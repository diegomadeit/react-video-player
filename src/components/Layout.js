import React from "react";
import Header from "./Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className={styles.content}>{children}</div>
  </>
);

export default Layout;
