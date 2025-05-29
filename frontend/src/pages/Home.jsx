import React, { useEffect, useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { getTasks, createTask, updateTask, deleteTask } from "../api/tasks";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch tasks on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch all tasks
  const fetchTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  // Create task
  const handleAdd = async (title) => {
    try {
      const newTask = await createTask(title);
      setTasks([newTask, ...tasks]);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to add task");
    }
  };

  // Update task (toggle complete or edit title)
  const handleUpdate = async (id, updatedFields) => {
    try {
      const updated = await updateTask(id, updatedFields);
      setTasks(tasks.map((t) => (t._id === id ? updated : t)));
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to update task");
    }
  };

  // Delete task
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to delete task");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">To-Do List</h1>
      <AddTaskForm onAdd={handleAdd} />
      {error && <Error message={error} />}
      {loading ? (
        <Loader />
      ) : (
        <TaskList
          tasks={tasks}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
