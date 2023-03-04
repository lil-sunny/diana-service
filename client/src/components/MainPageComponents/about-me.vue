<template>
    <div class="about-me">
        <div class="about-wrapper">
            <div class="photo-wrapper wow fadeInLeft" data-wow-delay="0.5s" data-wow-duration="1.2s">
                <div class="photo">
                    <img src="@/assets/images/diana.jpg" alt="">
                </div>
                <div class="social-media-row">
                    <a href="" class="social">
                        <img src="@/assets/images/viber.svg" alt="">
                    </a>
                    <a href="" class="social">
                        <img src="@/assets/images/telegram.svg" alt="">
                    </a>
                    <a href="" class="social">
                        <img src="@/assets/images/insta.svg" alt="">
                    </a>
                </div>
            </div>
            <div class="content-wrapper">
                <div class="title wow fadeInRight" data-wow-delay="0.7s" data-wow-duration="1.2s">О себе</div>
                <div class="text wow fadeInRight" data-wow-delay="0.9s" data-wow-duration="1.2s">
                    Привет! Меня зовут Диана. Я являюсь репетитором английского языка и студенткой Харьковского университета им. Каразина (факультет иностранных языков). С 2019 года я работаю с детками разных возрастов – начиная дошкольниками, заканчивая ребятами средней школы. Хочу Вас заверить, что вашим деткам со мной будет очень интересно, весело и познавательно, к каждому ученику я нахожу индивидуальный подход. Если Вас заинтересовало моё предложение – Вы можете написать мне на почту, а, также, в Telegram или Viber и мы вместе решим ход дальнейших действий. All the best! :)
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.about-me {
    /* display: none; */
    width: 100%;
    padding: 3vw 0;
    background: #2D2D2B;
}

.about-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    width: 60vw;
}

.photo-wrapper {
    width: 20vw;
}

.photo {
    display: block;
    overflow: hidden;
    border-radius: 100%;
    width: 18vw;
    height: 18vw;
    margin: 0 auto;
}

.photo img {
    width: 100%;
}

.social-media-row {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin-top: 1.5vw;
}

.social {
    display: block;
    width: 20%;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}

.social:hover {
    -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
    filter: grayscale(0%);
}

.social img {
    width: 100%;
}

.content-wrapper {
    width: 30vw;
    text-align: left;
}

.title {
    font-size: 1.5vw;
    font-weight: 800;
    color: #fff;
    margin-bottom: 2.2vw;
}

.text {
    font-size: 1.3vw;
    color: #BDBDBD;
    line-height: 1.8vw;
}

@media (max-width: 520px) {
    .about-wrapper {
        width: 80vw;
        padding: 3vw 0;
        flex-wrap: wrap;
    }

    .photo-wrapper {
        width: 80vw;
    }

    .photo {
        width: 60vw;
        height: 60vw;
    }

    .social-media-row {
        margin-top: 4vw;
    }

    .content-wrapper {
        width: 80vw;
    }

    .title {
        font-size: 6vw;
        margin: 4.2vw;
        text-align: center;
    }

    .text {
        font-size: 4vw;
        line-height: 6vw;
        text-align: center;
    }
}
</style>