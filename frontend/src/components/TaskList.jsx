import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  if (!tasks.length)
    return (
      <div style={{ textAlign: "center", color: "#b1b1b1", padding: "2rem 0" }}>
        No tasks yet. Add a task!
      </div>
    );
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
