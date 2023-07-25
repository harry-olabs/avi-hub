import React from 'react';
import styles from './Card.module.css';
import EmployeesCard from '../../components/Card/CardItem/EmployeeCard';
import NewEmployeesCard from '../../components/Card/CardItem/NewEmployeesCard';
import WelcomeCard from '../../components/Card/CardItem/WelcomeCard';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.cards}>
        <EmployeesCard />
        <NewEmployeesCard />
        <WelcomeCard />
      </div>
    </div>
  );
};

export default Main;
