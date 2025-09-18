import React from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'red' }}>CRUD Operation Using Redux</h1>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}
