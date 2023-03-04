<template>
    <div class="feedback-form-wrapper">
       <div class="dark-content">
            <form class="feedback-form wow bounceIn">
                <div class="form-title">
                    Если у Вас возникли вопросы заполните форму и я перезвоню
                </div>

                <div class="input-wrapper">
                    <div class="label">Ваше имя</div>
                    <input type="text" v-model="feedback.name">
                </div>

                <div class="input-wrapper">
                    <div class="label">Ваш телефон</div>
                    <input type="text" v-model='feedback.number'>
                </div>

                <div class="button-wrapper">
                    <button @click.prevent="sendForm(feedback)" class="send">Отправить</button>
                </div>
            </form>
       </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            feedback: {
                name: '',
                number: ''
            }
        }
    },

    methods: {
        ...mapActions(['sendFeedbackForm']),

        sendForm(data) {
            // console.log(data);
            this.sendFeedbackForm(data);
            this.feedback.name = '';
            this.feedback.number = '';
        }
    }
}
</script>

<style scoped>
.feedback-form-wrapper {
    /* padding: 1.7vw 0; */
    background: url('~@/assets/images/example.png') no-repeat;
    background-size: cover;
    position: relative;
    height: 30vw;
}

.dark-content {
    position: absolute;
    /* padding: 1.7vw 0; */
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    background: rgba(40, 40, 40, 0.6);
    width: 100%;
    height: 100%;
}

.feedback-form {
    padding: 1.4vw 2vw;
    background: #fff;
    border-radius: 12px;
    width: 30%;
    margin: 0 auto;
}

.form-title {
    font-size: 1.3vw;
    font-weight: 600;
    color: #000;
}

.input-wrapper {
    margin: 0 auto;
    margin-top: 2vw;
    font-size: 1.3vw;
    width: 70%;
}

.label {
    text-align: left;
}

input {
    margin-top: 0.6vw;
    font-size: 1.5vw;
    width: 100%;
    padding: 0.5vw 1vw;
    border-radius: 8px;
    border: 1px solid #CACACA;
    outline: none;
}

.button-wrapper {
    margin-top: 1.7vw;
}

.send {
    padding: 1vw 2vw;
    font-size: 1.2vw;
    color: #fff;
    border-radius: 50px;
    background: #66AC5B;
}

.send:hover {
    background: #66AC5B;
}

@media (max-width: 520px) {
    .feedback-form-wrapper {
        height: 90vw;
    }

    .feedback-form {
        padding: 7vw 4vw;
        border-radius: 2vw;
        width: 70%;
        margin: 0 auto;
    }

    .form-title {
        font-size: 3.4vw;
    }

    .input-wrapper {
        width: 80%;
        margin: 4vw auto;
    }

    .label {
        text-align: left;
        font-size: 4vw;
    }

    input {
        margin-top: 0.6vw;
        font-size: 4vw;
        width: 100%;
        padding: 1.5vw 2vw;
        border-radius: 8px;
        border: 1px solid #CACACA;
        outline: none;
    }

    .send {
        font-size: 4vw;
        padding: 3.7vw 6.8vw;
    }
}
</style>