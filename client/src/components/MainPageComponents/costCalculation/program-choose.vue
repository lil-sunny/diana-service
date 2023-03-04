<template>
    <div class="program-choose">
        <div class="choose-wrapper wow fadeIn">
            <div class="item" v-for="program in programs" :key="program.code" @click="chooseProgram(program.code)">
                <div class="image">
                    <img v-bind:src="require(`@/assets/images/${program.image_path}`)" alt=""><!-- :src="require (program.image_path) -->
                </div>
                <div class="name" :class="{'active': program.name == selectedProgram.name}">
                    Программа {{program.name}}
                </div>
                <div class="selected" v-show="programInfo === program.code">Выбранно</div>
            </div>
        </div>
        <div class="info" v-for="program in programs" :key="program" v-show="programInfo === program.code">
            Программа <span class="shine">{{program.name}}</span> - {{program.description}}
        </div>
        <div class="info info-not-choosen wow fadeIn" v-show="programInfo === 0">
            <span class="material-icons">
            error_outline
            </span>
            <div>Вы не выбрали программу. Выберите программу чтоб увидеть прочитать описание</div>
        </div>
        <input class="hidden" type="text" v-model="program">
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedProgram: '',
            selectedProgramFullInfo: null,
            programInfo: 0,

            programs: [
                {
                    name: 'Easy Homework',
                    description: 'включает в себя помощь в выполнение ДЗ вместе с учеником, обьяснения его, а так же плюс обучение по школьной программе',
                    image_path: 'book_1.svg',
                    code: 1,
                    price: 150
                },

                {
                    name: 'Knowlege+',
                    description: 'Хардкорная программа направленая на обучения ребенка английскому для жизни. Включает в себя занятия по дополнительным книгам а так же изучение школьного материала',
                    image_path: 'book_3.svg',
                    code: 3,
                    price: 180
                },
            ]
        }
    },

    methods: {
        chooseProgram(code) {
            this.programs.forEach((program) => {
                if (program.code === code) {
                    this.programInfo = code;
                    this.selectedProgram = program;
                    this.setProgram();
                }
            })
        },

        setProgram() {
            this.$emit('setProgram', this.selectedProgram);
        }
    }
}
</script>

<style scoped>
.choose-wrapper {
    width: 60%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
}

.item {
    width: 25%;
    font-weight: 500;
    position: relative;
}

.item:hover {
    cursor: pointer;
}

.item:hover .name{
    color: #66AC5B;
}

.image img {
    width: 100%;
}

.name {
    font-size: 1.3vw;
    color: #ABABAB;
    margin-top: 1.5vw;
}

.active {
    color: #66AC5B;
}

.selected {
    position: absolute;
    bottom: 0;
    font-size: 1vw;
    margin: -1.5vw 0;
    color: #5F5F5F;
    width: 100%;
    text-align: center;
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

.shine {
    color: #66AC5B;
}

.hidden {
    display: none;
}

@media (max-width: 520px) {
    .choose-wrapper {
        width: 90%;
        justify-content: space-between;
    }

    .item {
        width: 40%;
    }

    .image img  {
        width: 80%;
    }

    .name {
        font-size: 3vw;
    }

    .selected {
        font-size: 2vw;
        margin: -3vw 0;
    }

    .info {
        width: 90%;
        font-size: 4vw;
        margin-top: 6vw;
    }
}
</style>