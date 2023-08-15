import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

import EmployeeTable from "../../components/EmployeeTable";
import styles from "./Users.module.css";

const employeesData = [
  {
    id: 1,
    name: "Joshua Gideon",
    email: "joshgideon.com",
    role: "Super Admin",
    creationDate: "2017-01-02",
    position: "CEO and Founder",
    avatar: "images/img5.jpg",
  },
  {
    id: 2,
    name: "Henry Solomon",
    email: "henrysolomon@gmail.com",
    role: "Admin",
    creationDate: "2020-11-04",
    position: "Web developer",
    avatar: "images/img3.png",
  },
  {
    id: 3,
    name: "Michael Orji",
    email: "michaelorji.com",
    role: "Admin",
    creationDate: "2021-04-02",
    position: "Graphics designer",
    avatar: "images/img1.jpg",
  },
  {
    id: 4,
    name: "Gabriel Grace",
    email: "gabrielgrace.com",
    role: "HR Admin",
    creationDate: "2009-09-04",
    position: "Human Resource",
    avatar: "images/img4.jpg",
  },
  {
    id: 5,
    name: "Tolulope Opeyemi",
    email: "tolulopeopeyemi.com",
    role: "Employee",
    creationDate: "2022-03-14",
    position: "Web designer",
    avatar: "images/img3.png",
  },
  {
    id: 6,
    name: "Jeffery Benson",
    email: "jeffbenson.com",
    role: "Employee",
    creationDate: "2011-06-20",
    position: "Project Manager",
    avatar: "images/img2.png",
  },
  {
    id: 7,
    name: "Habby Ogunlare",
    email: "habbyogunlare.com",
    role: "Admin",
    creationDate: "2019-12-04",
    position: "Web developer",
    avatar: "images/img5.jpg",
  },
];

const Users = () => {
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

      <EmployeeTable employees={employeesData} />
    </div>
  );
};

export default Users;
