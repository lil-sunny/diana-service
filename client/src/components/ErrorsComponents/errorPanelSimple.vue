<template>
    <div class="error-simple-panel-wraper">
        <!-- <transition name="errorAnim"> -->
        <div class="error-simple-panel" v-show="costCalculationFormsErrors.length != 0">
            <div class="close-wrapper">
                <button @click.prevent="closeErrorList()" class="close">
                    <span class="material-icons">
                    close
                    </span>
                </button>
            </div>
            <ul class="errors-list">
                <li v-for="error in costCalculationFormsErrors" :key="error">
                    <span class="material-icons">
                    error_outline
                    </span>
                    <div>{{ error }}</div>
                </li>
            </ul>
        </div>
        <!-- </transition> -->
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'costCalculationFormsErrors'
        ])
    },

    data() {
        return {
            isShowErr: false,
            foo: []
        }
    },

    mounted() {
        this.$store.dispatch('getErrorsFromCostCalculationForm');
        // this.showErrorList();
    },

    beforeUpdate() {
        // this.showErrorList(); 
    },

    updated() {
        // this.isShowErr = true;
        // console.log(this.isShowErr)
    },

    methods: {
        showErrorList() {
            if (this.costCalculationFormsErrors.length != 0) {
                this.isShowErr = true;

                return;
            }
        },

        closeErrorList() {
            if (this.isShowErr == true) {
                this.isShowErr = false;
            }
            console.log(this.isShowErr);
        }
    }
}
</script>

<style scoped>
.error-simple-panel-wraper {
    position: fixed;
    top: 1vw;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
}

.error-simple-panel {
    padding: 0.7vw 0;
    width: 40%;
    display: flex;
    justify-content: center;
    background: rgba(0.2, 0.2, 0.2, 0.8);
    border-radius: 12px;
    position: relative;
}

.close-wrapper {
    position: absolute;
    top: 0.3vw;
    width: 100%;
    display: flex;
    justify-content: end;
}

.close {
    background: none;
    border: none;
    outline: none;
    font-size: 0.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.7vw;
    color: rgb(155, 155, 155);
}

.errors-list {
    padding: 0;
    max-width: 80%;
    text-align: center;
}

.errors-list li {
    display: flex;
    color: #fff;
    margin: 0.3vw 0;
}

.errors-list li .material-icons {
    margin-right: 1vw;
    color: #E95F5F;
}

.errorAnim-enter-active {
  transition: all .1s ease;
}
.errorAnim-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.errorAnim-enter, .errorAnim-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>