import { Link } from 'react-router-dom';

const Employee = ({ name, phoneNumber, email, slug }) => {
  return (
    <>
      <tr>
        <td className="px-5 py-5 text-sm bg-white border-gray-200">
          <div className="flex items-center">
            <p className="text-gray-900 capitalize whitespace-no-wrap">
              {name}
            </p>
          </div>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">{phoneNumber}</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">{email}</p>
        </td>
        <td
          colSpan="4"
          className="px-5 py-5 bg-white border-b border-gray-200 "
        >
          <Link
            to={`/employee/${slug}`}
            key={slug}
            className="px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Details
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Employee;
