import TodosComponent from './TodosComponent';

import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectAllEmployees, removeEmployee } from '../store/employeeSlice';

const EmployeeDetails = () => {
  const employees = useSelector(selectAllEmployees);
  const dispatch = useDispatch();
  const history = useHistory();

  let { slug } = useParams();

  const employee = employees.find((employee) => employee.slug === slug);

  const { name, phoneNumber, email, todos, projectInfo, id } = employee;

  const handleRemove = () => {
    dispatch(removeEmployee({ id }));
    history.push('/');
  };

  return (
    <div className="h-full bg-indigo-400">
      <div className="container max-w-3xl px-4 py-24 mx-auto sm:px-8">
        <Link
          to="/"
          className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >{`<- Go Back Home`}</Link>

        {slug !== null ? (
          <div className="max-w-2xl overflow-hidden shadow sm:rounded-lg">
            <div
              onClick={handleRemove}
              className="px-4 py-2 my-5 text-base font-semibold text-center text-white transition duration-200 ease-in bg-red-600 rounded-lg shadow-md cursor-pointer hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Remove This Employee
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 capitalize sm:mt-0 sm:col-span-2">
                    {name}
                  </dd>
                </div>
                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Phone Number
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {phoneNumber}
                  </dd>
                </div>
                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {email}
                  </dd>
                </div>

                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Project Info
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {projectInfo}
                  </dd>
                </div>
              </dl>
            </div>
            <TodosComponent todos={todos} id={id} />
          </div>
        ) : (
          <div>No record found</div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDetails;
