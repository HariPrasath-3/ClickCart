const db = require('../utils/db');

const createOrder = async (req, res) => {
    try{

    }catch(err){
        console.log(err);
        return  res.status(404).json({
            status: 'createOrder catch Error'
        });
    }
};

const editOrder = async (req, res) => {
    try{

    }catch(err){
        console.log(err);
        return  res.status(404).json({
            status: 'editOrder catch Error'
        });
    }
};

const deleteOrder = async (req, res) => {
    try{

    }catch(err){
        console.log(err);
        return  res.status(404).json({
            status: 'deleteOrder catch Error'
        });
    }
};

const getOrder = async (req, res) => {
    try{

    }catch(err){
        console.log(err);
        return  res.status(404).json({
            status: 'getOrder catch Error'
        });
    }
};
module.exports = {
    createOrder,
    editOrder,
    deleteOrder,
    getOrder
};