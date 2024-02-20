const {Router} = require('express');
const { getAllTasks, deleteTask, getTaskById, postTask, updateTask } = require('../controllers/task.controller');


const router = Router();

router.get('/task',getAllTasks);

router.get('/task/:id', getTaskById);

router.post('/task', postTask);

router.delete('/task/:id', deleteTask);

router.put('/task/:id', updateTask);

module.exports = router;

// const Task = require('../models/task.model');

// // Get all tasks
// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Get a single task by ID
// const getTaskById = async (req, res) => {
//   try {
//     const task = await Task.findById(req.params.id);
//     if (!task) {
//       return res.status(404).json({ error: 'Task not found' });
//     }
//     res.json(task);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Create a new task
// const createTask = async (req, res) => {
//   try {
//     const task = new Task(req.body);
//     await task.save();
//     res.status(201).json(task);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Update a task by ID
// const updateTask = async (req, res) => {
//   try {
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!task) {
//       return res.status(404).json({ error: 'Task not found' });
//     }
//     res.json(task);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Delete a task by ID
// const deleteTask = async (req, res) => {
//   try {
//     const task = await Task.findByIdAndDelete(req.params.id);
//     if (!task) {
//       return res.status(404).json({ error: 'Task not found' });
//     }
//     res.json({ message: 'Task deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// module.exports = {
//   getAllTasks,
//   getTaskById,
//   createTask,
//   updateTask,
//   deleteTask,
// };
