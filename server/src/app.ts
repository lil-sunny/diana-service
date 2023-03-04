import {server} from '../src/server/Server';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

import {costCalculationRouter} from './router/cost.calculation.router';

server.app.use(bodyParser.json());
server.app.use(express.json());
server.app.use(cors());

server.start(5111);

server.app.get('/', (req:any, res:any) => {
    res.json({
        'halupana': true
    })
})

// server.app.get('/users', userController.get);

// server.app.post('/users/create', userController.create)

server.app.use('/api', costCalculationRouter);