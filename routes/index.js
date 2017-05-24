var express = require('express');
var router = express.Router();
var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/todos', db.getAllTasks);
router.get('/api/todos/:id', db.getSingleTask);
router.post('api/todos', db.createTask);
router.put('/api/todos', db.updatePuppy);
router.delete('/api/todos/:id', db.removeTask);

module.exports = router;
