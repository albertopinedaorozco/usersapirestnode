const express = require('express');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const config = require('./../../../config');
const auth = require('./../../middlewares/auth');
const users = require('../../models/users');
const dateUtilities = require('./../../utilities/date');

const router = express.Router();

router.route('/')
    .get((req, res)=>{
        const list = users.getUsers();
        res.send(list);
    })
    .post((req, res)=>{
        if(req.body.username!=='' && req.body.password!==''){
            const plainPassword = req.body.password;
            const salt = bcrypt.genSaltSync(config.saltRounds);
            const hash = bcrypt.hashSync(plainPassword, salt);

            let user = {
                uuid: uuidv4(),
                username: req.body.username,
                password: hash,
                date: dateUtilities.getDate()
            };

            users.newUser(user);
            
            res.status(200).send('Nuevo usuario');
        }else{
            res.status(500).send('Daots inválidos');
        }    
    })
    .put(auth, (req, res)=>{
        res.send(`Actualizar el usuario ${req.params.id}`);
    });
router.route('/:uuid')
    .get(auth, (req, res)=>{
        const uuid = req.params.uuid;
        const user = users.getUser(uuid);
        res.status(200).send(user);
    })
    .delete(auth, (req, res)=>{
        res.send(`Eliminar usuario ${req.params.uuid}`);
    });

module.exports = router;