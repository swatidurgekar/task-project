
import axios from 'axios';

const API_URL = 'http://localhost:3002';

export const getTasks = () => axios.get(`${API_URL}/tasks`);
export const createTask = (data) => axios.post(`${API_URL}/create`, data);
export const updateTask = (id, data) => axios.put(`${API_URL}/edit/${id}`, data);
export const deleteTask = (id) => axios.get(`${API_URL}/delete/${id}`);
