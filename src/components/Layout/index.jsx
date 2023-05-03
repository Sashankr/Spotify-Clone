import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
