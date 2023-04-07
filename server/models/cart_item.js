const db = require("../utils/db");
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = db.sequelize;

const cart_item = sequelize.define('cart_item',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    item_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at:{
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },
    
},{timestamps: false,})
module.exports = cart_item;