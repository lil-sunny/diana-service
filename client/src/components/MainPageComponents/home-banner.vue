<template>
    <div class="home-banner">
        <div class="content">
            <div class="info-wrapper">
                <h1 class="title wow fadeInDown">LET`S SPEAK ENGLISH!</h1>
                <p class="description wow fadeInDown" data-wow-delay="0.7s">
                    Обучение детей дошкольного и школьного возраста английскому языку.  Программа построенна по английсим книгам и включает в себя writing, reading, speaking
                </p>
                <a href="tel:+380666308699" class="call-btn wow fadeIn" data-wow-delay="1.2s">Позвонить</a>
            </div>
        </div>     
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.home-banner {
    background: url('~@/assets/images/example.png') no-repeat;
    background-size: cover;
    height: 40vw;
    width: 100%;
    position: relative;
}

.content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(28, 28, 28, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-wrapper {
    width: 40vw;
    color: #fff;
}

.title {
    font-size: 3.7vw;
    font-weight: 800;
    margin: 0;
}

.description {
    font-size: 1.2vw;
    line-height: 1.6vw;
    margin: 2vw 0;
}

.call-btn {
    font-size: 1.2vw;
    padding: 1.2vw 2.2vw;
    border-radius: 50px;
    color: #fff;
    background: #66AC5B;
    margin: 0;
    box-shadow: 0px 3px 3px 0px rgba(34, 60, 80, 0.2);
    transition: 0.1s;
    text-decoration: none;
}

.call-btn:hover {
    background: #79c56d;
    transition: 0.1s;
}

@media (max-width: 520px) {
    .home-banner {
        height: 100vw;
    }

    .info-wrapper {
        width: 80vw;
    }

    .title {
        font-size: 10vw;
    }

    .description {
        font-size: 4.5vw;
        line-height: 7vw;
        margin: 7vw 0;
    }

    .call-btn {
        font-size: 4.5vw;
        padding: 3.7vw 6.8vw;
    }
}
</style>