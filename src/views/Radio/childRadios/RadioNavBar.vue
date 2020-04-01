<template>
    <div id="RankNavBar">
        <title-bar>
            <div slot="left" class="left"  >
                <img src="~assets/img/common/back.svg" @click="back()">
                <div class="left-font">电台</div>
            </div>
        </title-bar>       
    </div>
</template>

<script>
import TitleBar from 'components/content/titlebar/TitleBar'
export default {
    name: 'RankNavBar',
    components: {
        TitleBar
    },
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
    #RankNavBar{
        z-index: 2;
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
    }
</style>