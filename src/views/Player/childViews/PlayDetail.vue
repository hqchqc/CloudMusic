<template>
    <div id="detail" >
        <div class="bg">
            <div class="nav">
                <title-bar-left/>
                <div class="font">
                    {{$store.state.music.songItem.songName}}<br/>
                    {{$store.state.music.songItem.singerName}}
                </div>
            </div>
        </div>
        <div class="blur" :style="{backgroundImage: this.getUrl,backgroundSize:this.getSize}" ></div>
        <div class="main">
            <div class="gan" :style="{transform:this.transform}">
                <img src='~assets/img/play/styli.png'>
            </div>
            <div class="disk"> 
                <img src="~assets/img/play/disk.png">
            </div>
            <div class="imgShow">
                <img :src="this.$store.state.music.songItem.picUrl" :style="{webkitAnimationPlayState: this.imgShows}">
            </div>
        </div>
        <div class="tail">
            <div class="control" @click="preClick">
                <div class="previous">
                    <img src="~assets/img/play/previous.svg">
                </div>
                <div class="play" v-if="!$store.state.Pause"  @click="pause">
                    <img src="~assets/img/play/play.svg">
                </div>
                <div class="pause" v-else @click="pause">
                    <img src="~assets/img/play/pause.svg" >
                </div>
                <div class="next" @click="nextClick">
                    <img src="~assets/img/play/next.svg">
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import TitleBarLeft from 'components/content/titlebar/TitleBarLeft'
import {isPause} from 'vuex'
import {getSongsUrl} from 'network/rankItem'
export default {
    name: 'PlayDetail',
    components:{
        TitleBarLeft
    },
    data(){
        return {
            url: ''
        }
    },
    computed:{
        getUrl(){
            return 'url('+this.$store.state.music.songItem.picUrl+')'
        },
        getSize(){
            return '100%'
        },
        transform(){
            if(this.$store.state.Pause == true){
                return 'rotate(25deg)'
            }
        },
        imgShows(){
            if(!this.$store.state.Pause == true){
                return 'paused'
            }
        }
    },
    methods:{
        pause(){
            this.$store.commit('isPause')
            var audio = document.getElementById('audio')
            if(this.$store.state.Pause){
                audio.play()
            }else{
                audio.pause()
            }
        },
        nextClick(){
            //  定义变量存放歌曲
            let music = {},
                songItem = {},
                index = (this.$store.state.music.index) + 1
            // 全局中拿到歌单
            songItem = this.$store.state.songSheet[0][index]
            // 获得歌曲的 url
            getSongsUrl(this.$store.state.songSheet[0][index].id).then(res=>{
                this.url = res.data.data[0].url
            })
            // 延迟一点执行 否则上面的语句拿不到 url
            setTimeout(() => {
                music = {
                    index: index,
                    songItem: songItem,
                    url: this.url
                }
                // 提交此事件 改变正在播放的音乐中的内容
                this.$store.commit('changePlay',music)
            }, 500);
        },
        preClick(){
            //  定义变量存放歌曲
            let music = {},
                songItem = {},
                index = (this.$store.state.music.index) - 1
            // 全局中拿到歌单
            songItem = this.$store.state.songSheet[0][index]
            // 获得歌曲的 url
            getSongsUrl(this.$store.state.songSheet[0][index].id).then(res=>{
                this.url = res.data.data[0].url
            })
            // 延迟一点执行 否则上面的语句拿不到 url
            setTimeout(() => {
                music = {
                    index: index,
                    songItem: songItem,
                    url: this.url
                }
                // 提交此事件 改变正在播放的音乐中的内容
                this.$store.commit('changePlay',music)
            }, 500);
        }
    },
}
</script>

<style scoped>
#detail{
    position: absolute;
    top: -2px;
    width: 100%;
    height: 100%;
}
.nav{
    display: flex;
}
.font{
    margin-top: 2px;
    line-height: 20px;
    z-index: 99;
    width: 100%;
    font-size: 13px;
    color: black;
}
.blur{
    width: 100%;
    height: 100%;
    filter: blur(20px);
    position: relative;
    top: -43px;
}
.main{
    position:absolute;
    top: -30px;
    left: 22%;
}
.gan{
    position: absolute;
    z-index: 1;
}
.gan img{
    width: 200px;
    transform: rotate(-35deg);
}
@keyframes diskRoute {
    0%{
        transform:rotate(0deg);
    } 
	50%{
        transform:rotate(180deg);
    }
	100%{
        transform:rotate(360deg);
    }
}
.disk{
    margin-top: 65%;
}
.disk img{
    width: 200px;
    animation: diskRoute 8s linear infinite;

}
.imgShow{
    margin-top: -170px;
    margin-left: 35px;
}
.imgShow img{
    width:130px;
    border: 0px solid #fff;
    border-radius: 65px;
    animation: diskRoute 8s linear infinite;
}

.control{
    position:absolute;
    width: 100%;
    top: 93%;
    display: flex;
    text-align: center;
}
.previous{
    flex: 1;
}
.previous img{
    width: 30px;
}
.play{
    flex: 1;
}
.play img{
    width: 30px;
}
.pause{
    flex: 1;
}
.pause img{
    margin-top: -2px;
    margin-left: 1px;
    width: 35px;
}
.next{
    flex: 1;
    width: 30px;
}
.next img{
    width: 30px;
}
</style>