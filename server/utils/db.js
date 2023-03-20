const { Sequelize } = require('sequelize');
const mysql = require('mysql2');
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
        
        const User = require('../models/User');

        await sequelize.sync();

        db.User = User;    

    }catch(error){

        console.error('Unable to connect to the database:', error);

    }
}

initialize();

module.exports = db;