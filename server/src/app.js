"use strict";
exports.__esModule = true;
var Server_1 = require("../src/server/Server");
var bodyParser = require("body-parser");
var cors = require("cors");
var express = require("express");
var cost_calculation_router_1 = require("./router/cost.calculation.router");
Server_1.server.app.use(bodyParser.json());
Server_1.server.app.use(express.json());
Server_1.server.app.use(cors());
Server_1.server.start(5111);
Server_1.server.app.get('/', function (req, res) {
    res.json({
        'halupana': true
    });
});
// server.app.get('/users', userController.get);
// server.app.post('/users/create', userController.create)
Server_1.server.app.use('/api', cost_calculation_router_1.costCalculationRouter);
