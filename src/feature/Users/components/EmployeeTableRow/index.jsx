import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./EmployeeTableRow.module.css";
import { useEmployeeContext } from "../../UserContext/EmployeeContext";

const EmployeeRow = ({
  id,
  name,
  email,
  avatarUrl,
  role,
  creationDate,
  position,
}) => {
  const { employees } = useEmployeeContext();

  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return null;
  }

  return (
    <tr className={styles.row}>
      <td>
        <div className={styles.cell}>
          <div className={styles.avatar}>
            <img src={employee.avatarUrl} alt="user-avatar" />
          </div>
          <div className={styles.employee__management__name__container}>
            <div>
              <span className={styles.employee__management__name}>
                {employee.name}
              </span>
            </div>
            <div className={styles.cell__email}>{employee.email}</div>
          </div>
        </div>
      </td>
      <td>
        <div
          className={`${styles.cell__role} ${
            styles[`role__${employee.role.toLowerCase().replace(" ", "")}`]
          }`}
        >
          {employee.role}
        </div>
      </td>
      <td>{employee.creationDate}</td>
      <td>{employee.position}</td>
      <td>
        <div className={styles.actions}>
          <Link
            to={`/users/profile`} // Adjust the route as needed
            className={`${styles.actionBtn} ${styles.action__view}`}
          >
            <FontAwesomeIcon icon={faEye} /> View
          </Link>
          <button className={`${styles.actionBtn} ${styles.action__edit}`}>
            <FontAwesomeIcon icon={faEdit} /> Edit
          </button>
          <button className={`${styles.actionBtn} ${styles.action__delete}`}>
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeRow;
