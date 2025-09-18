import React from 'react';
import { useSelector } from 'react-redux';
import { selectEmployees } from './employeeSlice';


function EmployeeList() {
  const employees = useSelector(selectEmployees);

  return (
    <div className="container mt-4" style={{ backgroundColor: "gray" }}>
      <div className="row" >
        {employees.map((emp) => (
          <div className="col-md-3 mb-3" key={emp.id}>
            <div className="card">
              <img src={emp.image} className="card-img-top" alt={emp.name} />
              <div className="card-body">
                <h5 className="card-title">{emp.name}</h5>
                <p className="card-text">Role: {emp.role}</p>
                <p className="card-text">Age: {emp.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
