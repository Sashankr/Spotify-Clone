import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <section className={styles["navbar__navigate"]}>
          <i class="fa-solid fa-chevron-left"></i>
          <i class="fa-solid fa-chevron-right"></i>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
