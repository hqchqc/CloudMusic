<template>
    <div>
        <div class="wrapper">
            <div class="content" ref="ratingsWrapper">
                <div>
                    <div class="video" v-for="(item,index) in url" :key="index" >
                        <video id="myVideo"
                                class="video-js vjs-default-skin vjs-big-play-centered" 
                                controls
                                preload="auto"  
                                :poster= cover[index]>
                            <source :src= item type="video/mp4">
                        </video>
                        <div class="title">
                            <span>{{name[index]}}</span>
                            <span>-</span>
                            <span>{{artistName[index]}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {getMvTop,getMv} from 'network/video'
export default {
    name: 'Video',  
    data(){
        return {
            data: {},
            url: [],
            cover:[],
            name: [],
            artistName: []
        }
    },
    mounted(){
        this.$nextTick(()=>{
            this.scroll = new BScroll(this.$refs.ratingsWrapper,{
                click:true,
            });
        })
        this.getTop()
    },
    methods: {
        getTop(){
            getMvTop().then(res=>{
                this.data = res.data.data
                this.cover.push(res.data.data.cover)
                this.mvGet()
            })
        },
        mvGet(){
            this.data.forEach(item=>{
                this.name.push(item.name)
                this.artistName.push(item.artistName)
                getMv(item.id).then(res=>{
                    this.url.push(res.data.data.url)
                })
            })
        }
    }
}
</script>

<style scoped>
    .content{
        height: 100vh;
        overflow: hidden;
    }
    #myVideo{
        margin: 10px;
        width: 95%;
        height: 200px;    
        border: 0px solid #ccc;
        border-radius: 10px;
    }
    .title{
        margin-left: 10px;  
        font-size: 13px;
    }
</style>