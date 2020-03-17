<template>
    <div id="find">
        <find-swiper :banner='banner'/>
        <find-recommend/>
        <find-welcome/>
    </div>
</template>

<script>
import FindSwiper from './childFinds/FindSwiper'
import FindRecommend from './childFinds/FindRecommend'
import FindWelcome from './childFinds/FindWelcome'

import {getHomeBanner} from 'network/home'

export default {
    name: 'Find',
    components:{
        FindSwiper,
        FindRecommend,
        FindWelcome
    },
    data(){
        return {
            banner: [],
        }
    },
    created(){
        //组件一创建就请求数据
        // 1.轮播图数据
        getHomeBanner().then(res=>{
            this.banner = res.data.banners
        })
    }
}
</script>

<style scoped>

</style>