import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import styles from "./Employee-profile.module.css";
import EmployeeInfo from "./component/EmployeeInfo";
import ContactInfo from "./component/ContactInfo";
import PassportInfo from "./component/PassportInfo";
import EmergencyContact from "./component/EmergencyContact";

function EmployeeProfile() {
  return (
    <div className="d-flex">
      <div className={styles.employee__profile}>
        <div className={styles.employee__profile__section1}>
          <div className={styles.employee__profile__section1__info}>
            <div className={styles.EmployeeInfo}>
              <EmployeeInfo />
            </div>
            <div className={styles.vertical__contact}>
              <div className={styles.vertical__line}></div>
              <div className={styles.ContactInfo}>
                <ContactInfo />
              </div>
            </div>
          </div>
          <div className={styles.contact__info__right}>
            <div className={styles.contact__info__edit}>
              <FontAwesomeIcon icon={faEdit} className={styles.sidebar__icon} />
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
