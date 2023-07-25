import React from 'react';
import styles from './Card.module.css';
import logo from "../../images/head.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
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
  );
};

export default Main;
