import React from "react";
import styles from "./Layout.module.scss";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import MiniPlayer from "../MiniPlayer";

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className={styles["layout-container"]}>{children}</div>
      <MiniPlayer />
    </div>
  );
};

export default Layout;
