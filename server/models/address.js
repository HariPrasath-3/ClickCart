const db = require("../utils/db");
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = db.sequelize;

const address = sequelize.define('address',{
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
    houseNo:{
        type: DataTypes.varchar,
        allowNull: false
    },
    street: {
        type: DataTypes.varchar,
        allowNull: false
    },
    city:{
        type: DataTypes.varchar,
        allowNull: false

    },
    state: {
        type: DataTypes.varchar,
        allowNull: false
    },
    country: {
        type: DataTypes.varchar,
        allowNull: false
    },
    pincode :{
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


})
module.exports = address;