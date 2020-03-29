<template>
<div id="profile">
    <div class="proTop">
        <div class="head">
            <img src="~assets/img/profile/head.svg">
        </div>
        <div class="font">
            <p>登录立享手机电脑多端同步</p>
        </div>
        <div class="login">
            <p>立即登录</p>
        </div>
    </div>
    <div class="probottom">
        <div class="proItem">
            <img src='~assets/img/profile/music.svg'>
            <p>本地音乐</p>
        </div>
        <div class="proItem">
            <img src='~assets/img/profile/download.svg'>
            <p>下载管理</p>
        </div>
        <div class="proItem">
            <img src='~assets/img/profile/radio.svg'>
            <p>我的电台</p>
        </div>
        <div class="proItem">
            <img src='~assets/img/profile/collect.svg'>
            <p>我的收藏</p>
        </div>
        <div class="proItem">
            <img src='~assets/img/profile/song.svg'>
            <p>关注新歌</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProfileTop'
}
</script>

<style scoped>
 #profile{
    position: relative;
    background-color: #1E1E24;
    top: -43px;
    z-index: -1;
    font-size: 8px;
    color: #fff;
    height: 160px;
    letter-spacing: 1px;
}
.proTop{
    position: absolute;
    top: 55px;
    display: flex;
    width: 100%;
}
.head{
    background-color: #CECECE;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    margin-left: 15px;
}
.head img{
    width: 30px;
}
.font{
    margin-left: 10px;
    line-height: 30px;
    flex: 3;
}
.login{
    background-color: #1F1F25;
    line-height: 20px;
    width: 60px;
    height: 20px;
    border: 1px solid #45454E;
    border-radius: 10px;
    text-align: center;
    margin-right: 15px;
    margin-top: 5px;
}
.probottom{
    position: absolute;
    bottom: 20px;
    display: flex;
    width: 100%;
    padding-left: 15px;
    text-align: center;
}
.proItem{
    flex: 1;
}
.proItem img{
    width: 20px;
    margin-bottom: 3px;
}
</style>