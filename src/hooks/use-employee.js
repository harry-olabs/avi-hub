import { useContext } from "react";
import EmployeeContext from "../contexts/employees.context";

const useEmployeeContext = () => {
  return useContext(EmployeeContext);
};

export default useEmployeeContext;
