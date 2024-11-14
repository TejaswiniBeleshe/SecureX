const router = require('express').Router();
const {getAllTodo,createNewTodo} = require('../controllers/todos.controller.js')
const {validateUserToken } = require('../middlewares/user.middware.js')

router.get('',validateUserToken,getAllTodo);
router.post('/new/:id',createNewTodo);
// router.patch('/modify',);
// router.delete('/')

module.exports = router