// Sidebar.js
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const isLinkActive = (linkPath) => {
    return location.pathname.startsWith(linkPath);
  };

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
        <NavLink
          to="/dashboard"
          className={`${styles.sidebar__item} ${isLinkActive("/dashboard") && styles.sidebar__menu__active}`}
        >
          <FontAwesomeIcon
            icon={faTachometer}
            className={styles.sidebar__icon}
          />
          <span className={styles.sidebar__text}>Dashboard</span>
        </NavLink>
        <NavLink
          to="/users"
          className={`${styles.sidebar__item} ${isLinkActive("/users") && styles.sidebar__menu__active}`}
        >
          <FontAwesomeIcon icon={faUsers} className={styles.sidebar__icon} />
          <span className={styles.sidebar__text}>Manage Users</span>
        </NavLink>
        <NavLink
          to="/employee-profile"
          className={`${styles.sidebar__item} ${isLinkActive("/employee-profile") && styles.sidebar__menu__active}`}
        >
          <FontAwesomeIcon icon={faUser} className={styles.sidebar__icon} />
          <span className={styles.sidebar__text}>Employee profile</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={`${styles.sidebar__item} ${isLinkActive("/profile") && styles.sidebar__menu__active}`}
        >
          <FontAwesomeIcon icon={faIdBadge} className={styles.sidebar__icon} />
          <span className={styles.sidebar__text}>My profile</span>
        </NavLink>
      </section>
    </div>
  );
};

export default Sidebar;
