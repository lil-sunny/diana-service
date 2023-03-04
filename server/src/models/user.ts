import {server} from '../server/Server';
import * as sequelize from 'sequelize';

export const User = server.sequelize.define('user', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    name: {
        type: sequelize.STRING,
        allowNull: false
    },

    age: {
        type: sequelize.INTEGER,
        allowNull: false
    },

    isActivated: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: false
    },

    activationLink: {
        type: sequelize.STRING,
        allowNull: false
    }
});