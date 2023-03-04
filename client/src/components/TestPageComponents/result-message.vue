<template>
    <div class="result-wrapper">
        <div class="main-stroke">
            <div class="emoji"><img src="@/assets/images/smile.png"></div>
            <div class="text">Congradulation!</div>
        </div>
        <div class="result-stroke">Ваша оценка 9 из 10</div>
        <div class="result-phrase">Very very good :)</div>
        <div class="btn-wrapper">
            <a class="return-to-main">На главную</a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.result-wrapper {
    width: 50%;
    /* justify-content: center; */
}

.main-stroke {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 1.5vw;
    color: #fff;
    font-weight: 800;
}

.return-to-main {
    display: table;
    text-decoration: none;
    font-size: 1.2vw;
    padding: 1.2vw 2.2vw;
    border-radius: 50px;
    color: #fff;
    background: #EA7000;
    margin: 0 auto;
    box-shadow: 0px 3px 3px 0px rgba(34, 60, 80, 0.2);
}

.result-stroke {
    font-size: 1.5vw;
    color: #C0C0C0;
    margin: 1.5vw;
}

.result-phrase {
    font-size: 1.5vw;
    color: #fff;
    margin: 1.5vw;
}

.emoji {
    width: 1.5vw;
    margin-right: 1vw;
}

.emoji img {
    width: 100%;
}
</style>