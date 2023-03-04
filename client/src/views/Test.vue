<template>
    <div class="test-page">
        <div class="cubes-picture cube1">
            <img src="@/assets/images/cube1.png" alt="">
        </div>

        <div class="cubes-picture cube2">
            <img src="@/assets/images/cube2.png" alt="">
        </div>

        <div class="cubes-picture cube3">
            <img src="@/assets/images/cube3.png" alt="">
        </div>

        <div class="cubes-picture cube4">
            <img src="@/assets/images/cube4.png" alt="">
        </div>

        <div class="cubes-picture cube5">
            <img src="@/assets/images/cube5.png" alt="">
        </div>
        <div class="content-wrapper">
            <test-header></test-header>
            <test-wrapper></test-wrapper>
            <!-- <result-message></result-message> -->
        </div>
    </div>
</template>

<script>
import TestHeader from '../components/TestPageComponents/test-header.vue'
import TestWrapper from '../components/TestPageComponents/test-wrapper.vue'
// import ResultMessage from '../components/TestPageComponents/result-message.vue'

export default {
    components: {
        TestHeader,
        TestWrapper,
        // ResultMessage
    }
}
</script>

<style scoped>
.test-page {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: #DE4E4E;
    overflow: hidden;
}

.cubes-picture {
    position: absolute;
    width: 7vw;
}

.cubes-picture img {
    width: 100%;
}

.cube1 {
    bottom: 15vw;
    left: 9vw;
    transform: rotate(30deg)
}

.cube2 {
    bottom: -1vw;
    left: 16vw;
    transform: rotate(20deg)
}

.cube3 {
    bottom: 20vw;
    right: 9vw;
    transform: rotate(15deg)
}

.cube4 {
    bottom: 8vw;
    right: 8vw;
    transform: rotate(-20deg)
}

.cube5 {
    bottom: -3vw;
    right: 16vw;
    transform: rotate(20deg)
}

.content-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 1050px) {
    .cubes-picture {
        width: 13vw;
    }

    .cube1 {
        bottom: 20vw;
    }

    .cube2 {
        bottom: -1vw;
    }

    .cube3 {
        bottom: 28vw;
    }

    .cube4 {
        bottom: 12vw;
    }

    .cube5 {
        bottom: -3vw;
        right: 20vw;
        transform: rotate(20deg)
    }
}

@media (max-width: 800px) {
    .cubes-picture {
        width: 13vw;
    }

    .cube1 {
        bottom: 20vw;
    }

    .cube2 {
        bottom: -1vw;
    }

    .cube3 {
        bottom: 28vw;
    }

    .cube4 {
        bottom: 12vw;
    }

    .cube5 {
        bottom: -3vw;
        right: 20vw;
        transform: rotate(20deg)
    }
}
</style>