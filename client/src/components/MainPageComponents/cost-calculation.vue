<template>
    <div class="cost-calculation-wrapper">
        <div class="cost-calculation" v-if="!isLimitation">
            <div class="section-title wow fadeInDown">Стоимость занятий</div>
            <div class="section-subtitle wow fadeInDown" data-wow-delay="0.5s">Расчитайте стоимость занятий ответив на следующие вопросы</div>
            
            <form action="POST" class="calculate-price-form">
                <div class="question-wrapper">
                    <div class="question  wow fadeIn">Как зовут ребенка?</div>
                    <div class="answer">
                        <input type="text" class="answer-in" placeholder="Имя ребенка" v-model="calculatePriceForm.childName">
                    </div>
                </div>

                <div class="question-wrapper">
                    <div class="question  wow fadeIn">Введите ваш рабочий email </div>
                    <div class="answer">
                        <input type="text" class="answer-in" placeholder="Ваш email" v-model="calculatePriceForm.email">
                    </div>
                </div>

                <div class="question-wrapper">
                    <div class="question wow fadeIn">Укажите, сколько лет вашему ребенку</div>
                    
                    <age-input @setAge="setAge"/>

                </div>

                <div class="question-wrapper">
                    <div class="question wow fadeIn">Выберите программу занятий</div>
                    
                    <program-choose @setProgram="setProgram"/>
                    
                </div>

                <div class="question-wrapper">
                    <div class="question wow fadeIn">Укажите длинетельность занятия</div>
                    
                    <choose-duration @setDurationLesson="setDurationLesson"/>
                    
                </div>

                <div class="cost-wrapper wow fadeIn">
                    <div class="text">Стоимость занятия</div>
                    <div class="price">{{ costCalculationInfo.resultPrice }} грн.</div>
                </div>

                <div class="btn-wrapper">
                    <button @click.prevent="sendForm()" class="send-application">Отправить</button>
                </div>
            </form>
        </div>
        <limitation-form v-if="isLimitation"/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import ageInput from '../MainPageComponents/costCalculation/age-input.vue'
import programChoose from '../MainPageComponents/costCalculation/program-choose.vue'
import chooseDuration from '../MainPageComponents/costCalculation/choose-duration.vue'
import limitationForm from '../MainPageComponents/costCalculation/limitation-form'

export default {
    components: {
        ageInput,
        programChoose,
        chooseDuration,
        limitationForm
    },

    data() {
        return {
            calculatePriceForm: {
                childName: null,
                email: null,
                age: 7,
                program: null,
                lesson_duration: null
            },

            costCalculationInfo: {
                program: null,
                pogram_price: null,
                child_age: null,
                coefficient: null,
                resultPrice: 0
            },

            errors: [],

            isLimitation: false
        }
    },

    computed: {
        ...mapGetters(['costCalculationFormsErrors'])
    },

    async mounted() {
        this.costCalculationInfo.resultPrice = this.costCalculationInfo.pogram_price * this.costCalculationInfo.coefficient;
        // await this.getApplications();
    },

    methods: {
        ...mapActions([
            'sendMessage',
            'setErrorsFromCostCalculationForm',
            'getApplications',
            'postApplication'
        ]),

        async sendForm() {
            let costCalculationForm = {
                child_name: this.calculatePriceForm.childName,
                email: this.calculatePriceForm.email,
                age: this.calculatePriceForm.age,
                program: this.calculatePriceForm.program,
                lesson_duration: this.calculatePriceForm.lesson_duration,
                program_price: this.costCalculationInfo.pogram_price,
                result_price: this.costCalculationInfo.resultPrice,
            }

            if (!costCalculationForm.child_name) {
                this.errors.push(`Поле имя не заполнено`);
            }

            if (!costCalculationForm.email) {
                this.errors.push(`Поле email не заполнено`);
            }

            if (!costCalculationForm.program) {
                this.errors.push(`Не выбрана программа`);
            }

            if (!costCalculationForm.lesson_duration) {
                this.errors.push(`Длительность занятия не выбрана`);
            }

            // experemental
            if (this.errors.length == 0) {
                await this.postApplication(costCalculationForm);
                this.sendMessage(costCalculationForm);
                this.isLimitation = true;
            }
            this.setErrorsFromCostCalculationForm(this.errors);

            this.errors = [];
        },

        setAge: function(data) {
            this.calculatePriceForm.age = data;
            this.costCalculationInfo.child_age = data;
        },

        setDurationLesson: function(data) {
            this.calculatePriceForm.lesson_duration = data.time;
            this.costCalculationInfo.coefficient = data.coefficient;
            this.calculateLessonPrice();
        },

        setProgram: function(data) {
            this.calculatePriceForm.program = data.name;
            this.costCalculationInfo.program = data.name;
            this.costCalculationInfo.pogram_price = data.price;
            
            if (this.costCalculationInfo.program == data.name) {
                if(this.costCalculationInfo.coefficient == null) {
                    this.costCalculationInfo.resultPrice = this.costCalculationInfo.pogram_price;
                }

                else {
                    this.calculateLessonPrice();
                }
            }
        },

        calculateLessonPrice: function() {
            this.costCalculationInfo.resultPrice = this.costCalculationInfo.pogram_price * this.costCalculationInfo.coefficient;
        }
    }
}
</script>

