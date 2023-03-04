"use strict";
exports.__esModule = true;
exports.server = void 0;
var express = require("express");
var sequelize_1 = require("sequelize");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.sequelize = new sequelize_1.Sequelize('diana_service_db', 'lil_sunny', 'LlSnns_DB2115', {
            dialect: "mysql",
            host: "127.0.0.1",
            logging: function () { },
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        });
    }
    Server.prototype.start = function (_port) {
        var _this = this;
        this.port = _port;
        this.sequelize.sync().then(function () {
            _this.app.listen(_this.port, function () {
                console.log("server has started on localhost:" + _this.port);
                console.log('database connected succsess!');
            });
        })["catch"](function (e) {
            console.log(e);
        });
        this.sequelize.sync().then(function (result) {
            console.log(result);
        })["catch"](function (e) {
            console.log(e);
        });
    };
    return Server;
}());
exports.server = new Server;
