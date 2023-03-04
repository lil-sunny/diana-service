<template>
    <div class="pannel">
            <div class="pannel-wrapper">
                <div class="user-info">
                    <div class="photo">
                        <img src="@/assets/images/diana.jpg" alt="">
                    </div>
                    <div class="text">
                        <div class="name">Диана</div>
                        <div class="email">diana.en.teacher@gmail.com</div>
                    </div>
                </div>
                <div class="btns-bar">
                    <div class="btn edit">
                        <span class="material-icons">
                            edit
                        </span>
                    </div>
                    <div class="btn log-out">
                        <span class="material-icons">
                            logout
                        </span>
                    </div>
                </div>
            </div>
            <div class="menu">
                <a href="#" class="item active">Заявки</a>
                <a href="#" class="item">Материалы</a>
                <a href="#" class="item">Заявки</a>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.pannel {
    background: #F9F9F9;
}

.pannel-wrapper {
    width: 85%;
    margin: 0 auto;
    padding: 2vw 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.user-info {
    display: flex;
    align-items: center;
}

.text {
    font-size: 1vw;
    text-align: left;
    margin-left: 1vw;
}

.name {
    font-size: 1.1vw;
    font-weight: 600;
    margin-bottom: 0.7vw;
}

.email {
    font-size: 1vw;
    color: #605A5A;
}

.photo {
    width: 7vw;
    height: 7vw;
    border-radius: 50%;
    overflow: hidden;
}

.photo img {
    width: 100%;
}

.btns-bar {
    display: flex;
}

.btn {
    margin: 0.5vw;
    width: 2.3vw;
    height: 2.3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 1vw;
}

.btn.edit {
    color: #AAABAE; 
    background: #D9D9D9;
}

.btn.log-out {
    color: #FFFFFF; 
    background: #4FC5EA;
}

.menu {
    width: 85%;
    margin: 0 auto;
    text-align: left;
    display: flex;
}

.menu .item {
    display: table;
    padding: 0.3vw 0.1vw 0.7vw 0.1vw;
    font-weight: 500;
    color: #605A5A;
    text-decoration: none;
    margin: 0 2vw;
}

.menu .item.active {
    color: #000;
    border-bottom: 0.3vw solid #4FEA96;
}
</style>