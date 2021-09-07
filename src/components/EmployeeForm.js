import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { slugify } from '../utils';
import toast, { Toaster } from 'react-hot-toast';

import { useSelector, useDispatch } from 'react-redux';
import { selectAllEmployees, addNewEmployee } from '../store/employeeSlice';

import { v4 as uuidv4 } from 'uuid';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [projectInfo, setProjectInfo] = useState('');
  const [email, setEmail] = useState('');

  let history = useHistory();

  const employees = useSelector(selectAllEmployees);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email | !name | !phoneNumber | !projectInfo) {
      toast.error('All fields are required');
      return;
    }

    const slug = slugify(name);
    const isPresent = employees
      ? employees.some(
          (ele) =>
            (ele.email === email) |
            (ele.phoneNumber === phoneNumber) |
            (ele.slug === slug)
        )
      : false;

    if (isPresent) {
      toast.error('Employee already added');
      return;
    }

    let employee = {
      name: name.trim(),
      phoneNumber: phoneNumber.trim(),
      projectInfo: projectInfo.trim(),
      email: email.trim(),
      todos: [],
      slug,
      id: uuidv4(),
    };
    dispatch(addNewEmployee(employee));
    history.push('/');
  };

  return (
    <div className="h-full">
      <Toaster />
      <div className="container max-w-3xl px-4 mx-auto sm:px-8 ">
        <section className="h-screen py-6 bg-opacity-50">
          <div className="flex justify-center my-2">
            <Link
              to="/"
              className="px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >{`<- Go Back Home`}</Link>
          </div>
          <form className="container max-w-2xl mx-auto bg-white rounded-lg shadow-xl md:w-3/4">
            <div className="p-4 bg-indigo-600 rounded-t-md">
              <h1 className="text-center text-white">Add New Employee</h1>
            </div>
            <div className="space-y-6 bg-white">
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">Account</h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                  <div className="relative ">
                    <input
                      type="email"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">Personal info</h2>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                    <div className="relative ">
                      <input
                        type="text"
                        required={true}
                        id="user-info-name"
                        className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative ">
                      <input
                        type="tel"
                        maxLength="10"
                        className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Phone number"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="space-y-6 bg-white">
                <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                  <h2 className="max-w-sm mx-auto md:w-1/3">Project Info</h2>
                  <div className="max-w-sm mx-auto md:w-2/3">
                    <div className="relative">
                      <textarea
                        className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Project Info"
                        required
                        value={projectInfo}
                        onChange={(e) => setProjectInfo(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                  <button
                    className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    onClick={(e) => handleSubmit(e)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EmployeeForm;
