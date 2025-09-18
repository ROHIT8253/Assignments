import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee, updateEmployee } from "../employeesSlice";

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: "", age: "", role: "" });

  const startEdit = (emp) => {
    setEditingId(emp.id);
    setForm(emp);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(form));
    setEditingId(null);
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped table-bordered table-hover shadow">
        <thead className="table-dark text-center">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center align-middle">
          {employees.map((emp) =>
            editingId === emp.id ? (
              <tr key={emp.id}>
                <td>
                  <input
                    className="form-control"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    className="form-control"
                    type="number"
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    className="form-control"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={saveEdit}
                  >
                     Save
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.role}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => startEdit(emp)}
                  >
                     Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(deleteEmployee(emp.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
