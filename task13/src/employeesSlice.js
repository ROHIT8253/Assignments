import { createSlice, nanoid } from '@reduxjs/toolkit';

const employeesSlice = createSlice({
  name: 'employees',
  initialState: [
    { id: '1', name: 'Mandar Salunke', age: 24, role: 'Technical Support Engineer' },
    { id: '2', name: 'Sahil Mehraj', age: 45, role: 'CEO' },
    { id: '3', name: 'Alex Johnson', age: 33, role: 'Software Engineer' },
    { id: '4', name: 'Eisha Sharma', age: 20, role: 'Intern' },
    { id: '5', name: 'Rohit Theurkar', age: 24, role: 'Software Engineer Intern' },
    { id: '6', name: 'Soumik Mallick', age: 24, role: 'Engineer' },
  ],
  reducers: {
    addEmployee: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, age, role }) {
        return { payload: { id: nanoid(), name, age: Number(age), role } };
      },
    },
    updateEmployee(state, action) {
      const { id, name, age, role } = action.payload;
      const emp = state.find(e => e.id === id);
      if (emp) {
        emp.name = name;
        emp.age = Number(age);
        emp.role = role;
      }
    },
    deleteEmployee(state, action) {
      return state.filter(e => e.id !== action.payload);
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
