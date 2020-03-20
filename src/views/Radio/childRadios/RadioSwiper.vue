<template>
    <div class="radioSwiper">
        <swiper>
            <swiper-item v-for="(item,index) in banner" :key="index">
                <img :src="item.pic">   
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
    name: 'RadioSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        banner: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>

</style>