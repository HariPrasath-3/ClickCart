const db = require("../utils/db");
const { DataTypes } = require('sequelize');
const sequelize = db.sequelize;

const Payment = sequelize.define('Payment',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    orderId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    },
    amount:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Payment;