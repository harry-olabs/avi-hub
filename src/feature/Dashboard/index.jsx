import React from "react";
import Layout from "../../components/Layout";
import EmployeesCard from "../../components/cards/EmployeeCard";
import NewEmployeesCard from "../../components/cards/NewEmployeesCard";
import WelcomeCard from "../../components/cards/WelcomeCard";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.wrapper}>
            <EmployeesCard />
            <NewEmployeesCard />
            <WelcomeCard />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Dashboard;
