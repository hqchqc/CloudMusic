<template>
    <div id="recommend">
        <recommend-item>
            <div slot="left">
                <p class="left_top">{{font_left[0]}}</p>
                <p class="left_bottom">{{font_left[1]}}</p>
            </div>
            <div slot="bottom" class="bottom">
                <div class="bottom_item" v-for="(attr,index) in recommendList" :key="index" @click="loadList(index)">
                    <div class="pic">                   
                        <img :src=" attr.picUrl==null ? attr.coverImgUrl:attr.picUrl">
                        <p>{{attr.name}}</p>                    
                    </div>
                </div>
            </div>
        </recommend-item>     
    </div>
</template>

<script>
import RecommendItem from './RecommendItem.vue'
import {getSongSheet} from 'network/songSheet'
export default {
    name: 'Recommend',
    components:{
        RecommendItem
    },
    data(){
        return{

        }
    },
    props:{
        font_left:{
            type: Array,
            default(){
                return []
            }
        },
        recommendList: {
            type: Array,
            default(){
                return []
            }
        }
    },
    methods:{
        // 歌单链接
        loadList(index){
            this.$router.push('/find/' + this.recommendList[index].id)
        }
    },
}
</script>

<style scoped>
    #recommend{
        margin-top: 20px;
    }
    .left_bottom{
        font-size: 15px;
        font-weight: bold;
        margin-top: 5px;
    }
    .bottom{
        display: flex;
        margin-top: 10px;
        font-size: 10px;
        overflow: scroll;
    }
    .bottom_item{
        flex: 1;
        margin-left: 10px;
        margin-right: -8px;
    }
    .pic img{
        width: 100px;
        height: 100px;
        border-radius: 5px;
        margin-right: 10px;
    }
</style>