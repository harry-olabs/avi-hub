import React from "react";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import EmployeesCard from "../../components/cards/EmployeeCard";
import NewEmployeesCard from "../../components/cards/NewEmployeesCard";
import WelcomeCard from "../../components/cards/WelcomeCard";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Sidebar />
        {/* START main area */}
        <main className={styles.main}>
          <div className={styles.wrapper}>
            <EmployeesCard />
            <NewEmployeesCard />
            <WelcomeCard />
          </div>
        </main>
        {/* END main area */}
      </div>
    </div>
  );
};

export default Dashboard;
