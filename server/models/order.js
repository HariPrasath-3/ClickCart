const db = require("../utils/db");
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = db.sequelize;

const order = sequelize.define('order',{
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
    status:{
        type: DataTypes.varchar,
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
    },
    created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },
    updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },
}, {timestamps: false,})
module.exports = order;