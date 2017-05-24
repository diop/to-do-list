var promise = require('bluebird');

var options = {
    promiseLab: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/todos';
var ddb = pgp(connectionString);

// Query functions

module.export = {
    getAllTasks: getAllTasks,
    getSingleTask: getSingleTask,
    createTask: createTask,
    updateTask: updateTask,
    removeTask: removeTask
};
