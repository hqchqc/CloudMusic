<template>
    <div class="player" v-if="$store.state.show">
        <div class="bottom_player" v-if="$store.state.music.songItem">
            <div class="pic" >
                <img :src="$store.state.music.songItem.picUrl">
            </div>
            <div class="songName">
                <p>{{$store.state.music.songItem.songName}}</p>
                <p v-if="$store.state.music.songItem.alia==null?'':$store.state.music.songItem.alia">
                    ( {{$store.state.music.songItem.alia}} )</p>
            </div>
            <div class="playButton">
                <div class="angle" @click="pause">
                    <div v-if="$store.state.Pause">
                        <img src="~assets/img/rankItem/pause.svg">
                    </div>
                    
                    <div v-else class="angles"></div>
                </div>
                
            </div>
            <div class="list">
            </div>
        </div>
        
        <audio :src="$store.state.music.url" id="audio" autoplay></audio>
        
    </div>
</template>

<script>
import {isPause} from 'vuex'    
export default {
    name: 'Player',
    methods:{
        pause(){
            this.$store.commit('isPause')
            var audio = document.getElementById('audio')
            if(this.$store.state.Pause){
                audio.play()
            }else{
                audio.pause()
            }
            console.log(1)
        }
    },

}
</script>

<style scoped>
    .player{
        width: 100%;
        height: 43px;
        background-color: #fff;
        bottom:0px;
        z-index: 9;
        position: fixed;
    }
    .bottom_player{
        display: flex;
    }
    .pic{
        flex: 1;
        margin: 2px;
    }
    .pic img{
        width: 38px;
        height: 38px;
        border: 0px solid #fff;
        border-radius: 19px;
    }
    .songName {
        flex: 6;
        font-size: 10px;
        line-height: 43px;
        font-weight: 800;
        display: flex;
    }
    .playButton{
        width: 15px;
        height: 15px;
        flex: 1;
        margin: auto;
    }
    .angle{
        float: left;
        width: 20px;
        height: 20px;
        border: 1px solid #000;
        border-radius: 10px;
        margin-top: -3px;
    }
    .angle img{
        width: 11px;
        margin-left: 3px;
    }
    .angles{
        border-top: 4px solid transparent;
        border-left: 6px solid #000;
        border-bottom: 4px solid transparent;
        margin-left: 6px;
        margin-top: 4px;
    }
</style>