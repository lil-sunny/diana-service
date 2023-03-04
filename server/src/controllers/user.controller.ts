import {User} from '../models/user';

class UserController {
    get(req:any, res:any) {
        User.findAll({raw: true}).then((users:any) => {
            res.json(users);
        })
        .catch((e:string) => {
            console.log(e);
        })
    }

    create(req:any, res:any) {
        let inputUser:Object = {
            name: req.body.name,
            age: req.body.age
        }

        User.create(inputUser)
        .then((user:any) => {
            res.json(user);
        })
        .catch((e:string) => {
            console.log(e);
        })
    }
}

export const userController:UserController = new UserController;