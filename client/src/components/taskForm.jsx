
import { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../services/taskService';

const TaskForm = ({
    selectedTask, setTasks, setSelectedTask
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
    }
  }, [selectedTask]);

  const handleSubmit =async (e) => {
    e.preventDefault();
    const task = { title, description };

    if (selectedTask) {
      await updateTask(selectedTask._id, { title, description, status: 'pending', updatedAt: Date.now() });
      const response = await getTasks();
      setTasks(response.data);
      setSelectedTask(null);
    } else {
      await createTask({ title, description, status: 'pending' });
      const response = await getTasks();
      setTasks(response.data);
    }

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-semibold mb-2">
        {selectedTask ? 'Edit Task' : 'Add New Task'}
      </h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="w-full p-2 border mb-2 rounded"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="w-full p-2 border mb-2 rounded"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {selectedTask ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  );
};

export default TaskForm;
