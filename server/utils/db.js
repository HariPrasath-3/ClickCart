const { Sequelize } = require('sequelize');
const { database } = require('../config/keys');

const { databaseName, user, password, host } = database;

const db = {};

const initialize = async() =>{
    try{
        const sequelize = new Sequelize(databaseName, user, password, {
            host,
            dialect: 'mysql'
        });   
        
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        db.sequelize = sequelize;
        
        const User = require('../models/user');
        const Item = require('../models/item');
        const Address = require('../models/address');
        const CartItem = require('../models/cartItem');
        const WishlistItem = require('../models/wishlistItem');
        const Order = require('../models/order');

        await sequelize.sync();

        db.User = User;   
        db.Item = Item;
        db.Address = Address;
        db.CartItem = CartItem;
        db.WishlistItem = WishlistItem;
        db.Order = Order;

    }catch(error){

        console.error('Unable to connect to the database:', error);

    }
}

initialize();

module.exports = db;