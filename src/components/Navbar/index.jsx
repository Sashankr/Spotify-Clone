import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <section className={styles["navbar__navigate"]}>
          <i
            className={`fa-solid fa-chevron-left ${styles["navbar__navigate-icon"]}`}
          ></i>
          <i
            className={`fa-solid fa-chevron-right ${styles["navbar__navigate-icon"]}`}
          ></i>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
