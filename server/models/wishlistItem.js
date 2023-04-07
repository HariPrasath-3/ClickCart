const db = require("../utils/db");
const { DataTypes } = require('sequelize');
const sequelize = db.sequelize;

const WishlistItem = sequelize.define('WishlistItem',{
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
    }
})

module.exports = WishlistItem