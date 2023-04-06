const jwt = require('jsonwebtoken');

const requireLogin = async (req, res, next) => {
    try {
        if (!req.cookies || !req.cookies.jwt) {
            req.body.user = null;
            next();
        }
        const token = req.cookies.jwt;
        jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, user) => {
            if (err){
                req.body.user = null;
                next();
            }
            req.body.user = user.user;
        });
        next();
    } catch (err) {
        req.body.user = null;
        console.log("requireLogin catch error", err);
        next();
    }
}

module.exports =  requireLogin ;