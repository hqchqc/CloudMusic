<template>
    <div id="RankNavBar" class='rank-nav'> 
        <title-bar>
            <div slot="left" class="left">
                <img src="~assets/img/common/back.svg" @click="back()">
                <div class="left-font">{{font}}</div>
            </div>
        </title-bar>       
    </div>
</template>

<script>
import TitleBar from './TitleBar'
import {isShow} from 'vuex'    

export default {
    name: 'TitleBarLeft',
    components: {
        TitleBar
    },
    props: {
        font:{
            type: String,
            default(){
                return ''
            }
        }
    },
    methods:{
        back(){
            this.$store.commit('isShow')
            this.$router.back()
        }
    }
}
</script>

<style scoped>
    .rank-nav{
        position: relative;
        z-index: 9;
    }
    .left{
        margin-left: 10px;
    }
    .left img{
        width: 15px;
        height: 15px;  
        margin-right: 5px;
        vertical-align:middle
    }
    .left-font{
        display:inline-block;
        font-size: 15px;
        font-weight: 800;
    }
</style>