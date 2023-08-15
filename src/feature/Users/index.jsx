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
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.employee__management__phase1}>
          <div className={styles.employee__management__search}>
            <div className={styles.adds}>
              <button className={styles.add}>
                <FontAwesomeIcon icon={faPlus} className={styles.addIcon} />
                <span>Add</span>
              </button>
            </div>
            <div className={styles.row__content}>
              <div className={styles.employee__management__text}>
                Manage Users
              </div>
              <div className={styles.search}>
                <input
                  type="text"
                  className={styles.employee__management__search__input}
                  placeholder="Search something..."
                />
                <button className={styles.search__button}>
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={styles.searchIcon}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <EmployeeTable employees={employeesData} />
      </div>
    </main>
  );
};

export default Users;
