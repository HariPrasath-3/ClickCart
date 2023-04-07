const router =  require("express").Router();
const requireLogin = require('../middlewares/authorization');
const {createAddress, editAddress, deleteAddress, getAddress} = require('../controllers/addressController');

router.post('/create', requireLogin, createAddress);
router.put('/edit', requireLogin, editAddress);
router.delete('/delete', requireLogin, deleteAddress);
router.get('/get', requireLogin, getAddress);

module.exports = router;
