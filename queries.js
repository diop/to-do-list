var promise = require('bluebird');

var options = {
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/todos';
var ddb = pgp(connectionString);

// Query functions

function getAllTasks(req, res, next) {
    db.any('select * from items')
        .then(function (data) {
            res.status(200)
                .json({
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
    var tastID = parseInt(req.params.id);
    db.one('select * from items where id = $1', itemID)
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

function createTask(req, re, next) {
    db.none('insert into items(task, completed, created_at, updated_at)' +
        'values(${task}), ${completed}, ${created_at}, ${updated_at}',
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
    db.none('update items set task=$1, completed=$2, created_at=$3, updated_at=$4 where id=$5',
        [req.body.task, req.body.completed, req.body.created_at, req.body.updated_at])
        .then(function(){
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated task'
                });
        })
        .catch(fucntion (err){
            return next(err);
        });
}

function removeTask(req, res, next) {
    var taskID = parseInt(req.param.id);
    db.result('delete from pups where id = $1', taskID)
        .then(function (result {
            /* jshint ignore: start */
            res.status(200)
                .json({
                    status: 'success'
                    message: 'Removed ${result.rowCount} task'
                });
            /* jshint ignore:end */
        })
        .catch(function (err){
            return next(err);
        });
}

module.export = {
    getAllTasks: getAllTasks,
    getSingleTask: getSingleTask,
    createTask: createTask,
    updateTask: updateTask,
    removeTask: removeTask
};
