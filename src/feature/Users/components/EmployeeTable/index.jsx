import React from "react";

import EmployeeRow from "../EmployeeTableRow";
import styles from "./EmployeeTable.module.css";
import { useEmployeeContext } from "../../UserContext/EmployeeContext";

const EmployeeTable = () => {
  const { employees } = useEmployeeContext();

  return (
    <table className={styles.table}>
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
