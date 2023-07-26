import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faIdBadge,
  faTachometer,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Sidebar.module.css";
import logo from "../../images/head.jpg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__card}>
        <img src={logo} alt="Description" />
        <div className={styles.sidebar__container}>
          <h4 className={styles.text_bold_500}>John Doe</h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
      <section className={styles.sidebar__menu}>
        <Link
          to="/"
          className={`${styles.sidebar__item} ${styles.sidebar__menu__active}`}
        >
          <FontAwesomeIcon
            icon={faTachometer}
            className={styles.sidebar__icon}
          />
          <span className={styles.sidebar__text}>Dashboard</span>
        </Link>
        <Link to="/users" className={styles.sidebar__item}>
          <FontAwesomeIcon icon={faUsers} className={styles.sidebar__icon} />
          <span className={styles.sidebar__text}>Manage Users</span>
        </Link>
        <Link to="/employee-profile" className={styles.sidebar__item}>
          <FontAwesomeIcon icon={faUser} className={styles.sidebar__icon} />
          <span className={styles.sidebar__text}>Employee profile</span>
        </Link>
        <Link to="/profile" className={styles.sidebar__item}>
          <FontAwesomeIcon icon={faIdBadge} className={styles.sidebar__icon} />
          <span className={styles.sidebar__text}>My profile</span>
        </Link>
      </section>
    </div>
  );
};

export default Sidebar;
