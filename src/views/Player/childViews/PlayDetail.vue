<template>
    <div id="detail">
        <div class="bg" >
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
            <div class="lyric" v-show='showLyric' @click="cLyric" ref="wrapper">
                <pre class="content">
                    {{this.Lyric}}
                </pre>
            </div>
            <div class="lyric-close" v-show='!showLyric'>
                <div class="gan" :style="{transform:this.transform}">
                    <img src='~assets/img/play/styli.png'>
                </div>
                <div class="disk"> 
                    <img src="~assets/img/play/disk.png">
                </div>
                <div class="imgShow" @click="lric">
                    <img :src="this.$store.state.music.songItem.picUrl" :style="{webkitAnimationPlayState: this.imgShows}">
                </div>
            </div>
            
            
        </div>
        <div class="tail">
            <div class="progress">
                <p class="nowTime">{{this.currentTime}}</p>
                <div class="now-progress" :style="{width:progress}"></div>
                <div class="glo-progress" :style="{marginLeft:progress}"></div>
                <p class="totalTime">{{this.totalTime}}</p>
                <div class="backPro"></div>
            </div>
            <div class="control">
                <div class="previous" @click="preClick">
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
import {getSongsUrl,getLyric} from 'network/rankItem'
import BScroll from 'better-scroll'
import Lyrics from 'lyrics.js'
export default {
    name: 'PlayDetail',
    components:{
        TitleBarLeft
    },
    data(){
        return {
            url: '',
            progress: '0%',
            currentTime: '00:00',
            totalTime: '00:00',
            showLyric: false,
            Lyric: 'dsad'
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
        },
        getCurrentTime(){
             // 获得 dom 对象s
            setInterval(()=>{
                let audio = document.getElementById('audio')
                return audio.currentTime
            },500)
            
        },
        getDuration(){
             // 获得 dom 对象
            let audio = document.getElementById('audio')
            return audio.duration
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
                index = this.$store.state.music.index + 1
            // 全局中拿到歌单
            songItem = this.$store.state.songSheet[0][index]
            // 获得歌曲的 url
            getSongsUrl(this.$store.state.songSheet[0][index].id).then(res=>{
                this.url = res.data.data[0].url

                music = {
                    index: index,
                    songItem: songItem,
                    url: this.url
                }
                // 提交此事件 改变正在播放的音乐中的内容
                this.$store.commit('changePlay',music)
            })
        },
        preClick(){
            //  定义变量存放歌曲
            let music = {},
                songItem = {},
                index = this.$store.state.music.index - 1
            // 全局中拿到歌单
            songItem = this.$store.state.songSheet[0][index]
            // 获得歌曲的 url
            getSongsUrl(this.$store.state.songSheet[0][index].id).then(res=>{
                this.url = res.data.data[0].url
                
                music = {
                    index: index,
                    songItem: songItem,
                    url: this.url
                }
                // 提交此事件 改变正在播放的音乐中的内容
                this.$store.commit('changePlay',music)
            })
        },
        // 将秒转为 分钟：秒钟
        formatSecond(seconds){
            let minute = Math.floor(seconds / 60)
            let second = Math.floor(seconds % 60)
            minute += ''
            second += ''
            minute = (minute.length == 1) ? '0'+minute : minute
            second = (second.length == 1) ? '0'+second : second
            return minute + ':' + second
        },
        lric(){
            getLyric(this.$store.state.music.songItem.id).then(res=>{
                this.showLyric = true

                let lrc = new Lyrics(res.data.lrc.lyric)

                let lyrics = '\n'
                lrc.lyrics_all.filter((item,index)=>{
                    return item.text !== ''
                }).forEach(item => {
                    lyrics = lyrics + item.text + '\n'
                });


                this.Lyric = lyrics
                // console.log(lyrics)
                this.$nextTick(()=>{
                    this.BScroll = new BScroll(this.$refs.wrapper,{
                        click: true,
                    })
                    setInterval(()=>{
                        this.BScroll.scrollBy(0,-20,2)
                        console.log(this.currentTime)
                    },1000)
                })

            })  
            
            
        },
        cLyric(){
            this.showLyric = false
        }
    },
    mounted(){   
        // 获得 dom 对象
        let audio = document.getElementById('audio')
        // 使用此函数不断执行中间代码
        const timer = setInterval(()=>{
            // audio 中有对应属性 单位是秒
            // currentTime 当前播放到的时间
            // duration 歌曲总时长
            const numbers = audio.currentTime / audio.duration
            this.currentTime = this.formatSecond(audio.currentTime)
            this.totalTime = this.formatSecond(audio.duration)
            let perNumber = (numbers * 100).toFixed(2)
            // if(perNumber >= 100){
            //     this.progress = 0
            //     clearInterval(timer)
            // }
            perNumber += '%'
            this.progress = perNumber
           
        },30)

        

    }
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
    top: -5px;
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
.progress{
    position:absolute;
    width: 100%;
    top: 86%;
    padding:0px 40px;
}
.now-progress{
    background-color: whitesmoke;
    height: 3px;
}
.glo-progress{
    margin-top: -3.8px;
    border: 1px solid whitesmoke;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: whitesmoke;
}
.backPro{
    background-color: #ccc;
    width: 100%;
    height: 3px;
    position: relative;
    top: -4px;
    filter:alpha(opacity=30); 
    opacity:0.3
}
.nowTime{
    color:white;
    font-size: 12px;
    position: absolute;
    top: -5px;
    left: 5px;
}
.totalTime{
    color: white;
    font-size: 12px;
    position: absolute;
    top: -5px;
    right: 5px;
}
.lyric{
    height: 450px;
    margin-top: 80px;
    margin-left: -35px;
    overflow: hidden;
    text-align: center;
}
.content{
   max-width: 300px;
   font-size: 15px;
   color: #fff;
   font-family: '微软雅黑';
   letter-spacing: 2px;
   line-height: 25px;
}
</style>