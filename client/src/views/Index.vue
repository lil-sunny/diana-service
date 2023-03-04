<template>
    <div class="home">
        <main-banner></main-banner>
        <about-me></about-me>
        <tasks></tasks>
        <how-to-start></how-to-start>
        <cost-calculation></cost-calculation>
        <!-- <test-offer></test-offer> -->
        <feedback-form></feedback-form>
        <my-footer></my-footer>

        <error-panel-simple/>
    </div>
</template>

<script>
import mainBanner from '../components/MainPageComponents/home-banner.vue';
import aboutMe from '../components/MainPageComponents/about-me.vue';
import tasks from '../components/MainPageComponents/tasks.vue';
import howToStart from '../components/MainPageComponents/how-to-start.vue';
import costCalculation from '../components/MainPageComponents/cost-calculation.vue';
// import testOffer from '../components/MainPageComponents/test-offer.vue';
import feedbackForm from '../components/MainPageComponents/feedback-form.vue';
import myFooter from '../components/MainPageComponents/my-footer.vue';

// Errors panel
import errorPanelSimple from '../components/ErrorsComponents/errorPanelSimple.vue';

export default {
    components: {
        mainBanner,
        aboutMe,
        tasks,
        howToStart,
        costCalculation,
        // testOffer,
        feedbackForm,
        myFooter,
        errorPanelSimple
    }
}
</script>

<style scoped>
.home {
    width: 100%;
    position: relative;
}
</style>