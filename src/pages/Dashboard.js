import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEmployee } from '../context/Employee_context';
import EmployeeTable from '../components/Employee_table';

export default function Dashboard() {
  const navigate = useNavigate();
  const { employees } = useEmployee();

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Employee Dashboard</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/employee-form')}
        sx={{ mb: 2 }}
      >
        Add Employee
      </Button>
      <EmployeeTable data={employees} />
    </Container>
  );
}
