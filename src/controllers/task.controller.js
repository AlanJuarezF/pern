const pool = require('../db');

const getAllTasks = (req, res) => {
    res.send('Get all tasks');
};

const postTask = async (req, res) => {
    const { tittle, description } = req.body;

    try {
        console.log(tittle, description);

        const result = await pool.query('INSERT INTO task (tittle, description) VALUES ($1, $2)', [tittle, description]);

        res.json(result.rows[0]);
        console.log(result);
    } catch (err) {
        res.json({ error: err.message });
    }
};

const getTaskById = (req, res) => {
    res.send('Get a single task by ID');
};

const deleteTask = (req, res) => {
    res.send('Delete a task');
};

const updateTask = (req, res) => {
    res.send('Update a task');
};

module.exports = {
    getAllTasks,
    postTask,
    getTaskById,
    deleteTask,
    updateTask,
};