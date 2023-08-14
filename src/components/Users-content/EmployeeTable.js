import React from "react";

import EmployeeRow from "./EmployeeRow";
import styles from "../../styles/users.module.css";

const EmployeeTable = (props) => {
  const { employees } = props;

  return (
    <table className={styles.employee__management__table}>
      <thead>
        <tr>
          <th>NAME</th>
          <th></th>
          <th>CREATION DATE</th>
          <th>ROLE</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <EmployeeRow key={employee.id} {...employee} />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
