<template>
    <div id="find">
        <find-swiper :banner='banner'/>
        <find-recommend/>
        <find-welcome/>
        <recommend :recommendList='recommendList' :font_left='getContent'/>
        <song-recommend :songList='songList' :font_left='getSongContent'/>
    </div>
</template>

<script>
import FindSwiper from './childFinds/FindSwiper'
import FindRecommend from './childFinds/FindRecommend'
import FindWelcome from './childFinds/FindWelcome'

import Recommend from 'components/content/recommend/Recommend'
import SongRecommend from 'components/content/songrecommend/SongRecommend'

import {getFindBanner,getRecommendList,getRecommendSong,SongItem} from 'network/find'

export default {
    name: 'Find',
    components:{
        FindSwiper,
        FindRecommend,
        FindWelcome,
        Recommend,
        SongRecommend
    },
    data(){
        return {
            banner: [],
            recommendList: [],
            songList: []
        }
    },
    computed:{
        getContent(){
            return ['推荐歌单','为你精挑细选']
        },
        getSongContent(){
            return ['风格推荐','你与民谣 我与欢喜']
        }
    },
    created(){
        //组件一创建就请求数据
        // 1.轮播图数据
        getFindBanner().then(res=>{
            this.banner = res.data.banners
        })
        // 2.推荐歌单数据
        getRecommendList().then(res=>{
            this.recommendList = res.data.result
        })
        // 3.推荐歌曲数据
        getRecommendSong().then(res=>{
            var SongList = new SongItem(res.data.playlists).then(res=>{
                // console.log(res)
                this.songList = res.data.playlist.tracks.slice(0,9)
                
                console.log(this.songList)
            })

        })
    }
}
</script>

<style scoped>

</style>