const db = require("../utils/db");
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = db.sequelize;

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    validate: { isEmail: true },
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image_url :{
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Item;