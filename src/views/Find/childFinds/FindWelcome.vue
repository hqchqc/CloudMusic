<template>
    <div id='findWelcome'>
        <div class="welcome_title">
            <p>欢迎来到网易云音乐</p>
        </div>
        <div class="welcome_content">
            <div class="content_left">
                <img src="~assets/img/find/welcome/vip.png">
            </div>
            <div class="content_right">
                <img src="~assets/img/find/welcome/singer.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FindWelcome'
}
</script>

<style scoped>
    #findWelcome{
        text-align: center;
        box-shadow:  0px 0px 3px 0px rgba(0,0,0,0.15);
        border-radius: 5px;
        width: 95%;
        margin: 25px auto;
    }
    .welcome_title {
        font-weight: bold;
        padding-top: 10px;
    }
    .welcome_content{
        display: flex;
        padding-bottom: 5px;
    }
    .content_left{
        flex: 1;
    }
    .content_left img{
        width: 260px;
    }
    .content_right{
        flex: 1;
    }
    .content_right img{
        width: 92px;
        margin-top: 9px;
    }

</style>