"use strict";
exports.__esModule = true;
exports.costCalculationFormController = void 0;
var cost_calculation_1 = require("../models/cost.calculation");
var CostCalculationFormController = /** @class */ (function () {
    function CostCalculationFormController() {
    }
    CostCalculationFormController.prototype.get = function (req, res) {
        cost_calculation_1.CostCalculation.findAll({ raw: true })
            .then(function (result) {
            res.json(result);
        })["catch"](function (err) {
            res.sendStatus(400);
            console.log(err);
        });
    };
    ;
    CostCalculationFormController.prototype.getOne = function (req, res) {
        // let id:string = req.params.id;
        cost_calculation_1.CostCalculation.findByPk(req.params.id)
            .then(function (result) {
            res.json(result);
        })["catch"](function (e) {
            res.sendStatus(200);
            console.log(e);
        });
    };
    ;
    CostCalculationFormController.prototype.create = function (req, res) {
        var inputCostCalculation = {
            child_name: req.body.child_name,
            email: req.body.email,
            age: req.body.age,
            program: req.body.program,
            lesson_duration: req.body.lesson_duration,
            program_price: req.body.program_price,
            result_price: req.body.result_price
        };
        cost_calculation_1.CostCalculation.create(inputCostCalculation)
            .then(function (result) {
            res.json(result);
        })["catch"](function (err) {
            res.sendStatus(400);
            console.log(err);
        });
    };
    ;
    CostCalculationFormController.prototype["delete"] = function (req, res) {
        var index = req.params.id;
        cost_calculation_1.CostCalculation.destroy({ where: { id: index } })
            .then(function (result) {
            res.json(result);
        })["catch"](function (err) {
            res.sendStatus(200);
            console.log(err);
        });
    };
    ;
    return CostCalculationFormController;
}());
exports.costCalculationFormController = new CostCalculationFormController;
