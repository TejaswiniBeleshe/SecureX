const router = require('express').Router();
const {registerUser,loginUser} = require('../controllers/user.controller.js');
const {checkUser,isAlreadyPresent,checkLoginUser,isLoginUserPresent} = require('../middlewares/user.middware.js')

router.post('/register',[checkUser,isAlreadyPresent],registerUser);
router.post('/login',[checkLoginUser,isLoginUserPresent],loginUser);


module.exports = router
