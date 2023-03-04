<template>
    <div class="test-header">
        <a href="/" class="leave-test">
            <i class="fa fa-sign-out" aria-hidden="true"></i>
        </a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.test-header {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    padding: 1.5vw 0;
    width: 100%;
}

.leave-test {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5vw;
    height: 3.5vw;
    font-size: 2vw;
    text-decoration: none;
    color: #fff;
    border-radius: 50%;
    background: #DD4545;
    margin-right: 2vw;
}

@media (max-width: 500px) {
    .leave-test {
        font-size: 8vw;
        width: 12vw;
        height: 12vw;
        margin-right: 3vw;
    }
}
</style>