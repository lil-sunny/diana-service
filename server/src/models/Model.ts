import {server} from '../server/Server';
import * as sequelize from 'sequelize';

export class Model {
    server = server;
    sequelize = sequelize;
}