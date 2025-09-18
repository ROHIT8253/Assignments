import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../employeesSlice";

export default function EmployeeForm() {
  const dispatch = useDispatch();
  const [emp, setEmp] = useState({ name: "", age: "", role: "" });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emp.name || !emp.age || !emp.role) {
      alert("Please fill all fields before submitting.");
      return;
    }
    dispatch(addEmployee(emp));
    setEmp({ name: "", age: "", role: "" });
    setShowForm(false); // Hide form after adding
  };

  return (
   <div className="container mt-4">
  {!showForm ? (
    <div className="d-flex justify-content-end">
      <button
        className="btn btn-primary btn-lg"
        onClick={() => setShowForm(true)}
      >
      Add 
      </button>
    </div>
      ) : (
        <div className="card shadow p-4 rounded-3">
          <h4 className="mb-3 text-center text-primary">Add New Employee</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter employee name"
                value={emp.name}
                onChange={(e) => setEmp({ ...emp, name: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter employee age"
                value={emp.age}
                onChange={(e) => setEmp({ ...emp, age: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Role</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter employee role"
                value={emp.role}
                onChange={(e) => setEmp({ ...emp, role: e.target.value })}
              />
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-success">
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
