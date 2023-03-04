<template>
    <div class="form-limitation-wrapper">
        <div class="form-limitation">
            <img src="~@/assets/images/like.png" alt="">
            <div class="text">Ваша заявка прията!</div>
            <div class="sec-text">О вашей заявке уже знают. Ждите ответ на почту)</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.text {
    margin-top: 1.5vw;
    font-size: 1.3vw;
    color: #fff;
    font-weight: 800;
}

.sec-text {
    margin-top: 1vw;
    font-size: 1.1vw;
    color: rgb(197, 197, 197);
}

.form-limitation img {
    width: 15%;
}

@media (max-width: 520px) {
    .text {
        margin-top: 2.4vw;
        font-size: 4vw;
    }

    .sec-text {
        margin-top: 2vw;
        font-size: 4vw;
    }

    .form-limitation {
        width: 80%;
        margin: 0 auto;
    }

    .form-limitation img {
        width: 35%;
    }
}

@media (min-width: 1400px) {
    .text {
        margin-top: 1.2vw;
        font-size: 1.1vw;
    }

    .sec-text {
        margin-top: 1vw;
        font-size: 0.9vw;
    }

    .form-limitation img {
        width: 10%;
    }

}
</style>