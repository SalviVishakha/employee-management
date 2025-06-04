
import React from 'react';
import {
  Container, Typography, TextField, Button, Paper
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEmployee } from '../context/Employee_context';

export default function EmployeeForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { addEmployee } = useEmployee();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    addEmployee(data);
    reset();
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>Add Employee</Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField label="Name" fullWidth margin="normal" {...register('name', { required: 'Name is required' })} error={!!errors.name} helperText={errors.name?.message} />
          <TextField label="Email" fullWidth margin="normal" {...register('email', { required: 'Email is required' })} error={!!errors.email} helperText={errors.email?.message} />
          <TextField label="Address" fullWidth margin="normal" {...register('address', { required: 'Address is required' })} error={!!errors.address} helperText={errors.address?.message} />
          <TextField label="Experience" fullWidth margin="normal" {...register('experience')} />
          <TextField label="Last Work Company" fullWidth margin="normal" {...register('lastCompany')} />
          <TextField label="Resignation Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} {...register('resignationDate')} />
          <TextField label="Joining Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} {...register('joiningDate')} />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Save</Button>
        </form>
      </Paper>
    </Container>
  );
}