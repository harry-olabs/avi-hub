import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import styles from "./EmployeeTableRow.module.css"

const EmployeeRow = (props) => {
  const { name, email, avatar, role, creationDate, position } = props;
  const avatarSrc = require(`../../${avatar}`);

  return (
    <tr className={styles.employee__management__row}>
      <td>
        <div className={styles.employee__management__name__cell}>
          <div className={styles.employee__management__avatar}>
            <img src={avatarSrc} alt="Description" />
          </div>
          <div className={styles.employee__management__name__container}>
            <div>
              <span className={styles.employee__management__name}>{name}</span>
            </div>
            <div className={styles.employee__management__email}>{email}</div>
          </div>
        </div>
      </td>
      <td>
        <div
          className={`${styles.employee__management__role} ${
            styles[`employee__management__role__${role.toLowerCase().replace(' ', '')}`]
          }`}
        >
          {role}
        </div>
      </td>
      <td>{creationDate}</td>
      <td>{position}</td>
      <td>
        <div className={styles.employee__management__action__container}>
          <Link
            to={`/employee-profile`} // Adjust the route as needed
            className={`${styles.employee__management__action} ${styles.employee__management__action__view}`}
          >
            <FontAwesomeIcon icon={faEye} /> View
          </Link>
          <button
            className={`${styles.employee__management__action} ${styles.employee__management__action__edit}`}
          >
            <FontAwesomeIcon icon={faEdit} /> Edit
          </button>
          <button
            className={`${styles.employee__management__action} ${styles.employee__management__action__delete}`}
          >
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeRow;
  