<template>
    <div>
        <div class="bgImage">
            <div class='content' v-if="SongItem.length">
                <img :src="SongItem[0].picUrl">
            </div>
            
            <div class="bar">
                <div class="left" @click="goback()">
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
                    <div class="angle">
                        <div class="angles"></div>
                    </div>             
                    <p>播放全部</p>
                </div>
            </div>
            <ul class="box">
                <li v-for="(attr,index) of SongItem" :key="index" class="liItem" @click="choose(attr.id,index)">
                    <div class='box_num'>
                        <p>{{index+1}}</p>
                    </div>
                    <div class="box_name">
                        <div class="name_top">
                            <p>{{attr.songName}}</p>
                            <p class="top_bottom">{{attr.alia==''?'':'('+attr.alia+')'}}</p>
                        </div>
                        <div class="name_bottom">
                            <p>{{attr.singerName}} - {{attr.zjName}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div> 
    </div>
</template>

<script>
import {getSongItem,getSongsUrl} from 'network/rankItem'

import {mapActions,isShow,isPause} from 'vuex'

export default {
    name: 'RankItem',
    components:{
        
    },
    data() {
        return {
            id: 0,
            idx: '',
            SongItem: [],
            url: '',    // 歌曲链接
            picUrl: '', // 歌曲封面链接
            alia: '',
            zjName: '',
            music: {}
        }
    },
    methods: {
        ...mapActions(['AddMusic']),
        goback(){
            this.$router.back()
        },
        choose(id,index){
            getSongsUrl(id).then(res=>{
                this.url = res.data.data[0].url
            })
            // 这里要设置延时执行否则第一次点击的时候拿不到歌曲链接
            setTimeout(()=>{
                this.$store.dispatch('AddMusic',{url:this.url,songItem:this.SongItem[index],index:index}).then(res=>{
                    console.log(res)
                })
            },800)
            // 底部显示播放控件
            this.$store.commit('isShow')
            // 改变暂停和播放图标
            if(!this.$store.state.Pause){
                this.$store.commit('isPause')
            }
            
        }
    },
    created(){
        this.idx = this.$route.params.id;
        // 1.获取歌曲列表数据
        getSongItem(this.idx).then(res=>{
            for(var attr of res.data.playlist.tracks){
                this.picUrl = attr.al.picUrl    // 图片封面
                this.songName = attr.name       // 歌曲名称
                this.alia = attr.alia[0]        // 歌曲名称后面对应的  xxx主题曲
                this.id = attr.id               // 歌曲ID
                this.singerName = attr.ar[0].name   // 歌手名称
                this.zjName = attr.al.name            // 专辑名称
                this.music = {picUrl: this.picUrl, songName: this.songName, alia: this.alia==null?'':this.alia,
                              id: this.id, singerName: this.singerName, zjName: this.zjName}
                this.SongItem.push(this.music)
            }
        })
    },
    
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
    .left{
        z-index: 1;
    }
    .left img{
        width: 20px;
        height: 20px;  
        border: 0px;
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
        bottom: 85px;
    }
    .bottom{
        background-color: #F1EFF1;
        position: absolute;
        top: 233px;
        z-index: 9;
        font-size: 14px;
        font-weight: 800;
        width: 100%;
    }
    .top{
        height: 50px;
        margin-top: -43px;
        border-top: 0px solid;
        border-radius: 15px 15px 0px 0px;
        background-color: #F1EFF1;
    }
    .font{
        margin-left: 5px;
        height: 33px;
        line-height: 33px;
        font-size: 13px;
    }
    .box{
        margin-top: -25px;
        display: block;
        margin-bottom: 43px;
    }
    .angle{
        float: left;
        width: 14px;
        height: 14px;
        border: 1px solid #000;
        border-radius: 7px;
        margin-top: 10px;
        margin-left: 6px;
        margin-right: 6px;
    }
    .angles{
        border-top: 3px solid transparent;
        border-left: 5px solid #000;
        border-bottom: 3px solid transparent;
        margin-left: 4px;
        margin-top: 3px;
    }
    .liItem{
        margin-top: 10px;
        display: flex;
        
    }
    .box_num{
        color: #D6D8D6;
        font-size: 12px;
        margin-left: 12px;
        margin-right: 12px;
        width: 15px;
        text-align: center;
        margin-top: 5px;
    }
    .name_top{
        width: 100%;
        font-size: 12px;  
    
    }
    .name_top p{
        display: inline; 
        
    }
    .top_bottom{
        font-weight: normal;
        font-size: 11px;
        
    }
    .name_bottom{
        font-size: 9px;
        font-weight: normal;
        margin-top: 6px;
    }
</style>