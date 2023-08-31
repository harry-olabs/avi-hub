import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

import EmployeeTable from "./components/EmployeeTable";
import styles from "./Users.module.css";

import  useEmployeeContext  from "../../hooks/use-employee";

const Users = () => {
  const { employees } = useEmployeeContext();

  return (
    <div className="d-flex flex-column card-wrapper">
      <header className={styles.header}>
        <div className="align-self-end">
          <button className={styles.addBtn}>
            <FontAwesomeIcon icon={faPlus} />
            <span>Add</span>
          </button>
        </div>
        <div className="d-flex justify-content-between">
          <h3 className={styles.header__title}>Manage Users</h3>
          <div className={styles.header__search}>
            <input
              type="text"
              className={styles.header__search__input}
              placeholder="Search something..."
            />
            <button className={styles.header__search__btn}>
              <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            </button>
          </div>
        </div>
      </header>

      <EmployeeTable employees={employees} />
    </div>
  );
};

export default Users;
