const express = require('express');
const dotenv = require('dotenv').config();

const api = require('./api');
const config = require('./config');

const app = express();
app.use(express.json());
app.use('/api', api);

app.get('/', (req, res)=>{
    res
    .sendStatus(500);
});

const server = app.listen(process.env.PORT || config.port, config.host, ()=>{
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Servidor iniciado en host ${host} puerto ${port} ...`);
});
