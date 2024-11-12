const router = require('express').Router();
const {getAllTodo,createNewTodo} = require('../controllers/todos.controller.js')

router.get('/:user',getAllTodo);
router.post('/new/:id',createNewTodo);
// router.patch('/modify',);
// router.delete('/')

module.exports = router