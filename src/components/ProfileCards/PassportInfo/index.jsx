import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

import styles from './PassportInfo.module.css';

function PassportInfo() {
  return (
    <div className={styles.passportInfoContainer}>
      <div className={styles.infoEdit}>
        <div className={styles.infoHeading}>Passport Information</div>
        <i className={`${styles.editIcon} far fa-edit`}></i>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>Passport Number:</div>
        <div className={styles.infoValue}>123456789</div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>Passport Expiry Date:</div>
        <div className={styles.infoValue}>2024-12-31</div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>Tel:</div>
        <div className={`${styles.infoValue} ${styles.infoValue__blue}`}>1234567890</div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>Nationality:</div>
        <div className={styles.infoValue}>Nigeria</div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>Religion:</div>
        <div className={styles.infoValue}>Muslim</div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>Marital Status:</div>
        <div className={styles.infoValue}>Single</div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>Employment of Spouse:</div>
        <div className={styles.infoValue}>No</div>
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

export default PassportInfo;
