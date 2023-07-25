import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Card';
import styles from './Dashboard.module.css';



const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
