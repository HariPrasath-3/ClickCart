const db = require("../utils/db");
const { DataTypes } = require('sequelize');
const sequelize = db.sequelize;

const OrderItem = sequelize.define('OrderItem',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    order_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    item_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = OrderItem;