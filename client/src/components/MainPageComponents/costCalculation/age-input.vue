<template>
    <div class="age wow fadeIn">
        <button @click.prevent="previousAge" class="btn previous">
            <span class="material-icons">
            arrow_back_ios
            </span>
        </button>
        <div class="answer">
            <input type="number" class="age-answer" :value="age" disabled>
        </div>
        <button @click.prevent="nextAge" class="btn next">
            <span class="material-icons">
            arrow_forward_ios
            </span>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            age: 7,
        }
    },
    
    mounted() {
        this.$emit('setAge', this.age);
    },

    methods: {
        nextAge() {
            if (this.age >= 14) {
                console.log('Больше нельзя')
            }
            else {
                this.age = this.age + 1;
                this.$emit('setAge', this.age);
            }
        },

        previousAge() {
            if (this.age <= 7) {
                console.log('Ниже нельзя');
            }
            else {
                this.age = this.age - 1;
                this.$emit('setAge', this.age);
            }
        },

        setAge() {
            this.$emmit('setAge', this.age);
        }
    }
}
</script>

<style scoped>
.age {
    display: flex;
    align-items: center;
    width: 20%;
    margin: 0 auto;
}

.answer {
    display: flex;
    align-items: center;
    justify-content: center;
}

.age-answer {
    width: 40%;
    text-align: center;
    font-size: 2vw;
    font-weight: 400;
    color: #D3D3D3;
    background: none;
    border-style: none;
    box-shadow: none;
    outline: none;
}

.btn {
    width: 2vw;
    height: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3vw;
    color: #D7D7D7;
    background: none;
}

.btn:hover {
    cursor: pointer;
}

@media (max-width: 520px) {
    .age {
        width: 40%;
        margin: 0 auto;
    }

    .answer {
        margin: 4vw 0;
    }

    .age-answer {
        font-size: 6vw;
    }

    .btn {
        font-size: 6vw;
    }
}
</style>