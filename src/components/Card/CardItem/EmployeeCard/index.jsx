import React from "react";
import styles from "./EmployeeCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const EmployeesCard = () => {
  return (
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
  );
};

export default EmployeesCard;
