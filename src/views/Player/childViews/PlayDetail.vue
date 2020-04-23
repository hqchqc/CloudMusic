<template>
  <div id='playDetail'>
      <div class="topbar">
        <title-bar-left/>
        <div style="margin-top:8px">
            <span class="songName">{{$store.state.music.songItem.songName}}</span>
            <br/>
            <span class="singerName">{{$store.state.music.songItem.singerName}}</span>
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
    }
}
</script>

<style scoped>
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