<style scoped>
.cost-calculation-wrapper {
    background: #2D2D2B;
    padding: 3vw 0;
}

.section-title {
    font-size: 2.3vw;
    margin-bottom: 1.5vw;
    color: #F6F6F6;
    font-weight: 800;
}

.section-subtitle {
    font-size: 1.5vw;
    font-weight: 200;
    color: #9A9A9A;
    margin-bottom: 3vw;
}

.calculate-price-form {
    width: 70%;
    margin: 0 auto;
}

.question {
    font-size: 1.6vw;
    font-weight: 600;
    color: #fff;
    margin: 2vw 0 1.6vw 0;
}

.answer-in {
    padding: 1vw 2.5vw;
    text-align: center;
    font-size: 2vw;
    font-weight: 400;
    color: #D3D3D3;
    background: none;
    border-style: none;
    border-bottom: 1px solid #D3D3D3;
    box-shadow: none;
    outline: none;
}

.cost-wrapper {
    width: 50%;
    margin: 4vw auto 0 auto;
    display: flex;
    justify-content: space-around;
    font-size: 1.7vw;
    color: #fff;
    font-weight: 800;
}

.btn-wrapper {
    margin-top: 2vw;
}

.send-application {
    padding: 1.2vw 2vw;
    font-size: 1.2vw;
    color: #fff;
    border-radius: 50px;
    background: #66AC5B;
    box-shadow: 0px 3px 3px 0px rgba(34, 60, 80, 0.2);
    transition: 0.1s;
}

.send-application:hover {
    background: #79c56d;
    transition: 0.1s;
}

@media (max-width: 520px) {
    .cost-calculation {
        padding: 5vw 0;
    }

    .section-title {
        font-size: 7vw;
    }

    .section-subtitle {
        font-size: 4vw;
        margin-bottom: 3vw;
    }

    .calculate-price-form {
        width: 80%;
    }

    .question {
        font-size: 4vw;
        margin: 4.2vw 0 3vw 0;
    }

    .answer-in {
        font-size: 4vw;
    }

    .cost-wrapper {
        width: 80%;
        font-size: 4.2vw;
        margin: 7vw auto 0 auto;
    }

    .btn-wrapper {
        margin-top: 6vw;
    }

    .send-application {
        font-size: 4.5vw;
        padding: 3.7vw 6.8vw;
    }
}

@media (min-width: 1400px) {
    .cost-calculation {
        padding: 4vw 0;
    }

    .section-title {
        font-size: 1.5vw;
    }

    .section-subtitle {
        font-size: 1.2vw;
        margin-bottom: 3vw;
    }

    .calculate-price-form {
        width: 70%;
    }

    .question {
        font-size: 1.2vw;
        margin: 2.2vw 0 1.3vw 0;
    }

    .answer-in {
        font-size: 1.2vw;
    }

    .cost-wrapper {
        width: 33%;
        font-size: 1.3vw;
        margin: 3vw auto 0 auto;
    }

    .btn-wrapper {
        margin-top: 3vw;
    }

    .send-application {
        font-size: 1.3vw;
        padding: 1.2vw 2.4vw;
    }
}
</style>