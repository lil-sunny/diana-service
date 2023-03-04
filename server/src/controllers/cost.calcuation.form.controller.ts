import {CostCalculation} from '../models/cost.calculation';

class CostCalculationFormController {
    get(req:any, res:any) {
        CostCalculation.findAll({ raw: true })
        .then((result:any) => {
            res.json(result);
        })
        .catch((err:string) => {
            res.sendStatus(400);
            console.log(err);
        })
    };

    getOne(req:any, res:any) {
        // let id:string = req.params.id;
        CostCalculation.findByPk(req.params.id)
        .then((result:any) => {
            res.json(result);
        })
        .catch((e:string) => {
            res.sendStatus(200);
            console.log(e);
        })
    };
    
    create(req:any, res:any) {
       let inputCostCalculation:Object = {
            child_name: req.body.child_name,
            email: req.body.email,
            age: req.body.age,
            program: req.body.program,
            lesson_duration: req.body.lesson_duration,
            program_price: req.body.program_price,
            result_price: req.body.result_price
       };
       
       CostCalculation.create(inputCostCalculation)
       .then((result:any) => {
           res.json(result);
       })
       .catch((err:string) => {
           res.sendStatus(400);
           console.log(err);
       })
    };

    delete(req:any, res:any) {
        let index = req.params.id;
        CostCalculation.destroy({ where: {id: index} })
        .then((result:any) => {
            res.json(result);
        })
        .catch((err:string) => {
            res.sendStatus(200);
            console.log(err);
        })
    };
}

export const costCalculationFormController:CostCalculationFormController = new CostCalculationFormController;

