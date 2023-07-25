import React from 'react';
import styles from './Sidebar.module.css';
import logo from "../../images/head.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faIdBadge } from '@fortawesome/free-solid-svg-icons';

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
        <a className={`${styles.sidebar__item} ${styles.sidebar__menu__active}`} href="/">
          <FontAwesomeIcon icon={faUser} className={styles.sidebar__icon} />
          <span className={styles.sidebar__text}>Dashboard</span>
        </a>
        <a className={styles.sidebar__item} href="users.html">
          <FontAwesomeIcon icon={faUsers} className={styles.sidebar__icon} />
          <span className={styles.sidebar__text}>Manage Users</span>
        </a>
        <a className={styles.sidebar__item} href="employee-profile.html">
          <FontAwesomeIcon icon={faUser} className={styles.sidebar__icon} />
          <span className={styles.sidebar__text}>Employee profile</span>
        </a>
        <a className={styles.sidebar__item} href="profile">
          <FontAwesomeIcon icon={faIdBadge} className={styles.sidebar__icon} />
          <span className={styles.sidebar__text}>My profile</span>
        </a>
      </section>
    </div>
  );
};

export default Sidebar;
