const router =  require("express").Router();
const requireLogin = require('../middlewares/authorization');
const { addWishlistItem, deleteWishlistItem, getWishlistItems } = require('../controllers/wishlistController');

router.post('/add', requireLogin, addWishlistItem);
router.delete('/delete', requireLogin, deleteWishlistItem);
router.get('/get', requireLogin, getWishlistItems);

module.exports = router;