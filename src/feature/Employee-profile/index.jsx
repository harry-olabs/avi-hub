import React from "react";
import styles from "./Employee-profile.module.css";
import EmployeeInfo from "../../components/ProfileCards/EmployeeInfo";
import ContactInfo from "../../components/ProfileCards/ContactInfo";
import PassportInfo from "../../components/ProfileCards/PassportInfo";
import EmergencyContact from "../../components/ProfileCards/EmergencyContact";

function EmployeeProfile() {
  return (
    <div className={styles.main}>
      <div className={styles.employee__profile}>
        <div className={styles.employee__profile__section1}>
          <div className={styles.employee__profile__section1__info}>
            <div className={styles.EmployeeInfo}>
            <EmployeeInfo />
            </div>
            <div className={styles.vertical__line}></div>
            <div className={styles.ContactInfo}>
              <ContactInfo />
            </div>
          </div>
        </div>
        <section className={styles.information__sections}>
          <PassportInfo />
          <EmergencyContact />
        </section>
      </div>
    </div>
  );
}

export default EmployeeProfile;
