<template>
    <div id="myCollected">
        <title-bar-left :font='font' style="margin-top:-43px"/>
        <div class="collectBar">
            <div class="grid">
                <router-link to="/collect/album" class='display'>专辑</router-link>
                <router-link to="/collect/singer" class='display'>歌手</router-link>
                <router-link to="/collect/collectVideo" class='display'>视频</router-link>
                <router-link to="/collect/column" class='display'>专栏</router-link>
                <router-link to="/collect/mlog" class='display'>Mlog</router-link>
            </div>
            <router-view/>
        </div>
    </div>
</template>

<script>
import TitleBarLeft from 'components/content/titlebar/TitleBarLeft'
export default {
    name: 'MyCollect',
    components:{
        TitleBarLeft
    },
    data(){
        return {
            font: '我的收藏'
        }
    }
}
</script>

<style scoped>
    .grid{
        border-bottom: 0.1px solid gray;
        display: flex;
        text-align: center;
        font-size: 10px;
        margin-top: 10px;
        /* padding-bottom: 5px; */
    }
    .display{
        flex: 1;
        padding-bottom: 10px;
    }
    .router-link-active {
        color: #FF3E3E;
        border-bottom: 1px solid #FF3E3E;
    }
</style>