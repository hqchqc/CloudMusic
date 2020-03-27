<template>
    <div class="player">
        <div class="bottom_player">
            <div class="pic">
                <img src="">
            </div>
            <div class="songName">
                <p></p>
                <p></p>
            </div>
            <div class="playButton">

            </div>
            <div class="list">
            </div>
        </div>
        
            <audio :src="$store.state.music.url" id="audio" autoplay></audio>
        
        
    </div>
</template>

<script>
export default {
    name: 'Player',
    data() {
        return {
            index: this.$store.state.music.index
        }
    },
    created(){
        console.log(this.$store.state.music.index)
    }
    
}
</script>

<style scoped>
    .player{
        width: 100%;
        height: 43px;
        background-color: red;
        bottom: 0px;
        z-index: 9;
        position: position;
    }
</style>