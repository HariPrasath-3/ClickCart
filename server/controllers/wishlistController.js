const db = require('../utils/db');

const addWishlistItem = async (req, res) => {
    try{
        if(!req.body.user){            
            return res.status(404).json({
                status: "Login required",
            });
        }
        let { itemId } = req.body;
        let item = await db.WishlistItem.findAll({where: {userId: req.body.user.id, itemId: itemId}});
        if(item.length!==0){
            return res.json({
                status: 'Item already in wishlist'
            });
        }
        await db.WishlistItem.create({
            userId: req.body.user.id,
            itemId: itemId
        })
        return res.status(200).json({
            status: 'success, Item added to wishlist'
        });   
    }catch(err){
        console.log(err);
        return res.status(404).json({
            status: 'cart/addWishlistItem catch error'
        });
    }
}

const deleteWishlistItem = async (req, res) => {
    try{
        if(!req.body.user){            
            return res.status(404).json({
                status: "Login required",
            });
        }
        let { wishlistItemId } = req.body;
        await db.WishlistItem.destroy({where : {id: wishlistItemId}});
        return res.status(200).json({
            status: 'success, WishlistItem deleted'
        });   
    }catch(err){
        console.log(err);
        return res.status(404).json({
            status: 'cart/deleteWishlistItem catch error'
        });
    }
}

const getWishlistItems = async (req, res) => {
    try{
        if(!req.body.user){            
            return res.status(404).json({
                status: "Login required",
            });
        }
        wishlistItems = await db.WishlistItem.findAll({where : {userId: req.body.user.id}});
        return res.status(200).json({
            wishlistItems: wishlistItems
        });   
    }catch(err){
        console.log(err);
        return res.status(404).json({
            status: 'cart/getWishlistItems catch error'
        });
    }
}
module.exports = {
    addWishlistItem,
    deleteWishlistItem,
    getWishlistItems
};