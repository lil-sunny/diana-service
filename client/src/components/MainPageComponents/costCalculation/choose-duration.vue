<template>
    <div class="choose-duration">
        <div class="slider">
            <!-- <input class=slider-choose-duration type="range" min="1" max="6" step="1" v-model="durationCode"> -->
                <!-- <select class=slider-choose-duration>
                    <option v-for="time in tableOfTimes" :key="time" v-model="time" @click="setLessonDuration(value)">{{time}}</option>
                </select> -->
                <div class="duration-lesson-wrapper wow fadeIn">
                    <div class="choosen-variant" @click="showList">
                        <div class="name">{{ choosenDurationTime }}</div>
                        <span id="triagle" class="material-icons" :class="{active: listIsActive}">
                        chevron_right
                        </span>
                    </div>
                    <ul class="duration-lesson-list" v-if="listIsActive">
                        <li v-for="time in tableOfTimes" :key="time.num" @click="setDurationLesson(time)" class="item">{{ time.time }}</li>
                    </ul>
                </div>

                <div class="info info-not-choosen wow fadeIn" v-show="showMessage">
                    <span class="material-icons">
                    error_outline
                    </span>
                    <div>Вы не выбрали длительность занятия.</div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            durationCode: '',
            listIsActive: false,
            showMessage: true,
            choosenDuration: null,
            choosenDurationTime: 'Выбрать',
            tableOfTimes: [
                {
                    num: 1,
                    time: '1 час',
                    coefficient: 1    
                },
                
                {
                    num: 2,
                    time: '1 час 30 мин',
                    coefficient: 1.5  
                },

                {
                    num: 3,
                    time: '2 часа',
                    coefficient: 2  
                },
            ]
        }
    },

    mounted() {
        // this.durationCode = this.durationCode - 1;
        this.durationLesson = this.tableOfTimes[this.durationCode];

    },

    methods: {
        showTimesTable() {
            this.durationCode = this.durationCode - 1;
            // this.durationLesson = this.tableOfTimes[this.durationCode];
        },

        showList() {
            if (this.listIsActive == true) {
                this.listIsActive = false;
            }
            else if (this.listIsActive == false) {
                this.listIsActive = true;
            }
        },

        setDurationLesson(value) {
            this.choosenDuration = value;
            this.choosenDurationTime = value.time;
            this.listIsActive = false;
            this.showMessage = false;
            this.$emit('setDurationLesson', this.choosenDuration);
        }
    }
}
</script>

<style scoped>
.slider-choose-duration {
    font-size: 2vw;
    background: rgba(22, 22, 22, 0.5);
    color: #fff;
    border: none;
    outline: none;
    padding: 1vw 1.5vw;
    border-radius: 12px;
}

.slider-choose-duration option {
    padding: 1vw 1.5vw;
    background: rgba(45, 45, 43, 0.5);
}

.duration-lesson-wrapper {
    width: 15vw;
    margin: 0 auto;
    /* background: white; */
    color: #fff;
    font-size: 1.5vw;  
}

#triagle.active {
    transform: rotate(90deg);
}

.choosen-variant {
    padding: 0.4vw 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.choosen-variant .material-icons {
    font-size: 1.6vw;
    margin-left: 0.5vw;
}

.choosen-variant:hover {
    cursor: pointer;
    transition: 0.2s;
}

.chosen-variant .material-icons.active {
    transform: rotate(90deg);
    transition: 0.2s;
    width: 60%;
}

/* .choosen-variant:hover .material-icons {
    transform: rotate(90deg);
    transition: 0.2s;
} */

.duration-lesson-wrapper.choosen-variant:hover .duration-lesson-wrapper .duration-lesson-list {
    display: block!important;
}

.duration-lesson-list {
    position: absolute;
    padding: 0;
    margin: 0 auto;
    list-style: none;
    background: rgba(22, 22, 22, 0.6);
    width: 100%;
    border-radius: 0 0 0.3vw 0.3vw;
    backdrop-filter: blur(4px);
    overflow: hidden;
    width: 15vw;
}

.duration-lesson-list li {
    padding: 0.5vw;
    color: #fff;
    border-bottom: 1px solid rgb(51, 51, 51);
}

.duration-lesson-list li:hover {
    cursor: pointer;
    background: rgb(21, 162, 197)
}

.info {
    width: 65%;
    font-size: 1.2vw;
    margin: 0 auto;
    margin-top: 3.5vw;
    color: #A4A4A4;
}

.info-not-choosen {
    justify-content: center;
    display: flex;
}

.info .material-icons {
    margin-right: 0.5vw;
    color: #498ad4;
}

@media (max-width: 520px) {
    .slider-choose-duration {
        font-size: 4vw;
        padding: 2vw 4.5vw;
        border-radius: 8px;
    }

    .duration-lesson-wrapper {
        font-size: 4vw;
        width: 40%;
    }

    .choosen-variant {
        width: 40vw;
    }

    #triagle {
        font-size: 4vw;
    }

    .duration-lesson-list {
        width: 40vw;
    }

    .duration-lesson-list li {
        padding: 1.2vw 0;
    }

    .info {
        font-size: 4vw;
    }
}
</style>