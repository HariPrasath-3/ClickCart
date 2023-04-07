const db = require('../utils/db');

const getAll = async(req, res) => {
    try{
        if(!req.body.user){            
            return res.status(404).json({
                status: "Login required",
            });
        }
        const Items = await db.Item.findAll();
        return res.status(200).json({
            Items
        });
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            status: 'item/getAll catch error'
        });
    }
}

module.exports = {
    getAll
};