import React, { useState } from "react";

const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [inputError, setInputError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setInputError("Task title is required");
      return;
    }
    setInputError("");
    onAdd(title.trim());
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        className="add-task-input"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="add-task-btn">
        Add
      </button>
      {inputError && (
        <span style={{ color: "#ef4444", marginLeft: 8 }}>{inputError}</span>
      )}
    </form>
  );
};

export default AddTaskForm;
