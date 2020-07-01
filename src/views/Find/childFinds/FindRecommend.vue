<template>
    <div id='recommend'>    
        <div class="recommendItem" v-for="(attr,index) in recommend" :key="index" @click="itemClick(index)">
            <div class="box">
                <img :src="attr.src">
            </div>
            <div class="box_font">
                <p>{{attr.font}}</p>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'FindRecommend',
    data(){
        return {
            recommend:[
                {font:'每日推荐',src:require('assets/img/find/command/command.svg'),path:'/recommend'},
                {font:'歌单',src:require('assets/img/find/command/songlist.svg'),path:'/songlist'},
                {font:'排行榜',src:require('assets/img/find/command/rank.svg'),path:'/rank'},
                {font:'电台',src:require('assets/img/find/command/radio.svg'),path:'/radio'},
                {font:'直播',src:require('assets/img/find/command/online.svg'),path:'/online'},
            ]
        }
    },
    methods:{
        itemClick(index){
            // this.$toast.show('暂无内容！')
            
            if(index == 0 || index == 1 || index == 4){
                this.$toast.show('暂无内容！')
            }else{
                this.$router.push(this.recommend[index])
            }
        }
    }
}
</script>

<style scoped>
    #recommend{
        display: flex;
        text-align: center;
        margin-top: 12px;   
        margin-bottom: 12px; 
        margin: 12px 15px; 

    }
    .recommendItem{
        flex: 1;
    }   
    .box{
        flex: 1;
        width: 35px;
        height: 35px;
        background-color: #FF1D12;
        border-radius: 50%;
        margin: 0px auto;
    }
    .box_font{
        margin-top: 6px;
        font-size: 10px;
        font-weight: bolder;
    }
    .box img{
        width: 18px;
        height: 18px;
        margin-top: 9px;
    }
</style>