const router =  require("express").Router();
const requireLogin = require('../middlewares/authorization');
const { createUser, deleteUser ,login, changePassword, logout, getUser } = require('../Controllers/userController');

router.post('/create', createUser);
router.post('/login', login);
router.delete('/delete', requireLogin, deleteUser);
router.put('/changepassword', requireLogin, changePassword);
router.post('/logout', requireLogin, logout);
router.get('/get', requireLogin, getUser);

module.exports = router;