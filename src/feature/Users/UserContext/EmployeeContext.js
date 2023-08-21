import React, { createContext, useContext, useState } from "react";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Joshua Gideon",
      email: "joshgideon.com",
      role: "Super Admin",
      creationDate: "2017-01-02",
      position: "CEO and Founder",
      avatarUrl: "/images/img5.jpg",
    },
    {
      id: 2,
      name: "Henry Solomon",
      email: "henrysolomon@gmail.com",
      role: "Admin",
      creationDate: "2020-11-04",
      position: "Web developer",
      avatarUrl: "/images/img3.png",
    },
    {
      id: 3,
      name: "Michael Orji",
      email: "michaelorji.com",
      role: "Admin",
      creationDate: "2021-04-02",
      position: "Graphics designer",
      avatarUrl: "/images/img1.jpg",
    },
    {
      id: 4,
      name: "Gabriel Grace",
      email: "gabrielgrace.com",
      role: "HR Admin",
      creationDate: "2009-09-04",
      position: "Human Resource",
      avatarUrl: "/images/img4.jpg",
    },
    {
      id: 5,
      name: "Tolulope Opeyemi",
      email: "tolulopeopeyemi.com",
      role: "Employee",
      creationDate: "2022-03-14",
      position: "Web designer",
      avatarUrl: "/images/img3.png",
    },
    {
      id: 6,
      name: "Jeffery Benson",
      email: "jeffbenson.com",
      role: "Employee",
      creationDate: "2011-06-20",
      position: "Project Manager",
      avatarUrl: "/images/img2.png",
    },
    {
      id: 7,
      name: "Habby Ogunlare",
      email: "habbyogunlare.com",
      role: "Admin",
      creationDate: "2019-12-04",
      position: "Web developer",
      avatarUrl: "/images/img5.jpg",
    },
  ]);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => {
  return useContext(EmployeeContext);
};
