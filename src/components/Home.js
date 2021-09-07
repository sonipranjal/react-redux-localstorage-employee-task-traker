import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectAllEmployees,
  setFromLocalStorage,
} from '../store/employeeSlice';
import { useState, useEffect } from 'react';

import Employee from './Employee';

const Home = () => {
  const employees = useSelector(selectAllEmployees);
  const [value, setValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('employees'));
    dispatch(setFromLocalStorage(localData));
  }, [dispatch]);

  return (
    <div className="h-full min-h-screen bg-indigo-400">
      <div className="container max-w-3xl px-4 mx-auto sm:px-8 ">
        <div className="py-8">
          <h2 className="pb-5 text-3xl leading-tight text-center text-white">
            Employee Task Manager
          </h2>
          <Link
            className="w-full px-4 py-2 my-5 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            to="/add-new-employee"
          >
            Add New Employee
          </Link>
          <div className="flex flex-row justify-between w-full mt-5 mb-1 sm:mb-0">
            <div className="flex w-full">
              <input
                type="text"
                className="flex-1 w-full px-4 py-2 mr-5 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                placeholder={`Search ` + value}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="flex items-center justify-center">
                <label className="px-1 py-2 font-medium text-white rounded-sm">
                  Filter By
                </label>
                <select
                  className="block w-full h-full px-1 py-2 border-none rounded-lg focus:outline-none"
                  name="filterby"
                  id="filterby"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  <option value="name">name</option>
                  <option value="tasks">tasks</option>
                  <option value="project">project</option>
                </select>
              </div>
            </div>
          </div>
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-medium text-left text-indigo-600 uppercase bg-white border-b border-gray-200"
                    >
                      Employee Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-medium text-left text-indigo-600 uppercase bg-white border-b border-gray-200"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-medium text-left text-indigo-600 uppercase bg-white border-b border-gray-200"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-medium text-left text-indigo-600 uppercase bg-white border-b border-gray-200"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {employees ? (
                    employees
                      .filter((employee) => {
                        switch (value) {
                          case 'project':
                            return employee.projectInfo
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase());
                          case 'tasks':
                            return employee.todos.some((todo) =>
                              todo.description.includes(
                                searchQuery.toLowerCase()
                              )
                            );
                          default:
                            return employee.name
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase());
                        }
                      })
                      .map((employee) => (
                        <Employee key={employee.id} {...employee} />
                      ))
                  ) : (
                    <tr>
                      <td
                        colSpan="3"
                        className="h-40 text-4xl text-center text-white"
                      >
                        No Employees! add employees to start!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
