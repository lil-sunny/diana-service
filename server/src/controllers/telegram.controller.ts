class TelegramConfig {
    token: string;
    chat_id: string

    constructor(token, chat_id) {
        this.token = token;
        this.chat_id = chat_id;
    }
}

let telegram:TelegramConfig = new TelegramConfig(
    '2035167604:AAFpDkwEqlNnBjYX2jRjighdHUkuE_iSSes',
    '-542256960'
);

// let msg = `
//     Поступил новый запрос! \n
//     ${data.child_name}, ${data.age} лет. \n
//     Выбрал программу ${data.program}, длительность занаятия ${data.lesson_duration}. \n
//     По цене за занятие выходит: ${data.result_price} грн. \n
//     Чтобы связаться с родителями / учеником пиши на ${data.email}. \n
//     Принять заявку также можно на сайте!
// `;

// axios.post('https://api.telegram.org/bot2035167604:AAFpDkwEqlNnBjYX2jRjighdHUkuE_iSSes/getUpdates', msg)
// .then(response => {
//     return response.data;
// });