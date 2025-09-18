import { createSlice } from '@reduxjs/toolkit';
import employeesData from './data/employees.json';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    list: employeesData,
  },
  reducers: {}
});

export const selectEmployees = (state) => state.employees.list;
export default employeeSlice.reducer;
