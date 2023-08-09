import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import styles from './ContactInfo.module.css';

function ContactInfo() {
  return (
    <div className={styles.contact__info}>
      <div className={styles.contact__info__left}>
        <div className={styles.contact__info__column}>
          <div className={styles.contact__info__row}>
            <div className={styles.contact__info__label}>Phone:</div>
            <div className={`${styles.contact__info__value} ${styles.blue}`}>1234567890</div>
          </div>
          <div className={styles.contact__info__row}>
            <div className={styles.contact__info__label}>Email:</div>
            <div className={`${styles.contact__info__value} ${styles.blue}`}>johndoe@gmail.com</div>
          </div>
          <div className={styles.contact__info__row}>
            <div className={styles.contact__info__label}>Birthday:</div>
            <div className={styles.contact__info__value}>30th July</div>
          </div>
          <div className={styles.contact__info__row}>
            <div className={styles.contact__info__label}>Address:</div>
            <div className={styles.contact__info__value}>21st, surulere, Nigeria</div>
          </div>
          <div className={styles.contact__info__row}>
            <div className={styles.contact__info__label}>Gender:</div>
            <div className={styles.contact__info__value}>Male</div>
          </div>
        </div>
      </div>
      <div className={styles.contact__info__right}>
        <div className={styles.contact__info__edit}>
        <FontAwesomeIcon
            icon={faEdit}
            className={styles.sidebar__icon}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
