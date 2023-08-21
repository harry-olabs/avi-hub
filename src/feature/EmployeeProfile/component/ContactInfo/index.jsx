import React from "react";
import employeeData from "../../data/EmployeeData";
import styles from "./ContactInfo.module.css";

function ContactInfo() {
  const { phone, email, birthday, address, gender } = employeeData.contactInfo;

  return (
    <div className={styles.contact__info}>
      <div className={styles.contact__info__left}>
        <div className={styles.contact__info__column}>
          <div className={styles.contact__info__row}>
            <div className={styles.contact__info__label}>Phone:</div>
            <div className={styles.contact__info__value}>{phone}</div>
            
          </div>
          <div className={styles.contact__info__row}>
            <div className={styles.contact__info__label}>Email:</div>
            <div className={styles.contact__info__value}>{email}</div>
          </div>
          <div className={styles.contact__info__row}>
            <div className={styles.contact__info__label}>Birthday:</div>
            <div className={styles.contact__info__value}>{birthday}</div>
          </div>
          <div className={styles.contact__info__row}>
            <div className={styles.contact__info__label}>Address:</div>
            <div className={styles.contact__info__value}>{address}</div>
          </div>
          <div className={styles.contact__info__row}>
            <div className={styles.contact__info__label}>Gender:</div>
            <div className={styles.contact__info__value}>{gender}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
