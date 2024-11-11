import React from 'react';

function TaskList({ tasks, handleDelete, handleEdit, handleCompleted }) {

  return (
    <div className="max-w-xl mx-auto my-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Task List</h1>
      <ul className="space-y-4">
        {tasks.map((task) => (
          
          <li
            key={task._id}
            className={`p-4 border border-gray-300 rounded-lg shadow-md transition
              ${task.status == 'Completed' ? 'bg-green-200' : 'bg-white'}`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{task.title}</h3>
                <p className="text-gray-700 mt-2">{task.description}</p>
                <p className="text-gray-700 mt-2">
                  {`CreatedAt: ${new Date(task.createdAt).getDate()}-
                  ${new Date(task.createdAt).getMonth() + 1}-
                  ${new Date(task.createdAt).getFullYear()},
                  ${new Date(task.createdAt).getHours()}:
                  ${new Date(task.createdAt).getMinutes()}`}
                </p>
                <p className="text-gray-700 mt-2">
                  {`UpdatedAt: ${new Date(task.updatedAt).getDate()}-
                  ${new Date(task.updatedAt).getMonth() + 1}-
                  ${new Date(task.updatedAt).getFullYear()},
                  ${new Date(task.updatedAt).getHours()}:
                  ${new Date(task.updatedAt).getMinutes()}`}
                </p>
                <p className={`mt-2 font-medium ${task.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                  Status: {task.status}
                </p>
              </div>
              {task.status === 'pending' && <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(task)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleCompleted(task)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                  Done
                </button>
              </div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
