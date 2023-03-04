<template>
    <div class="footer">
        <div class="copyriting">Copyriting by <a href="#">lil sunny</a> 2021.</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.footer {
    padding: 1.6vw 0;
}

.copyriting {
    font-size: 1.2vw;
    color: #000;
}

.copyriting a {
    color: #6049E8;
    text-decoration: none;
}

@media (max-width: 520px) {
    .footer {
        padding: 3vw 0;
    }

    .copyriting {
        font-size: 3.5vw;
        color: #000;
    }

}
</style>