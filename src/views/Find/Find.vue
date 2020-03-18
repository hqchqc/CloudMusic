<template>
    <div id="find">
        <find-swiper :banner='banner'/>
        <find-recommend/>
        <find-welcome/>
        <find-recommend-list :recommendList='recommendList'/>
    </div>
</template>

<script>
import FindSwiper from './childFinds/FindSwiper'
import FindRecommend from './childFinds/FindRecommend'
import FindWelcome from './childFinds/FindWelcome'
import FindRecommendList from './childFinds/FindRecommendList'

import {getFindBanner,getRecommendList} from 'network/find'

export default {
    name: 'Find',
    components:{
        FindSwiper,
        FindRecommend,
        FindWelcome,
        FindRecommendList,
    },
    data(){
        return {
            banner: [],
            recommendList: []
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
    }
}
</script>

<style scoped>

</style>