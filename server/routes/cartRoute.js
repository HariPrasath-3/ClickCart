const router =  require("express").Router();
const requireLogin = require('../middlewares/authorization');
const { addCartItem, editCartItem, deleteCartItem, getCartItems } = require('../controllers/cartController');

router.post('/add', requireLogin, addCartItem);
router.put('/edit', requireLogin, editCartItem);
router.delete('/delete', requireLogin, deleteCartItem);
router.get('/get', requireLogin, getCartItems);

module.exports = router;