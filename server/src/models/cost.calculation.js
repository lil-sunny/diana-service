"use strict";
exports.__esModule = true;
exports.CostCalculation = void 0;
var Server_1 = require("../server/Server");
var sequelize = require("sequelize");
exports.CostCalculation = Server_1.server.sequelize.define('cost_calculation_form', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    child_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    age: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    program: {
        type: sequelize.STRING,
        allowNull: false
    },
    lesson_duration: {
        type: sequelize.STRING,
        allowNull: false
    },
    program_price: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    result_price: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
});
