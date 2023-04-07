const db = require('../utils/db');

const addCartItem = async (req, res) => {
    try{
        if(!req.body.user){            
            return res.status(404).json({
                status: "Login required",
            });
        }
        let { itemId, quantity } = req.body;
        let item = await db.CartItem.findAll({where: {userId: req.body.user.id, itemId: itemId}});
        if(item.length!==0){
            return res.json({
                status: 'Item already in cart'
            });
        }
        await db.CartItem.create({
            userId: req.body.user.id,
            itemId: itemId,
            quantity: quantity
        })
        return res.status(200).json({
            status: 'success, Item added to cart'
        });   
    }catch(err){
        console.log(err);
        return res.status(404).json({
            status: 'cart/addCartItem catch error'
        });
    }
}

const editCartItem = async (req, res) => {
    try{
        if(!req.body.user){            
            return res.status(404).json({
                status: "Login required",
            });
        }
        let { cartItemId, quantity } = req.body;
        await db.CartItem.update({
            quantity: quantity
        }, {where : {id: cartItemId}});
        return res.status(200).json({
            status: 'success, CartItem updated'
        });   
    }catch(err){
        console.log(err);
        return res.status(404).json({
            status: 'cart/editCartItem catch error'
        });
    }
}

const deleteCartItem = async (req, res) => {
    try{
        if(!req.body.user){            
            return res.status(404).json({
                status: "Login required",
            });
        }
        let { cartItemId } = req.body;
        await db.CartItem.destroy({where : {id: cartItemId}});
        return res.status(200).json({
            status: 'success, CartItem deleted'
        });   
    }catch(err){
        console.log(err);
        return res.status(404).json({
            status: 'cart/deleteCartItem catch error'
        });
    }
}

const getCartItems = async (req, res) => {
    try{
        if(!req.body.user){            
            return res.status(404).json({
                status: "Login required",
            });
        }
        cartItems = await db.CartItem.findAll({where : {userId: req.body.user.id}});
        return res.status(200).json({
            cartItems: cartItems
        });   
    }catch(err){
        console.log(err);
        return res.status(404).json({
            status: 'cart/getAllCartItem catch error'
        });
    }
}
module.exports = {
    addCartItem,
    editCartItem,
    deleteCartItem,
    getCartItems
};