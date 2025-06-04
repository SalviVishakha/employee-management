import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function EmployeeTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Experience</TableCell>
            <TableCell>Last Company</TableCell>
            <TableCell>Resignation Date</TableCell>
            <TableCell>Joining Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((emp, index) => (
            <TableRow key={index}>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.address}</TableCell>
              <TableCell>{emp.experience}</TableCell>
              <TableCell>{emp.lastCompany}</TableCell>
              <TableCell>{emp.resignationDate}</TableCell>
              <TableCell>{emp.joiningDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
