import { Router } from 'express';
import { costCalculationFormController } from '../controllers/cost.calcuation.form.controller';

export const costCalculationRouter:any = Router();

costCalculationRouter.get('/cost-calculation-form', costCalculationFormController.get);

costCalculationRouter.get('/cost-calculation-form/:id', costCalculationFormController.getOne);

costCalculationRouter.post('/cost-calculation-form/create', costCalculationFormController.create);

costCalculationRouter.delete('/cost-calculation-form/:id', costCalculationFormController.delete);