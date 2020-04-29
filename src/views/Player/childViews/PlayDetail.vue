<template>
  <div id='playDetail' :style="{background:getUrl}" style="background-size: auto 100%">
      <div class="bg" >
            <div class="topbar">
            <title-bar-left/>
            <div style="margin-top:8px">
                <span class="songName">{{$store.state.music.songItem.songName}}</span>
                <br/>
                <span class="singerName">{{$store.state.music.songItem.singerName}}</span>
            </div>
      </div>
      
        
      </div>
      
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
            let url = this.$store.state.music.songItem.picUrl
            let result = 'url("' + url + '")' + 'no-repeat'
            console.log(result)
            return result
        }
    }
    
}
</script>

<style scoped>
    #playDetail{
        /* width:100%; */
        height:100vh;
        filter: blur(30px);
        z-index: 99;
        
        
    }
    .topbar{
        display: flex;
        position: relative;
        margin-top: -43px;
        z-index: 9;
        background-color: #fff;
    }
    .songName{
        color:#999194;
        font-size: 13px;
    }
    .singerName{
        color: #999194;
        font-size: 10px;
    }
</style>