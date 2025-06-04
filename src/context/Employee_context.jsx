import React, { createContext, useContext, useState } from 'react';

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  const updateEmployee = (updatedEmployee, index) => {
    setEmployees((prev) =>
      prev.map((emp, i) => (i === index ? updatedEmployee : emp))
    );
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployee = () => useContext(EmployeeContext);