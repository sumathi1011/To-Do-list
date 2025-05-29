import Task from "../models/Task.js";

// GET /api/tasks
export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// GET /api/tasks/:id
export const getTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    next(error);
  }
};

// POST /api/tasks
export const createTask = async (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title || title.trim() === "")
      return res.status(400).json({ message: "Title is required" });

    const task = new Task({ title: title.trim() });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

// PUT /api/tasks/:id
export const updateTask = async (req, res, next) => {
  try {
    const { title, completed } = req.body;
    const update = {};
    if (title !== undefined) update.title = title.trim();
    if (completed !== undefined) update.completed = completed;

    const task = await Task.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    });

    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/tasks/:id
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};