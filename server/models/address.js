const db = require("../utils/db");
const { DataTypes } = require('sequelize');
const sequelize = db.sequelize;

const Address = sequelize.define('Address',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    houseNumber:{
        type: DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false

    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pincode :{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
module.exports = Address;