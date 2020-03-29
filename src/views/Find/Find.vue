<template>
    <div id="find">
        <find-swiper :banner='banner'/>
        <find-recommend/>
        <!-- <find-welcome/> -->
        <recommend :recommendList='recommendList' :font_left='getContent'/>
        <song-recommend :songList='songList' :loading = 'loading' :font_left='getSongContent'/>
        <recommend :recommendList='ActionrecommendList' :font_left='getActionContent'/>
        <recommend :recommendList='RadioRecommendList' :font_left='getRadioContent'  :class="{active: $store.state.show}"/>
    </div>
</template>

<script>
import FindSwiper from './childFinds/FindSwiper'
import FindRecommend from './childFinds/FindRecommend'
import FindWelcome from './childFinds/FindWelcome'

import Recommend from 'components/content/recommend/Recommend'
import SongRecommend from 'components/content/songrecommend/SongRecommend'

import {getFindBanner,getRecommendList,getRecommendSong,SongItem,getActionRecommend,getRadioRecommend} from 'network/find'

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
            songList: [],
            loading:false,
            ActionrecommendList:[],
            RadioRecommendList: []
        }
    },
    computed:{
        getContent(){
            return ['推荐歌单','为你精挑细选']
        },
        getSongContent(){
            return ['风格推荐','你与民谣 我与欢喜']
        },
        getActionContent(){
            return ['场景推荐','午安 来杯音乐红茶']
        },
        getRadioContent(){
            return ['电台推荐','陌生人，送个故事给你']
        }
    },
    created(){
        //组件一创建就请求数据
        // 1.轮播图数据
        getFindBanner().then(res=>{
            this.banner = res.data.banners
        })
        // 2.推荐歌单数据(所有)
        getRecommendList().then(res=>{
            this.recommendList = res.data.result
        })
        // 3.推荐民谣歌单的歌曲
        getRecommendSong().then(res=>{
            var list = {}
            var data = res.data.playlist.tracks.slice(0,10)
            for(var attr of data){
                list = {picUrl: attr.al.picUrl,author: attr.ar[0].name,name: attr.name}
                this.songList.push(list)
            }
            this.loading = true
        })
        // 4.场景推荐的歌单
        getActionRecommend().then(res=>{
            this.ActionrecommendList = res.data.playlists
        })
        // 5.电台推荐
        getRadioRecommend().then(res=>{
            this.RadioRecommendList = res.data.djRadios
        })
    }
}
</script>

<style scoped>

</style>