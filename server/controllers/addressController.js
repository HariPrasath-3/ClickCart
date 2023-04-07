const db = require('../utils/db');

const createAddress = async (req, res) => {
    try{
        let { houseNumber, street, city, state, country, pincode } = req.body;
        let newAddress = await db.Address.create({
            userId: req.body.user.id,
            houseNumber: houseNumber,
            street: street,
            city: city,
            state: state,
            country: country,
            pincode: pincode
        });
        return res.status(200).json({
            status: 'success, address created'
        });
    }catch(err){
        console.log(err);
        return  res.status(404).json({
            status: 'createAddress catch Error'
        });
    }
}

const editAddress = async (req, res) => {
    try{
        let { addressId, houseNumber, street, city, state, country, pincode } = req.body;
        await db.Address.update({
            houseNumber: houseNumber,
            street: street,
            city: city,
            state: state,
            country: country,
            pincode: pincode
        }, {where:{id: addressId}});
        return res.status(200).json({
            status: 'success, address edited'
        });
    }catch(err){
        console.log(err);
        return  res.status(404).json({
            status: 'editAddress catch Error'
        });
    }
}

const deleteAddress = async (req, res) => {
    try{
        let { addressId } = req.body;
        await db.Address.destroy({where:{id: addressId}});
        return res.status(200).json({
            status: 'success, address deleted'
        });
    }catch(err){
        console.log(err);
        return  res.status(404).json({
            status: 'deleteAddress catch Error'
        });
    }
}
const getAddress = async (req, res) => {
    try{
        let { addressId } = req.body;
        let address = await db.Address.findAll({id: addressId});
        return res.status(200).json({
            address: address[0]
        });
    }catch(err){
        console.log(err);
        return  res.status(404).json({
            status: 'getAddress catch Error'
        });
    }
}

module.exports = {
    createAddress,
    editAddress,
    deleteAddress,
    getAddress
};
