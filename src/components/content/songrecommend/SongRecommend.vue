<template>
    <div id="songRecommend">
        <div class="top">
            <div class="top_top">
                <p class="one">{{font_left[0]}}</p>
                <p class="two">{{font_left[1]}}</p>
            </div>
            <div class="top_bottom">
                <div class="bottom-bor">
                    <div class="angle"></div>
                    <p>播放全部</p>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-item" v-if="loading">   
                <ul>
                    <li v-for="attr in 3" :key="attr">
                        <div class="pic">
                            <img :src="songList[attr].picUrl">
                        </div>                   
                        <div class="font">
                            <p class="font_one">{{songList[attr].name}}</p>
                            <p class="font_two">-{{songList[attr].author}}</p>
                        </div>
                        <div class="angles">
                            <div class="angles_content">
                                <div class="angle_two"></div>
                            </div>                         
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bottom-item" v-if="loading">
                <ul>
                    <li v-for="attr in 3" :key="attr">
                        <div class="pic">
                            <img :src="songList[attr+3].picUrl">
                        </div>                   
                        <div class="font">
                            <p class="font_one">{{songList[attr+3].name}}</p>
                            <p class="font_two">-{{songList[attr+3].author}}</p>
                        </div>
                        <div class="angles">
                            <div class="angles_content">
                                <div class="angle_two"></div>
                            </div>                         
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bottom-item" v-if="loading">
                <ul>
                    <li v-for="attr in 3" :key="attr">
                        <div class="pic">
                            <img :src="songList[attr+6].picUrl">
                        </div>                   
                        <div class="font">
                            <p class="font_one">{{songList[attr+6].name}}</p>
                            <p class="font_two">-{{songList[attr+6].author}}</p>
                        </div>
                        <div class="angles">
                            <div class="angles_content">
                                <div class="angle_two"></div>
                            </div>                         
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'SongRecommend',

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
        },
        loading: ''
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
        display: flex;
    }
    .top_top{
        flex:8
    }   
    .one{
        font-size: 12px;
    }
    .two{
        font-size: 15px;
        font-weight: bold;
        margin-top: 5px;
    }
    .top_bottom{
        flex:2
    }
    .bottom-bor{
        font-size: 12px;
        font-weight: bold;
        width: 65px;
        height: 19px;
        border: 0.4px solid #909090;
        border-radius: 10px;
        padding: 2px;
        margin-top: 15px;
        margin-right: 10px;
    }
    .angle{
        float: left;
        border-top: 4px solid transparent;
        border-left: 8px solid #909090;
        border-bottom: 4px solid transparent;
        margin-top: 3px;
        margin-left: 2px;
    }
    .bottom{
        display: flex;
        overflow: scroll;
    }
    .bottom-item{
        margin-top: 10px;
        margin-right: 10px;
        flex: 1;
    }
    .bottom-item ul{
        width: 330px;
        list-style: none;
    }
    .bottom-item ul li{
        display: flex;
        margin-top: 5px;
    }
    .bottom-item img{
        width: 50px;   
        height: 50px;
        border: 1px solid #fff;
        border-radius: 5px;
    }
    .pic{
        flex: 2;
    }
    .font{
        flex: 9;
        font-size: 13px;
        color: #000;
        margin: auto;
    }
    .font_one{
        display: inline;
    }
    .font_two{
        display: inline;
        color: #909090;
        font-size: 10px;
    }
    .angles{
        flex: 1;
        margin:auto;
    }
    .angles_content{
        width: 15px;
        height: 15px;
        border: 0.4px solid #909090;
        border-radius: 7px;
    }
    .angle_two{
        float: left;
        border-top: 4px solid transparent;
        border-left: 8px solid #FF3A3A;
        border-bottom: 4px solid transparent;
        margin-top: 3px;
        margin-left: 3px;
    }
</style>