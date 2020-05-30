const express = require('express');
const jwt = require('jsonwebtoken');

const users = require('./../../models/users');
const config = require('./../../../config');

const router = express.Router();

router.route('/')
    .post((req, res)=>{
        if(req.body.username!=='' && req.body.password!==''){
            const username = req.body.username;
            const password = req.body.password;
            
            if(users.findUser(username, password)){   
                const token = jwt.sign({username: username}, config.tokenKey);
                
                res.status(200).send(`{token: ${token} }`);
            }else{    
                res.status(500).send(`Datos no válidos`);
            }    
        }else{
            res.status(500).send(`Datos no válidos`);
        }    
    });

module.exports = router;