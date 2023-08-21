import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import styles from "./EmployeeProfile.module.css";
import EmployeeInfo from "./component/EmployeeInfo";
import ContactInfo from "./component/ContactInfo";
import PassportInfo from "./component/PassportInfo";
import EmergencyContact from "./component/EmergencyContact";

function EmployeeProfile() {
  return (
    <div className="d-flex flex-column">
      <div className="card-wrapper d-flex">
        <EmployeeInfo />
        <div className={styles.vertical__line}></div>
        <ContactInfo />
        <div className={styles.contact__info__edit}>
            <FontAwesomeIcon icon={faEdit} className={styles.sidebar__icon} />
          </div>
      </div>
      <section className={styles.information__sections}>
        <PassportInfo />
        <EmergencyContact />
      </section>
    </div>
  );
}

export default EmployeeProfile;
