import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

import styles from './EmergencyContact.module.css';

function EmergencyContact() {
  return (
    <div className={styles.emergencyContactContainer}>
      <div className={styles.infoEdit}>
        <h2 className={styles.infoHeading}>Emergency Contact</h2>
        <i className={`${styles.editIcon} far fa-edit`}></i>
      </div>
      <div className={styles.infoColumn}>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Name:</div>
          <div className={styles.infoValue}>John Doe</div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Relationship:</div>
          <div className={styles.infoValue}>Relative</div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Phone:</div>
          <div className={styles.infoValue}>9876543210</div>
        </div>
      </div>
      <div className={styles.thinLine}></div>
      <div className={styles.infoColumn}>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Name:</div>
          <div className={styles.infoValue}>Jane Smith</div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Relationship:</div>
          <div className={styles.infoValue}>Friend</div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Phone:</div>
          <div className={styles.infoValue}>1234567890</div>
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

export default EmergencyContact;
