"use strict";
exports.__esModule = true;
exports.User = void 0;
var Server_1 = require("../server/Server");
var sequelize = require("sequelize");
exports.User = Server_1.server.sequelize.define('user', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    age: {
        type: sequelize.INTEGER,
        allowNull: false
    }
});
