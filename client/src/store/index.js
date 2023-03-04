import {createStore} from 'vuex';
import costCalculation from './modules/costCalculation';
import errors from './modules/errors';
import telegram from './modules/telegram';
import application from './modules/application';

export const store = createStore({
    modules: {
        costCalculation,
        errors,
        telegram,
        application
    }
});