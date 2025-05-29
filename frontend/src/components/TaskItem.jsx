import React, { useState } from "react";

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleToggle = () => onUpdate(task._id, { completed: !task.completed });
  const handleEdit = () => setEditing(true);
  const handleSave = () => {
    if (editTitle.trim() && editTitle.trim() !== task.title) {
      onUpdate(task._id, { title: editTitle.trim() });
    }
    setEditing(false);
  };
  const handleCancel = () => {
    setEditTitle(task.title);
    setEditing(false);
  };

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        className="task-checkbox"
      />
      {editing ? (
        <>
          <input
            className="edit-input"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") handleCancel();
            }}
            autoFocus
          />
          <button className="task-action-btn edit" onClick={handleSave}>
            Save
          </button>
          <button className="task-action-btn" onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span
            className={`task-title${task.completed ? " completed" : ""}`}
            onDoubleClick={handleEdit}
            title="Double-click to edit"
          >
            {task.title}
          </span>
          <div className="task-actions">
            <button
              className="task-action-btn edit"
              onClick={handleEdit}
              title="Edit"
            >
              Edit
            </button>
            <button
              className="task-action-btn delete"
              onClick={() => onDelete(task._id)}
              title="Delete"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;
