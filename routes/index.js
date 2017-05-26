const  express = require('express')
const  app = express()
const pug = require('pug')
const  router = express.Router()
const  db = require('../queries')

/* GET home page. */
router.get('/', db.getAllTasks)

router.get('/getTaskById/:id', db.getTaskById)
router.post('/createTask', db.createTask)
router.put('/updateTask/:id', db.updateTask)
router.delete('/removeTask/:id', db.removeTask)

module.exports = router
