var promise = require('bluebird');

var options = {
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres@localhost:5432/todos';
var db = pgp(connectionString);

// Query functions

function getAllTasks(req, res, next) {
    db.any('select * from items')
        .then(function (data) {
            res.status(200)
                .render('index', {
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL tasks'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getSingleTask(req, res, next) {
    var taskID = parseInt(req.params.id);
    db.one('select * from items where id = $1', taskID)
        .then(function (data){
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE task'
                });
        })
        .catch(function (err){
            return next(err);
        });
}

function createTask(req, res, next) {
    const task = request.body

    db.none('insert into items(task, isComplete)' +
        'values(${task}), ${completed}',
      req.body)
      .then(function () {
          res.status(200)
            .json({
                status: 'success',
                message: 'Inserted one task'
            });
      })
      .catch(function (err) {
          return next(err);
      });
}

function updateTask(req, res, next) {
    db.none('update items set task=$1, isComplete=$2 where id=$3',
        [req.body.task, req.body.completed, parseInt(req.params.id)])
        .then(function(){
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated task'
                });
        })
        .catch(function (err){
            return next(err);
        });
}

function removeTask(req, res, next) {
    var taskID = parseInt(req.param.id);
    db.result('delete from items where id = $1', taskID)
        .then(function (result) {
            /* jshint ignore: start */
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Removed ${result.rowCount} task'
                });
            /* jshint ignore:end */
        })
        .catch(function (err){
            return next(err);
        });
}

module.exports = {
   getAllTasks: getAllTasks,
 getSingleTask: getSingleTask,
    createTask: createTask,
    updateTask: updateTask,
    removeTask: removeTask
};
