const router =  require("express").Router();
const requireLogin = require('../middlewares/authorization');
const { getAll } = require('../Controllers/userController');

router.post('/get', getAll);

module.exports = router;