<template>
  <div id='playDetail'>
      <div class="topbar">
        <title-bar-left class="barleft"/>
        <span class="songName">{{$store.state.music.songItem.songName}}</span>
        <span class="singerName">{{$store.state.music.songItem.singerName}}</span>
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
    #playDetail{
        background-color: #6A6E72;
    }
    .topbar{
        display: flex;
        position: relative;
        margin-top: -43px;
        z-index: 9;
        background-color: #fff;
    }
    .songName{
        color:#fff;
        font-size: 15px;
        height: 50%;
    }
    .singerName{
        color: #999194;
        height: 50%;

    }
</style>