import React from 'react';
import styles from './WelcomeCard.module.css';
import logo from "../../../../images/head.jpg";

const WelcomeCard = () => {
  return (
    <div className={styles.card__item3}>
      <div className={styles.item3__container}>
        <img src={logo} alt="Description" />
        <div className={styles.item3__content}>
          <h3 className={styles.text__bold__500}>Welcome, John</h3>
          <p>Thurs, 13 June 2023</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
