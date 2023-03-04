<template>
    <div class="how-to-start">
        <div class="section-title wow fadeInDown">Как начать заниматься?</div>
        <div class="section-subtitle wow fadeInDown" data-wow-delay="0.5s">Очень и очень просто... Ну прямо очень</div>
        <div class="content-wrapper">
            <div class="start-item wow fadeInDown" data-wow-delay="0.7s">
                <div class="image">
                    <img src="@/assets/images/ringMe.png" alt="">
                </div>
                <div class="content">
                    <div class="name">
                        Свяжитесь со мной любым из перечисленных способов
                    </div>
                </div>
            </div>

             <div class="start-item wow fadeInDown" data-wow-delay="1s">
                <div class="image">
                    <img src="@/assets/images/appointDate.png" alt="">
                </div>
                <div class="content">
                    <div class="name">
                        Договориваемся о встречи
                    </div>
                </div>
            </div>

             <div class="start-item wow fadeInDown" data-wow-delay="1.3s">
                <div class="image">
                    <img src="@/assets/images/NoteAndPen.png" alt="">
                </div>
                <div class="content">
                    <div class="name">
                        Запасаемся ручкой, тетрадкой, и хорошим настроением :)
                    </div>
                </div>
            </div>

             <div class="start-item wow fadeInDown" data-wow-delay="1.6s">
                <div class="image">
                    <img src="@/assets/images/meeting.png" alt="">
                </div>
                <div class="content">
                    <div class="name">
                        Встечаемся на занятии
                    </div>
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
.how-to-start {
    padding: 3.5vw 0;
    background: #F6F6F6;
}

.section-title {
    font-size: 2.3vw;
    margin-bottom: 1.5vw;
    color: #303030;
    font-weight: 800;
}

.section-subtitle {
    font-size: 1.5vw;
    font-weight: 200;
    color: #9A9A9A;
    margin-bottom: 3vw;
}

.content-wrapper {
    width: 70%;
    margin: 2.3vw auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: flex;
}

.start-item {
    width: 14%;
}

.image img {
    width: 100%;
}

.name {
    font-size: 1.2vw;
    font-weight: 600;
    color: #303030;
    margin: 1rem 0;
}

@media (max-width: 520px) {
    .how-to-start {
        padding: 5vw 0;
    }

    .section-title {
        font-size: 7vw;
    }

    .section-subtitle {
        font-size: 4vw;
    }

    .content-wrapper{
        flex-wrap: wrap;
    }

    .start-item {
        width: 60%;
    }

    .name {
        font-size: 4vw;
        margin: 2vw 0 4vw 0;
    }
}
</style>