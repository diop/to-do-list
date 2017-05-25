const promise = require('bluebird')

const pgp = require('pg-promise')({
    promiseLib: promise
})

const connectionString = 'postgres://postgres@localhost:5432/todos'
const db = pgp(connectionString)

const getAllTasks = () => {
    return db.any('SELECT * FROM items')
}

const getSingleTask = (id) => {
    return db.none('SELECT * FROM items WHERE id=${id}')
}

const createTask = (task, isComplete) => {
    return db.none('INSERT INTO items(task, completed)' +
        'values($(task), ${isComplete}')
}

const updateTask = (id, task, isComplete) => {
    return db.none('UPDATE items SET task=$2, completed=$3 WHERE id=$1')
}

const removeTask = (id) => {
    return db.none('DELETE FROM tasks WHERE id=${id}')
}

const toggleComplete = (id, task, isComplete) => {
    return db.any('')
}

const toggleIncomplete = (id, task, isComplete) => {
    return db.any('')
}

module.exports = {
         getAllTasks: getAllTasks,
       getSingleTask: getSingleTask,
          createTask: createTask,
          updateTask: updateTask,
          removeTask: removeTask,
      toggleComplete: toggleComplete,
    toggleIncomplete: toggleIncomplete
}
