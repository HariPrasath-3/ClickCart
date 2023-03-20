const jwt = require('jsonwebtoken');

const requireLogin = async (req, res, next) => {
    try {
        if (!req.cookies || !req.cookies.jwt) {
            return res.status(401).json({
                status: "Login required",
            });
        }
        const token = req.cookies.jwt;
        jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, user) => {
            if (err){
                return res.status(401).json({
                    status: "Login required",
                });
            }
            else req.body.user = user.user;
        });
        console.log(req.body.user);
        next();
    } catch (err) {
        console.log("catch error", err);
        next();
    }
}

module.exports =  requireLogin ;