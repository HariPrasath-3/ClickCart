const router =  require("express").Router();
const requireLogin = require('../middlewares/authorization');
const { getAll } = require('../Controllers/itemController');

router.post('/get', requireLogin, getAll);

module.exports = router;