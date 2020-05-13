<template>
    <div id="detail" >
        <div class="bg">
            <div class="nav">
                <title-bar-left/>
                <div class="font">
                    {{$store.state.music.songItem.songName}} <br/>
                    {{$store.state.music.songItem.singerName}}
                </div>
            </div>
        </div>
        <div class="blur" :style="{backgroundImage: this.getUrl,backgroundSize:this.getSize}" ></div>
    </div>
</template>

<script>
import TitleBarLeft from 'components/content/titlebar/TitleBarLeft'
export default {
    name: 'PlayDetail',
    components:{
        TitleBarLeft
    },
    computed:{
        getUrl(){
            return 'url('+this.$store.state.music.songItem.picUrl+')'
        },
        getSize(){
            return '100%'
        }
    },
}
</script>

<style scoped>
#detail{
    position: absolute;
    top: -2px;
    width: 100%;
    height: 100%;
}
.nav{
    display: flex;
}
.font{
    /* background-color: #efefef; */
    margin-top: 2px;
    line-height: 20px;
    z-index: 99;
    width: 100%;
    font-size: 13px;
}
.blur{
    width: 100%;
    height: 100%;
    filter: blur(20px);
    position: relative;
    top: -43px;
    /* z-index: 999; */
}
</style>