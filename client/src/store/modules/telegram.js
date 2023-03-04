import config from '../api/telegram.config.json';
// import axios from 'axios';
import http from 'request';

export default {
    actions: {
        sendMessage(state, data) {
            let msg = 
            `Поступил новый запрос!\n<b>${data.child_name}</b>, ${data.age} лет.\nВыбрал программу ${data.program}, длительность занятия ${data.lesson_duration}.\nПо цене за занятие выходит: ${data.result_price} грн.\nЧтобы связаться с родителями / учеником пиши на <b>${data.email}</b>.\nПринять заявку также можно на сайте!`;

            http.post(`https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat_id}&parse_mode=html&text=${msg}`);
        },

        sendFeedbackForm(state, data) {
            let msg = `Только что пользователь <i>${data.name}</i> запросил обратный звонок. Позвони на номер <b>${data.number}</b>. Но буть внимательнее с долбаебами. Удачи)`;

            http.post(`https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat_id}&parse_mode=html&text=${msg}`);
        }
    }
};