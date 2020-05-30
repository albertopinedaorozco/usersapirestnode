const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const users = require('./controllers/users');
const auth = require('./controllers/auth');
const config = require('./../config/index');

const router = express.Router();

router.use(morgan('combined'));
router.use('/users', users);
router.use('/login', auth);

module.exports = router;