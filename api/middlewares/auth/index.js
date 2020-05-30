const jwt = require('jsonwebtoken');

const config = require('./../../../config');

module.exports = (req, res, next) => {
    const token = req.headers['x-access-token'];
    let decoded;    
    try{
        decoded = jwt.verify(token, config.tokenKey);
    }catch(error){
        decoded = false;
    }
    !!decoded ? 
        next()
    :
        res.status(500).send('Usuario no autorizado')
    
};
