<template>
    <div class="test-offer">
        <div class="text wow fadeIn">Так же Ваш ребенок может пройти следующий тест для проверки уровня английсого</div>
        <div class="subtext wow fadeIn">тест включает в себя 12 вопросов, по которым можно примерно понять уровень владения языком.</div>
        <div class="button-wrapper wow fadeIn">
            <a href="test" class="start-test">Пройти тест</a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.test-offer {
    padding: 3.5vw 0;
    background: #fff;
}

.text {
    width: 40%;
    font-size: 1.5vw;
    font-weight: 600;
    color: #000;
    margin: 0 auto;
} 

.subtext {
    width: 40%;
    font-size: 1.2vw;
    font-weight: 300;
    color: #808080;
    margin: 2vw auto;
}

.start-test {
    display: table;
    padding: 1.2vw 2vw;
    font-size: 1.2vw;
    color: #fff;
    border-radius: 50px;
    background: #DD4545;
    box-shadow: 0px 3px 3px 0px rgba(34, 60, 80, 0.2);
    text-decoration: none;
    margin: 0 auto;
}

@media (max-width: 520px) {
    .test-offer {
        padding: 6vw 0;
        background: #fff;
    }

    .text {
        width: 70%;
        font-size: 4vw;
    } 

    .subtext {
        width: 65%;
        font-size: 3.6vw;
        margin: 4.2vw auto;
    }

    .start-test {
        font-size: 4.5vw;
        padding: 3.7vw 6.8vw;
    }
}
</style>