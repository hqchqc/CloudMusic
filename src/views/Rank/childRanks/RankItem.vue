<template>
    <div>
        <div class="bgImage">
            <div class='content'>
                <img :src="SongItem[0].al.picUrl">
            </div>
            
            <div class="bar">
                <div class="left">
                    <img src="~assets/img/common/back_white.svg">
                </div>
                <div class="right">
                    <div class="right_left">
                        <img src="~assets/img/common/search_white.svg">
                    </div>
                    <div class="right_right">
                        <img src="~assets/img/common/menu_white.svg">
                    </div>              
                </div>
            </div>
            <div class="theme">
                <img src="~assets/img/rank/upRank.png">
            </div>
        </div>
        <div class="bottom">
            <div class="top">
                <div class="font">
                    <div class="angle"></div>
                    <p>播放全部</p>
                </div>
                
            </div>
            <ul class="box">
                <li v-for="(attr,index) in SongItem" :key="index">
                    <p>{{attr.name}} - {{attr.ar[0].name}}</p>
                    <p>{{attr.alia[0]==null?'':attr.alia[0]}}</p>
                </li>
            </ul>
            </div> 
    </div>
</template>

<script>
import {getSongItem} from 'network/rankItem'

export default {
    name: 'RankItem',
    components:{
        
    },
    data() {
        return {
            idx: '',
            SongItem: []
        }
    },
    created(){
        this.idx = this.$route.params.id;

        // 1.获取歌曲数据
        getSongItem(this.idx).then(res=>{
            this.SongItem = res.data.playlist.tracks
            console.log(this.SongItem)
        })
    }
}
</script>

<style scoped>
    .bgImage{
        position: relative;
        top: -43px;
        z-index: 9;
    }
    .content{
        height: 240px;
        overflow: hidden;
    }
    .bgImage img{
        width: 100%;
    }
    .bar{
        position: absolute;
        top: 25px;
        left: 15px;
        width: 93%;
    }
    .left img{
        width: 20px;
        height: 20px;  
    }
    .right_left{
        display: inline;
        margin-right: 10px;
    }
    .right_right{
        display: inline;
        
    }
    .right img{
        width: 20px;
        height: 20px; 
    }
    .theme img{
        width: 125px;
        height: 122px;
        position:absolute;
        bottom: 55px;
    }
    .bottom{
        background-color: #F1EFF1;
        position: absolute;
        top: 263px;
        z-index: 9;
        font-size: 14px;
        font-weight: 800;
    }
    .top{
        height: 50px;
        margin-top: -43px;
        border-top: 1px solid;
        border-radius: 15px;
        background-color: #F1EFF1;
    }
    .font{
        margin-left: 5px;
        
    }
    .box{
        margin-top: 10px
    }
</style>