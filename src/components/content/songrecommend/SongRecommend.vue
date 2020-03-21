<template>
    <div id="songRecommend">
        <div class="top">
            <div class="top_left">
                <p class="left_top">{{font_left[0]}}</p>
                <p class="left_bottom">{{font_left[1]}}</p>
            </div>
            
            <div class="top_right" @click="loadMore">
                <div class="angle">
                </div>
                <p>播放全部</p>
            </div>
        </div>    
        <div class="bottom">
            <song-item :list='songList'/>                
        </div>
    </div>
</template>

<script>
import SongItem from './SongItem'
export default {
    name: 'SongRecommend',
    components:{
        SongItem
    },
    props:{
        font_left:{
            type: Array,
            default(){
                return []
            }
        },
        songList: {
            type: Array,
            default(){
                return []
            }
        }
    },
    methods:{
        loadMore(){
            console.log('test')
        }
    }
}
</script>

<style scoped>
    #songRecommend{
        margin-top: 20px;
        margin-left: 10px;
    }
    .top{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        margin-right: 10px;
    }
    .left_bottom{
        font-size: 15px;
        font-weight: bold;
        margin-top: 5px;
    }
    .top_right{
        width: 70px;
        height: 19px;
        border: 0.4px solid #909090;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 700;
        padding: 3px;
        margin-top: 17px;
        text-align: center;
    }
    .bottom{
        display: flex;
        margin-top: 10px;
        font-size: 10px;
        overflow: scroll;
    }
    .angle{
        float: left;
        border-top: 4px solid transparent;
        border-left: 8px solid #909090;
        border-bottom: 4px solid transparent;
        margin-top: 3px;
        margin-left: 2px;
    }
</style>