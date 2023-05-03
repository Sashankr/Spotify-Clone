import React from "react";
import styles from "./Layout.module.scss";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className={styles["layout-container"]}>{children}</div>
    </div>
  );
};

export default Layout;
