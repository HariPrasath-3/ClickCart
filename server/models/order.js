const db = require("../utils/db");
const { DataTypes } = require('sequelize');
const sequelize = db.sequelize;

const Order = sequelize.define('Order',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    payment:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Order;