const router =  require("express").Router();
const requireLogin = require('../middlewares/authorization');
const {createOrder, editOrder, deleteOrder, getOrder} = require('../controllers/addressController');

router.post('/create', requireLogin, createOrder);
router.put('/edit', requireLogin, editOrder);
router.delete('/delete', requireLogin, deleteOrder);
router.get('/get', requireLogin, getOrder);

module.exports = router;
