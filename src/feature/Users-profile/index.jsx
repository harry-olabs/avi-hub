import React from "react";
import Layout from "../../components/Layout";
import styles from "../Dashboard/Dashboard.module.css";

const Users = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h3>this is the users-profile page</h3>
        </div>
      </main>
    </Layout>
  );
};

export default Users;
