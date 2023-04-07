const db = require("../utils/db");
const { DataTypes } = require('sequelize');
const sequelize = db.sequelize;

const CartItem = sequelize.define('CartItem',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    itemId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity:{
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
})
module.exports = CartItem;