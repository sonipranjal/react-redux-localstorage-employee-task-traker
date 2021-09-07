import { createSlice } from '@reduxjs/toolkit';
import { reducerFunctions } from './utils/reducerFunctions';

const initialState = {
  employees: [
    {
      email: 'xyz@gmail.com',
      id: '9fa297c7-7de9-401c-9e57-ed83bb4ab719',
      name: 'Demo Employee',
      phoneNumber: '9123456789',
      projectInfo: 'dfjbdmfbv',
      slug: 'demo-employee',
      todos: [
        {
          todoId: '9fa297c7-7de9-401c-9e5kkjnfkdf7-ed83bb4ab719',
          description: 'hell1o world',
          completed: true,
        },
        {
          todoId: '9fa297dgsc7-7dfvdde9-401c-9e5kkjnfkdf7-ed83bb4ab719',
          description: 'hell1o wsfsdorld',
          completed: false,
        },
      ],
    },
  ],
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: reducerFunctions,
});

export const {
  addNewEmployee,
  removeEmployee,
  addNewTask,
  toggleTask,
  removeTask,
  setFromLocalStorage,
} = employeeSlice.actions;

export const selectAllEmployees = (state) => state.employee.employees;

export default employeeSlice.reducer;
