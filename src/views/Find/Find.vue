<template>
    <div>
        <find-swiper :banner='banner'/>
    </div>
</template>

<script>
import FindSwiper from './childFinds/FindSwiper'
import {getHomeBanner} from 'network/home'

export default {
    name: 'Find',
    components:{
        FindSwiper
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