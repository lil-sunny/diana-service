<template>
    <div class="tasks-block">
        <div class="section-title wow fadeInDown">Чему мы научимся?</div>
        <div class="tasks-wrapper">
            <div class="task wow fadeInDown" data-wow-delay="0.7s">
                <div class="image">
                    <img src="@/assets/images/read.svg" alt="">
                </div>
                <div class="content">
                    <div class="name">
                        Читать, переводить и понимать тексты
                    </div>
                </div>
            </div>

             <div class="task wow fadeInDown" data-wow-delay="1s">
                <div class="image">
                    <img src="@/assets/images/write.svg" alt="">
                </div>
                <div class="content">
                    <div class="name">
                        Правильно строить предложения
                    </div>
                </div>
            </div>

             <div class="task wow fadeInDown" data-wow-delay="1.3s">
                <div class="image">
                    <img src="@/assets/images/times.svg" alt="">
                </div>
                <div class="content">
                    <div class="name">
                        Использованию времен
                    </div>
                </div>
            </div>

             <div class="task wow fadeInDown" data-wow-delay="1.6s">
                <div class="image">
                    <img src="@/assets/images/speak.svg" alt="">
                </div>
                <div class="content">
                    <div class="name">
                        Общаться
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
.tasks-block {
    padding: 3.5vw;
    background: #fff;
}

.section-title {
    font-size: 2.3vw;
    margin-bottom: 3vw;
    color: #303030;
    font-weight: 800;
}

.tasks-wrapper {
    width: 80%;
    margin: 2.3vw auto;
    display: flex;
    justify-content: space-around;
}

.task {
    width: 15%;
}

.image img {
    width: 100%;
}

.name {
    font-size: 1.2vw;
    font-weight: 600;
    color: #9A9A9A;
}

@media (max-width: 520px) {
    .tasks-block {
        padding: 5vw;
    }

    .section-title {
        font-size: 7vw;
        margin-bottom: 6vw;
    }

    .tasks-wrapper {
        flex-wrap: wrap;
    }

    .task {
        width: 35%;
        margin: 3vw 0;
    }

    .name {
        font-size: 4vw;
    }
}
</style>