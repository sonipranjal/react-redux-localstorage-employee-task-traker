export const reducerFunctions = {
  setFromLocalStorage: (state, action) => {
    state.employees = action.payload;
  },
  addNewEmployee: (state, action) => {
    state.employees.push(action.payload);
    localStorage.setItem('employees', JSON.stringify(state.employees));
  },
  removeEmployee: (state, action) => {
    const { id } = action.payload;
    const newState = state.employees.filter((employee) => employee.id !== id);
    state.employees = newState;
    localStorage.setItem('employees', JSON.stringify(state.employees));
  },
  addNewTask: (state, action) => {
    const { id, todoId, description } = action.payload;
    const employee = state.employees.find((ele) => ele.id === id);
    if (employee) {
      if (!employee.todos) {
        employee.todos = [];
      }
      employee.todos.push({ todoId, description, completed: false });
    }
    localStorage.setItem('employees', JSON.stringify(state.employees));
  },
  toggleTask: (state, action) => {
    const { id, todoId } = action.payload;
    const employee = state.employees.find((ele) => ele.id === id);
    if (employee) {
      const todo = employee.todos.find((todo) => todo.todoId === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
    localStorage.setItem('employees', JSON.stringify(state.employees));
  },
  removeTask: (state, action) => {
    const { id, todoId } = action.payload;
    const idx = state.employees.findIndex((ele) => ele.id === id);
    if (idx !== -1) {
      const newtodos = state.employees[idx].todos.filter(
        (todo) => todo.todoId !== todoId
      );
      state.employees[idx].todos = newtodos;
    }
    localStorage.setItem('employees', JSON.stringify(state.employees));
  },
};
