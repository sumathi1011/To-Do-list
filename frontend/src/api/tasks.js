import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api/tasks";

// Get all tasks
export const getTasks = async () => {
  const res = await axios.get(API_BASE);
  return res.data;
};

// Create a new task
export const createTask = async (title) => {
  const res = await axios.post(API_BASE, { title });
  return res.data;
};

// Update a task
export const updateTask = async (id, updatedFields) => {
  const res = await axios.put(`${API_BASE}/${id}`, updatedFields);
  return res.data;
};

// Delete a task
export const deleteTask = async (id) => {
  await axios.delete(`${API_BASE}/${id}`);
};