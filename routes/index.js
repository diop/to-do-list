var express = require('express');
var router = express.Router();
var db = require('../queries');

/* GET home page. */
router.get('/', db.getAllTasks);

router.get('/api/todos', function(req, res, next){
    db.getAllTasks();
});
router.get('api/todos/:id', db.getSingleTask);
router.post('api//todos', db.createTask);
router.put('/api/todos', db.updateTask);
router.delete('/api/todos/:id', db.removeTask);

module.exports = router;
