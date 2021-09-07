import { useDispatch } from 'react-redux';
import { removeTask, toggleTask } from '../store/employeeSlice';
import { FaTimes } from 'react-icons/fa';

const Task = ({ description, completed, todoId, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <li>
        <div className="flex items-center justify-between select-none hover:bg-gray-50 dark:hover:bg-gray-900">
          <div className="px-4 py-4 sm:px-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => dispatch(toggleTask({ todoId, id }))}
            >
              {completed ? (
                <p className="text-green-700 line-through text-md dark:text-white md:truncate">
                  {description}
                </p>
              ) : (
                <p className="text-red-700 text-md dark:text-white md:truncate">
                  {description}
                </p>
              )}
              <div className="flex flex-shrink-0 ml-1 ">
                {completed ? (
                  <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    Mark Pending
                  </p>
                ) : (
                  <p className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                    Mark Complete
                  </p>
                )}
              </div>
            </div>
          </div>
          <div
            className="px-4 cursor-pointer"
            onClick={() => dispatch(removeTask({ todoId, id }))}
          >
            <FaTimes className="text-red-600" />
          </div>
        </div>
      </li>
    </div>
  );
};

export default Task;
