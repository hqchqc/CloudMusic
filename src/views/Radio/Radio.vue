<template>
    <div id="radio">
        <radio-nav-bar class="radioNav"/>
        <radio-swiper :banner='banner'/>
    </div>
</template>

<script>
import RadioNavBar from './childRadios/RadioNavBar'
import RadioSwiper from './childRadios/RadioSwiper'
import {radioBanner} from 'network/radio'
export default {
    name: 'Radio',
    components:{
        RadioNavBar,
        RadioSwiper
    },
    data() {
        return {
            banner:[]
        }
    },
    created(){
        radioBanner().then(res=>{
            console.log(res)
            this.banner = res.data.data
        })
    }
}
</script>

<style scoped>
    .radioNav{
        position: relative;
        margin-top: -43px;
        background-color:#fff;
    }
</style>