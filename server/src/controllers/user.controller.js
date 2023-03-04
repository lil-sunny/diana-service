"use strict";
exports.__esModule = true;
exports.userController = void 0;
var user_1 = require("../models/user");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.get = function (req, res) {
        user_1.User.findAll({ raw: true }).then(function (users) {
            res.json(users);
        })["catch"](function (e) {
            console.log(e);
        });
    };
    UserController.prototype.create = function (req, res) {
        var inputUser = {
            name: req.body.name,
            age: req.body.age
        };
        user_1.User.create(inputUser)
            .then(function (user) {
            res.json(user);
        })["catch"](function (e) {
            console.log(e);
        });
    };
    return UserController;
}());
exports.userController = new UserController;
