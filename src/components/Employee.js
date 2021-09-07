import { Link } from 'react-router-dom';

const Employee = ({ name, phoneNumber, email, slug }) => {
  return (
    <tr>
      <td className="px-5 py-5 text-sm bg-white border-gray-200">
        <div className="flex items-center">
          <p className="text-gray-900 capitalize whitespace-no-wrap">{name}</p>
        </div>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">{phoneNumber}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">{email}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <Link
          to={`/employee/${slug}`}
          key={slug}
          className="px-4 py-2 text-white transition delay-75 bg-indigo-500 rounded-2xl hover:bg-indigo-900"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default Employee;
