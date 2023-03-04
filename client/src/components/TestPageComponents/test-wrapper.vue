<template>
    <div class="test-wrapper">
        <div class="question">Джеймс и Оливер сейчас помогают своему папе в сарае.</div>
        <div class="answer-wrapper">
            <div class="answer-box">
                <div class="answer active">
                    <div class="circle"></div>
                    <div class="text">James and Oliver are helping his father in the shed right now.</div>
                </div>
            </div>

            <div class="answer-box">
                <div class="answer">
                    <div class="circle"></div>
                    <div class="text">James and Oliver help his father in the shed right now.</div>
                </div>
            </div>

            <div class="answer-box">
                <div class="answer">
                    <div class="circle"></div>
                    <div class="text">James and Oliver helped his father in the shed right now. </div>
                </div>
            </div>

            <div class="answer-box">
                <div class="answer">
                    <div class="circle"></div>
                    <div class="text">James and Oliver will help his father in the shed right now.</div>
                </div>
            </div>
        </div>
        <div class="btn-wrapper">
            <button class="answer-to">Ответить</button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.test-wrapper {
    width: 50%;
}

.question {
    font-size: 1.5vw;
    color: #fff;
    font-weight: 800;
}

.answer-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2.5vw;
}

.answer-box {
    width: 100%;
    display: flex;
    justify-content: center;
}

.answer {
    font-size: 1.5vw;
    color: #C0C0C0;
    display: flex;
    align-items: center;
    margin: 1.5vw auto;
    padding: 0.5vw;
}

.circle {
    width: 1vw;
    height: 1vw;
    margin-right: 1vw;
    border: 2px solid #c0c0c0;
    border-radius: 50%;
}

.active .circle {
    background: #fff;
}

.active .text {
    color: #fff;
}

.answer-to {
    font-size: 1.2vw;
    padding: 1.2vw 2.2vw;
    border-radius: 50px;
    color: #fff;
    background: #EA7000;
    margin: 0;
    box-shadow: 0px 3px 3px 0px rgba(34, 60, 80, 0.2);
}

@media (max-width: 500px) {
    .test-wrapper {
        width: 80%;
    }

    .question {
        font-size: 5vw;
    }

    .answer {
        font-size: 4.5vw;
        justify-content: space-around;
        margin-top: 2vw;
    }

    .text {
        width: 80%;
        text-align: left;
    }

    .circle {
        width: 3vw;
        height: 3vw;
        margin-right: 1vw;
        border: 1px solid #c0c0c0;
        border-radius: 50%;
    }

    .answer-to {
        font-size: 4.8vw;
        padding: 3vw 7vw;
        margin-top: 4vw;
        box-shadow: 0px 1px 1px 0px rgba(34, 60, 80, 0.2);
    }
}
</style>