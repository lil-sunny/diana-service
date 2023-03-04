import * as express from 'express';
import * as sequelize from 'sequelize';
import {Sequelize} from 'sequelize';

class Server {
    app:any = express();
    sequelize:any = new Sequelize('diana_service_db', 'lil_sunny', 'LlSnns_DB2115', {
        dialect: "mysql",
        host: "127.0.0.1",
        logging: function () {},
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
    );
    port:number;

    start(_port:number):void {
        this.port = _port;

        this.sequelize.sync().then(() => {
            this.app.listen(this.port, () => {
                console.log(`server has started on localhost:${this.port}`);
                console.log('database connected succsess!')
            })
        })
        .catch((e:string) => {
            console.log(e)
        })

        this.sequelize.sync().then((result:any) => {
            console.log(result)
        })
        .catch((e:string) => {
            console.log(e)
        })
    }
}

export const server:Server = new Server;