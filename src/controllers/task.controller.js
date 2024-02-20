

const getAllTasks =  (req, res) => {
    res.send('Get all tasks');
};

const postTask = (req, res) => {
    const task = req.body;
    console.log(task);
    
    res.send('Create a new task');
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