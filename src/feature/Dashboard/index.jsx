import React from "react";

import EmployeesCard from "../../components/cards/EmployeeCard";
import NewEmployeesCard from "../../components/cards/NewEmployeesCard";
import WelcomeCard from "../../components/cards/WelcomeCard";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <EmployeesCard />
      <NewEmployeesCard />
      <WelcomeCard />
    </div>
  );
};

export default Dashboard;
