const db = require("../utils/db");
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = db.sequelize;

const payment = sequelize.define('payment',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    order_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    type: {
        type: DataTypes.varchar,
        allowNull: false
    },
    amount:{
        type: DataTypes.INTEGER,
        allowNull: false

    },
    created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },


},{timestamps: false,})

module.exports = payment;