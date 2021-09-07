import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Task from './Task';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../store/employeeSlice';

const TodosComponent = ({ todos, id }) => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch(addNewTask);

  const handleAddingTask = (e) => {
    e.preventDefault();
    task.trim();
    if (!task) {
      toast.error('task must not be empty');
      return;
    }
    const newTask = {
      todoId: uuidv4(),
      description: task,
    };
    dispatch(addNewTask({ ...newTask, id }));
    setTask('');
  };

  return (
    <div>
      <Toaster />
      <div className="w-full px-4 py-5 mt-5 bg-white border-b rounded-t sm:px-6">
        <h2 className="mb-3 text-xl font-light text-center">All Todo Tasks</h2>
        <div className="overflow-hidden shadow dark:bg-gray-800 sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {todos ? (
              todos.map((todo) => <Task key={todo.todoId} {...todo} id={id} />)
            ) : (
              <p>please add todos to track your tasks!</p>
            )}
          </ul>
          <div className="w-full p-4 mx-auto md:w-1/2">
            <div className="relative ">
              <input
                type="text"
                className="w-full px-4 py-2 my-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Add Task"
                required
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              onClick={(e) => handleAddingTask(e)}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosComponent;
