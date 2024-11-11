
import { useState, useEffect } from 'react';
import { getTasks, updateTask, deleteTask } from './services/taskService';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId)
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
  };
   
  const handleCompleted = async (task) => {
    await updateTask(task._id, { ...task, status: 'Completed', updatedAt: Date.now() })
    const response = await getTasks();
    setTasks(response.data);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Management</h1>
      <TaskForm selectedTask={selectedTask} setSelectedTask={setSelectedTask} setTasks={ setTasks} />
      <TaskList tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit} handleCompleted={handleCompleted} />
    </div>
  );
};

export default App;
