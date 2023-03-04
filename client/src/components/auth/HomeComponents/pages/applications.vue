<template>
    <div class="wrapper">
        <div class="header" @click.prevent="test()">
                Заявки
        </div>
        <div class="content-fillable">
            <div class="delimeter-row">
                <div class="delimeter"></div>
                <div class="title">Новые</div>
            </div>
            <div class="new-applications row">
                <div class="item" v-for="item in applications" :key="item" v-show="item.status === 0"  @click="openApplication(item.id)">
                    <div class="status">

                    </div>
                    <div class="content">
                        <div class="info">
                            <div class="short-inf">{{item.child_name}}, {{item.age}}</div>
                            <div class="identify">id: {{item.id}}</div>
                        </div>
                        <div class="date">12.12.2021</div>
                    </div>
                </div>
            </div>
            <div class="delimeter-row">
                <div class="delimeter"></div>
                <div class="title">Принятые</div>
            </div>
            <div class="new-applications row">
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters(['applications']),
    },

    data() {
        return {
        }
    },

    mounted() {
        this.getApplications();
        // this.setApplications();        
    },

    methods: {
        ...mapActions(['getApplications']),

        openApplication(id) {
            this.$store.dispatch('showOrHideApplication');
            this.$store.dispatch('getOneApplication', id);
        },
    },

    
    watch: {
        applications() {
            this.getApplications();
        }
    }
}
</script>

<style scoped>
.wrapper {
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 15px;
}

.wrapper .header  {
    padding: 1.5vw;
    font-size: 1.4vw;
    font-weight: 800;
    color: #000;
    background: #fff;
}

.content-fillable {
    background: #F3F3F3;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    min-height: 60.5vh;
}

.row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: reverse;
}

.delimeter-row {
    width: 95%;
    margin: 0 auto;
}

.delimeter-row  .title {
    font-size: 0.9vw;
    text-align: left;
    width: 95%;
    margin-top: 0.5vw;
    color: #b9b9b9;
}

.delimeter {
    width: 95%;
    height: 1px;
    background: #dfdfdf;
    margin-top: 2vw;
}

.content-fillable .item {
    border-radius: 0.3vw;
    position: relative;
    width: 20%;
    margin: 2% 2.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    height: 12vw;
    transition: 0.2s;
}

.content-fillable .item:hover {
    transform: scale(1.1);
    transition: all 0.2s;
}

.content-fillable .item .short-inf {
    font-size: 1.4vw;
    font-weight: 800;
    margin-bottom: 0.4vw;
}

.content-fillable .item .identify {
    font-size: 1vw;
    color: #717171
}

.content-fillable .item .date {
    position: absolute;
    bottom: 0.4vw;
    left: 0;
    width: 100%;
    text-align: center;
    color: #9F9F9F;
    font-size: 1vw;
}

.content-fillable .item .status {
    width: 1.2vw;
    height: 1.2vw;
    background: #D96363;
    position: absolute;
    top: 0.5vw;
    left: 0.5vw;
    border-radius: 50%;
}
</style>