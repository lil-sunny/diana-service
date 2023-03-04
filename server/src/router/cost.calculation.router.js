"use strict";
exports.__esModule = true;
exports.costCalculationRouter = void 0;
var express_1 = require("express");
var cost_calcuation_form_controller_1 = require("../controllers/cost.calcuation.form.controller");
exports.costCalculationRouter = (0, express_1.Router)();
exports.costCalculationRouter.get('/cost-calculation-form', cost_calcuation_form_controller_1.costCalculationFormController.get);
exports.costCalculationRouter.get('/cost-calculation-form/:id', cost_calcuation_form_controller_1.costCalculationFormController.getOne);
exports.costCalculationRouter.post('/cost-calculation-form/create', cost_calcuation_form_controller_1.costCalculationFormController.create);
exports.costCalculationRouter["delete"]('/cost-calculation-form/:id', cost_calcuation_form_controller_1.costCalculationFormController["delete"]);
