const pool = require('../db');

const getAllTasks = async (req, res) => {
    try {
        const getAllTasks = await pool.query('SELECT * FROM task');

        console.log(getAllTasks);
        res.json(getAllTasks.rows);
    } catch (error) {
        console.log(err.message);
    }
};

const postTask = async (req, res) => {
    const { tittle, description } = req.body;

    try {
        console.log(tittle, description);

        const result = await pool.query('INSERT INTO task (tittle, description) VALUES ($1, $2) RETURNING *', [tittle, description]);

        res.json(result.rows[0]);
        console.log(result);
    } catch (err) {
        res.json({ error: err.message });
    }
};

const getTaskById = async (req, res) => {
    const { id } = req.params;

    const getTaskById = await pool.query('SELECT * FROM task WHERE id = $1', [id])

    console.log(getTaskById);

    console.log(req.params.id);
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