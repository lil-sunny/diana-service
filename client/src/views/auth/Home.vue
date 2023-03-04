<template>
    <div class="home">
        <profile-panel></profile-panel>
        <div class="fill">
            <applications></applications>
        </div>
        <application/>
    </div>
</template>

<script>
import profilePanel from '../../components/auth/HomeComponents/profile-panel.vue';
import applications from '../../components/auth/HomeComponents/pages/applications.vue'
import application from '../../components/auth/HomeComponents/pages/applications/application.vue'

export default {
    components: {
        profilePanel,
        applications,
        application
    }
}
</script>

<style scoped>
.home {
    position: relative;
}

.fill {
    background: #D4E8EA;
    padding: 2vw 0;
}
</style>