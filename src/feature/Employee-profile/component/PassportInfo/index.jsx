import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import employeeData from "../../data/EmployeeData";
import styles from "./PassportInfo.module.css";

function PassportInfo() {
  const {
    passportNumber,
    expiryDate,
    tel,
    nationality,
    religion,
    maritalStatus,
    employmentOfSpouse,
  } = employeeData.passportInfo;

  return (
    <div className={styles.passportInfoContainer}>
      <div className={styles.infoEdit}>
        <div className={styles.infoHeading}>Passport Information</div>
        <i className={`${styles.editIcon} far fa-edit`}></i>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>Passport Number:</div>
        <div className={styles.infoValue}>{passportNumber}</div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>Passport Expiry Date:</div>
        <div className={styles.infoValue}>{expiryDate}</div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>Tel:</div>
        <div className={styles.infoValue}>{tel}</div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>Nationality:</div>
        <div className={styles.infoValue}>{nationality}</div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>Religion:</div>
        <div className={styles.infoValue}>{religion}</div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>Marital Status:</div>
        <div className={styles.infoValue}>{maritalStatus}</div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>Employment of Spouse:</div>
        <div className={styles.infoValue}>{employmentOfSpouse}</div>
      </div>
      <div className={styles.contact__info__right}>
        <div className={styles.contact__info__edit}>
          <FontAwesomeIcon icon={faEdit} className={styles.sidebar__icon} />
        </div>
      </div>
    </div>
  );
}

export default PassportInfo;
