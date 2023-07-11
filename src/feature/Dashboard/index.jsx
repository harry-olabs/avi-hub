import React from 'react';
import styles from './Dashboard.module.css';
import logo from "../../images/head.jpg";
import sniper from "../../images/sniper.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus, faUsers, faIdBadge } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
  return (
    <div>
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
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.sidebar__card}>
            <img src={logo} alt="Description" />
            <div className={styles.sidebar__container}>
              <h4 className={styles.text_bold_500}>John Doe</h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
          <section className={styles.sidebar__menu}>
            <a className={`${styles.sidebar__item} ${styles.sidebar__menu__active}`} href="#">
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
        <div className={styles.main}>
          <div className={styles.cards}>
            <div className={`${styles.card} ${styles.item1}`}>
              <div className={styles.card__item1__first}>
                <div className={styles.card__item1__first__items}>
                  <div className={styles.card__item1__first__both}>
                    <FontAwesomeIcon icon={faUsers} className={styles.items__icon} />
                    <h5>Employees</h5>
                  </div>
                </div>
                <div className={styles.card__item1__number}>
                  <h3 className={styles.text__bold__500}>700</h3>
                </div>
              </div>
              <div className={styles.card__content}>
                <h3>Employee Structure</h3>
                <div className={styles.card__items__number}>
                  <div className={styles.card__items__number__column}>
                    <h2>70%</h2>
                    <h4 className={styles.text__normal}>Male</h4>
                  </div>
                  <div className={styles.card__items__number__column}>
                    <h2>30%</h2>
                    <h4 className={styles.text__normal}>Female</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.card} ${styles.item1}`}>
              <div className={styles.card__item1__first}>
                <div className={styles.card__item1__first__items}>
                  <div className={styles.card__item1__first__both}>
                    <FontAwesomeIcon icon={faUserPlus} className={styles.items__icon} />
                    <h5>New Employees</h5>
                  </div>
                </div>
                <div className={styles.card__item1__number}>
                  <h3 className={styles.text__bold__500}>30</h3>
                </div>
              </div>
              <div className={styles.card__content}>
                <h3>Today</h3>
                <div className={styles.card__items__number}>
                  <div className={styles.card__items__number__column}>
                    <h2>70%</h2>
                    <h4 className={styles.text__normal}>Male</h4>
                  </div>
                  <div className={styles.card__items__number__column}>
                    <h2>30%</h2>
                    <h4 className={styles.text__normal}>Female</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card__item3}>
              <div className={styles.item3__container}>
                <img src={logo} alt="Description" />
                <div className={styles.item3__content}>
                  <h3 className={styles.text__bold__500}>Welcome, John</h3>
                  <p>Thurs, 13 June 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
