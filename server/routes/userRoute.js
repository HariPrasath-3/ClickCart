const router =  require("express").Router();
const requireLogin = require('../middlewares/authorization');
const { createUser, deleteUser ,login, changePassword, logout } = require('../Controllers/userController');

router.post('/createuser', createUser);
router.post('/login', login);
router.post('/deleteuser', requireLogin, deleteUser);
router.post('/changepassword', requireLogin, changePassword);
router.post('/logout', requireLogin, logout);

module.exports = router;