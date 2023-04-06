const db = require('../utils/db');
const jwt = require('jsonwebtoken');
const validateEmail = require("../helpers/validateEmail");
const { Sequelize } = require('sequelize')
const { hashPassword, comparePassword } = require('../helpers/hashPassword');

const createUser = async (req, res) => {
    try {
        let { firstname, lastname, fullname, username, email, password } = req.body;
        if(!validateEmail(email)){
            res.status(404).json({
                status: "Input validation error"
            });
        }
        let user = await db.User.findAll({ where: { username } });
        if(user.length!==0){
            return res.status(404).json({
                status: 'username Already Exists'
            });
        }
        user = await db.User.findAll({ where: { email } });
        if(user.length!==0){
            return res.status(404).json({
                status: 'email Already Exists'
            });
        }
        let hash = await hashPassword(password);
        let newUser = await db.User.create({
            firstname: firstname,
            lastname: lastname,
            fullname: fullname,
            username: username,
            email: email,
            password: hash
        });
        res.status(200).json({
            status: 'success'
        });
        return;       
    }catch(err) {
        console.log(err);
        return  res.status(404).json({
            status: 'createuser catch Error'
        });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await db.User.findAll({ where: { username } });
        if(!user){
            return res.status(404).json({
                status: 'incorrect username',
            });
        }
        const check = await comparePassword(password, user[0].password);
        if(!check){
            return res.status(404).json({
                status: 'incorrect password'
            });
        }
        const access_token = jwt.sign({user:user[0]},process.env.SECRET_ACCESS_TOKEN);
        res.cookie("jwt",access_token,{
            expires: new Date(Date.now() + 172800000),
            httponly: true
        });
        return res.status(200).json({
            status: 'success, user authenticated',
            access_token,
        });
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            status: 'login catch error'
        });
    }
};

const deleteUser = async (req,res) => {
    try{
        if(!req.body.user){            
            return res.status(404).json({
                status: "Login required",
            });
        }
        const {password} = req.body;
        const {username} = req.body.user;
        const hashpass = req.body.user.password;
        const check = await comparePassword(password,hashpass);
        if(!check){
            return res.status(404).json({
                status: 'incorrect password'
            });            
        }
        await db.User.destroy({where:{username}});
        res.cookie("jwt",null,{
            expires: new Date(Date.now()),
            httponly: true
        });
        return res.status(200).json({
            status: 'success, user deleted'
        });
    }catch(err){
        console.log(err);
        return res.status(404).json({
            status: 'deleteUser catch error'
        });
    }
};

const changePassword = async (req,res) => {
    try{
        if(!req.body.user){            
            return res.status(404).json({
                status: "Login required",
            });
        }
        const {oldpass,newpass} = req.body;
        const {username} = req.body.user;
        const hashpass = req.body.user.password;
        const check = await comparePassword(oldpass,hashpass);
        if(!check){
            return res.status(404).json({
                status: 'Old Password is Incorrect'
            });
        }
        const newhash = await hashPassword(newpass);
        await db.User.update({password:newhash},{where:{username}});
        const user = await db.User.findAll({where:{username}});
        const access_token = jwt.sign({user:user[0]},process.env.SECRET_ACCESS_TOKEN);
        res.cookie("jwt",access_token,{
            expires: new Date(Date.now() + 172800000),
            httponly: true
        });
        return res.status(200).json({
            status: 'success, password changed',
            access_token
        });
    }catch(err){
        console.log(err);
        return res.status(404).json({
            status: 'changePassword catch error'
        });
    }
}

const logout = async (req,res) => {
    try{
        if(!req.body.user){            
            return res.status(404).json({
                status: "Login required",
            });
        }
        res.cookie("jwt",null,{
            expires: new Date(Date.now()),
            httponly: true
        });
        return res.status(200).json({
            status: 'success, logged out'
        });
    }catch(err){
        console.log(err);
        return res.status(404).json({
            status: 'logout catch error'
        });
    }
}

module.exports = {
    createUser,
    deleteUser,
    login,
    logout,
    changePassword
};
