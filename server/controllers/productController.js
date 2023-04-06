const db = require('../utils/db');
const { Sequelize } = require('sequelize')

const getAll = async(req, res) => {
    try{
        if(!req.body.user){            
            return res.status(404).json({
                status: "Login required",
            });
        }
        const products = await db.products.findAll();
        return res.status(200).json({
            products
        });
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            status: 'products/getAll catch error'
        });
    }
}

module.exports = {
    getAll
}