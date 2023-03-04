<template>
    <div class="application-wrapper" v-if="isShowApplication">
        <div class="application wow bounceIn">
            <div class="header">
                <div class="application-num">
                    Заяка {{ application.id }}
                </div>

                <div class="nav-btns">
                    <div class="more-actions">
                        <button @click.prevent="openOrHideMoreActions" class="close-btn">
                            <span class="material-icons">
                                more_vert
                            </span>
                        </button>
                        <div class="more-list-wrapper" v-if ="isShowMoreActions">
                            <ul>
                                <li>Вернуть в непринятые</li>
                                <li @click.prevent="deleteApplication( application.id )" class="delete">
                                    <span class="material-icons">
                                        delete_outline
                                    </span>
                                    Удалить
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button @click="closeApplication" class="close-btn">
                        <span class="material-icons">
                            close
                        </span>
                    </button>
                </div>
            </div>
            <div class="info-wrapper">
                <div class="info">
                    <div class="inf-row">
                        <div class="article">
                            Имя ученика
                        </div>
                        <div class="value">
                            {{ application.child_name }}
                        </div>
                    </div>

                    <div class="inf-row">
                        <div class="article">
                            Возраст
                        </div>
                        <div class="value">
                            {{ application.age }}
                        </div>
                    </div>

                    <div class="inf-row">
                        <div class="article">
                            email
                        </div>
                        <div class="value">
                            {{ application.email }}
                        </div>
                    </div>

                    <div class="inf-row">
                        <div class="article">
                            Программа
                        </div>
                        <div class="value">
                            {{ application.program }}
                        </div>
                    </div>

                    <div class="inf-row">
                        <div class="article">
                            Длительность
                        </div>
                        <div class="value">
                            {{ application.lesson_duration }}
                        </div>
                    </div>

                    <div class="inf-row">
                        <div class="article">
                            Заявка подана
                        </div>
                        <div class="value">
                            12.11.2021
                        </div>
                    </div>
                </div>
            </div>
            <div class="solve-btns">
                <button class="btn accept-btn">
                    Принять
                </button>
                <button class="btn cancel-btn">
                    Отклонить
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            isShowMoreActions: false,
        }
    },

    computed: {
        ...mapGetters(['isShowApplication', 'application'])
    },

    async mounted() {
        this.$store.dispatch('getShowApplication');
        this.$store.dispatch('getApplicationData');
    },

    methods: {
        closeApplication() {
            this.$store.dispatch('showOrHideApplication');
        },

        deleteApplication(id) {
            this.$store.dispatch('deleteApplication', id);
            this.closeApplication();
        },

        openOrHideMoreActions() {
            if (this.isShowMoreActions === false) {
                this.isShowMoreActions = true;
            }

            else {
                this.isShowMoreActions = false;
            }
        }
    }
}
</script>

<style scoped>
.application-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(149,227,213);
    background: linear-gradient(180deg, rgba(149,227,213,0.6) 0%, rgba(78,156,211,0.6) 100%);
    backdrop-filter: blur(20px);
    width: 100%;
    height: 100vh;
}

.application {
    width: 27vw;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0px 3px 3px 0px rgba(34, 60, 80, 0.2);
}

.header {
    background: #5296C8;
    padding: 1vw 1vw;
    border-radius: 16px 16px 0 0;
    display: flex;
    justify-content: space-between;
    font-size: 1.2vw;
    color: #fff;
}

.close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: none;
}

.application-num {
    font-weight: 800;
}

.info-wrapper {
    display: flex;
    justify-content: center;
}

.info {
    width: 80%;
}

.inf-row {
    display: flex;
    color: #000;
    font-size: 1vw;
    margin: 1.5vw 0;
}

.inf-row div {
    width: 50%;
    justify-content: flex-start;
    text-align: left;
}

.value {
    font-weight: 600;
}

.solve-btns {
    margin: 1.2vw 0;
}

.nav-btns {
    display: flex;
}

.btn {
    font-size: 1vw;
    color: #fff;
    width: 7vw;
    height: 2.5vw;
    margin: 0 1vw;
    border-radius: 50px;
}

.accept-btn {
    background: #8ED084;
}

.accept-btn:hover {
    background: #9de492;
}

.cancel-btn {
    background: #E37474;
}

.cancel-btn:hover {
    background: #f08484;
}

.more-actions {
    position: relative;
}

.more-list-wrapper {
    position: absolute;
    background: rgb(247, 247, 247);
    box-shadow: 0px 2px 2px 0px rgba(34, 60, 80, 0.2);
    border-radius: 0 0 4px 4px;
}

.more-list-wrapper ul {
    list-style: none;
    padding: 0;
    font-size: 0.8vw;
    width: 10vw;
    margin: 0;
}

.more-list-wrapper ul li {
    margin: 1vw 0;
    color: rgb(80, 80, 80);
    display: flex;
    align-items: center;
    margin-left: 0.3vw;
}

.more-list-wrapper ul li .material-icons {
    font-size: 0.9vw;
    margin-right: 0.5vw;
}

.more-list-wrapper ul li:hover {
    cursor: pointer;
}

.delete {
    color: #E37474!important;   
}
</style>