import React from "react";
import styles from "./EmployeeInfo.module.css";
import head from "../../../../images/head.jpg";
import employeeData from "../../data/employee.metadata";

function EmployeeInfo() {

  const { name, role } = employeeData.emergencyContacts[0];

  return (
    <div className={styles.employee__info}>
      <div className={styles.employee__info__img}>
        <img src={head} alt="Description" />
      </div>
      <div className={styles.employee__info__details}>
        <div className={styles.employee__info__design}>
          <h2 className={styles.employee__info__name}>{name}</h2>
          <h5 className={`${styles.employee__info__position} ${styles.grey}`}>
            {role}
          </h5>
        </div>
        <h3 className={`${styles.employee__info__job__title} ${styles.grey}`}>
          Web Designer
        </h3>
        <div className={styles.employee__info__id}>
          <h5 className={styles.employee__info__id__number}>
            Employee ID : FT - 0001
          </h5>
          <h5 className={`${styles.employee__info__join__date} ${styles.grey}`}>
            State of Join : 1st Jan 2023
          </h5>
        </div>
      </div>
    </div>
  );
}

export default EmployeeInfo;
