import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import employeeData from "../../data/EmployeeData";
import styles from "./EmergencyContact.module.css";

function EmergencyContact() {
  const emergencyContacts = employeeData.emergencyContacts;

  return (
    <div className={styles.emergencyContactContainer}>
      <div className={styles.infoEdit}>
        <h2 className={styles.infoHeading}>Emergency Contact</h2>
        <div className={styles.contact__info__edit}>
          <FontAwesomeIcon icon={faEdit} className={styles.sidebar__icon} />
        </div>
      </div>

      <div className={styles.infoColumn}>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Name:</div>
          <div className={styles.infoValue}>{emergencyContacts[0].name}</div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Relationship:</div>
          <div className={styles.infoValue}>
            {emergencyContacts[0].relationship}
          </div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Phone:</div>
          <div className={styles.infoValue}>{emergencyContacts[0].phone}</div>
        </div>
      </div>

      <div className={styles.thinLine}></div>

      <div className={styles.infoColumn}>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Name:</div>
          <div className={styles.infoValue}>{emergencyContacts[1].name}</div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Relationship:</div>
          <div className={styles.infoValue}>
            {emergencyContacts[1].relationship}
          </div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>Phone:</div>
          <div className={styles.infoValue}>{emergencyContacts[1].phone}</div>
        </div>
      </div>
    </div>
  );
}

export default EmergencyContact;
