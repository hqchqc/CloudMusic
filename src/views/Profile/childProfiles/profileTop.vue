<template>
<div id="profile">
    <div class="proTop">
        <div class="head">
            <img v-if="isShow" :src='userDetail.userHead'>
            <img v-else src="~assets/img/profile/head.svg">
        </div>
        <div class="font">
            <p style="font-weight:800" v-if="isShow">{{userDetail.userName}}</p>
            <p v-else>登录立享手机电脑多端同步</p>
        </div>
        <div class="login" @click='logins()' v-if="!isShow">
            <p>立即登录</p>
        </div>
    </div>
    <div class="probottom">
        <div class="proItem" v-for="(attr,index) in item" :key="index" @click="choose(index)">
            <img :src="attr.src">
            <p>{{item[index].font}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProfileTop',
    data(){
        return {
            item: [
                {src: require('assets/img/profile/music.svg'),font: '本地音乐'},
                {src: require('assets/img/profile/download.svg'),font: '下载管理'},
                {src: require('assets/img/profile/radio.svg'),font: '我的电台'},
                {src: require('assets/img/profile/collect.svg'),font: '我的收藏'},
                {src: require('assets/img/profile/song.svg'),font: '关注新歌'},
            ],
            userDetail: {},
            isShow: false
        }
    },
    methods:{
        logins(){
            this.$router.push('/login')
        },
        choose(index){
            switch(index){
                case 0:
                case 1:
                    this.$toast.show('Sorry，该功能暂不支持，期待后续更新嗷' + '(●"◡"●)')
                    break
                case 2:
                    this.$router.push('/radio')
                    break
                case 3:
                    this.$router.push('/collect')
                    break
                default:


            }
            
        }
    },
    created(){
        var type = typeof this.$store.state.userInfo
        if(type == 'object'){
            this.userDetail = this.$store.state.userInfo
            var len = Object.keys(this.$store.state.userInfo).length
            if(len){
                this.isShow = true
            }
        }else{
            if(this.$store.state.userInfo.length !== 0){
                this.userDetail = JSON.parse(this.$store.state.userInfo)
                this.isShow = true
            }
        }
        
    },
}
</script>

<style scoped>
 #profile{
    position: relative;
    background-color: #1E1E24;
    top: -43px;
    font-size: 8px;
    color: #fff;
    height: 160px;
    letter-spacing: 1px;
    z-index: 1;
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
    border: 0px solid #ccc;
    border-radius: 15px;
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