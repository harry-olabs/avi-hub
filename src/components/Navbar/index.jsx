import React from 'react';
import styles from './Navbar.module.css';
import logo from "../../images/head.jpg";
import sniper from "../../images/sniper.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__left}>
        <div className={styles.navbar__left__logo}>
          <img src={sniper} alt="Description" />
        </div>
        <div className={styles.navbar__text}>
          <p>AVI-HUB</p>
        </div>
      </div>
      <div className={styles.navbar__right}>
        <img src={logo} alt="Description" />
      </div>
    </nav>
  );
};

export default Navbar;
