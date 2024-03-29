import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faIdBadge,
  faTachometer,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Sidebar.module.css";
import logo from "../../../images/head.jpg";

const Sidebar = () => {
    /**
   * Determines whether to set active class when the nav link item is active
   * @param isActive Represents the active state for sidebar nav link
   */
  
  const shouldSetActiveClass = (isActive, url) =>
    isActive && url === window.location.pathname
      ? styles.sidebar__menu__active
      : "";

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
          className={({ isActive }) =>
            `${styles.sidebar__item} ${shouldSetActiveClass(
              isActive,
              "/dashboard"
            )}`
          }
        >
          <FontAwesomeIcon
            icon={faTachometer}
            className={styles.sidebar__icon}
          />
          <span className={styles.sidebar__text}>Dashboard</span>
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `${styles.sidebar__item} ${shouldSetActiveClass(isActive, "/users")}`
          }
        >
          <FontAwesomeIcon icon={faUsers} className={styles.sidebar__icon} />
          <span className={styles.sidebar__text}>Manage Users</span>
        </NavLink>
        <NavLink
          to="/users/profile"
          className={({ isActive }) =>
            `${styles.sidebar__item} ${shouldSetActiveClass(
              isActive,
              "/users/profile"
            )}`
          }
        >
          <FontAwesomeIcon icon={faUser} className={styles.sidebar__icon} />
          <span className={styles.sidebar__text}>Employee profile</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${styles.sidebar__item} ${shouldSetActiveClass(isActive, "/profile")}`
          }
        >
          <FontAwesomeIcon icon={faIdBadge} className={styles.sidebar__icon} />
          <span className={styles.sidebar__text}>My profile</span>
        </NavLink>
      </section>
    </div>
  );
};

export default Sidebar;
