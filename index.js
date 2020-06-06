const express = require('express');
const dotenv = require('dotenv').config();
//import * as Sentry from '@sentry/node';
const Sentry = require('@sentry/node');

const api = require('./api');
const config = require('./config');

Sentry.init({ dsn: 'https://63565143d5d942db9eead42daf7a194c@o403579.ingest.sentry.io/5266427' });

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
