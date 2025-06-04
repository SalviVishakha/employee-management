import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Loginpage';
import RegisterPage from './pages/Registerpage';
import Dashboard from './pages/Dashboard';
import EmployeeForm from './pages/Employee_form';
import { EmployeeProvider } from './context/Employee_context';

function App() {
  return (
    <EmployeeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
        </Routes>
      </BrowserRouter>
    </EmployeeProvider>
  );
}

export default App;
