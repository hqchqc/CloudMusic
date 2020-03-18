<template>
    <div id="recommendList">
        <div class="top">
            <div class="top_left">
                <p class="left_top">推荐歌单</p>
                <p class="left_bottom">为你精挑细选</p>
            </div>
            <div class="top_right" @click="loadMore">
                <p>查看更多</p>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom_item" v-for="(attr,index) in recommendList" :key="index" @click="loadList(index)">
                <div class="pic">
                    <img :src="attr.picUrl">
                    <p>{{attr.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FindRecommendList',
    props:{
        recommendList: {
            type: Array,
            default(){
                return []
            }
        }
    },
    methods:{
        // 查看更多
        loadMore(){
            console.log(1)
        },
        // 歌单链接
        loadList(index){
            console.log(this.recommendList[index].id)
            // console.log(2)
        }
    }
}
</script>

<style scoped>
    .top{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        margin: 0px 10px;
    }
    .left_bottom{
        font-size: 15px;
        font-weight: bold;
        margin-top: 5px;
    }
    .top_right{
        width: 55px;
        height: 19px;
        border: 0.4px solid #909090;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 700;
        padding: 3px;
        margin-top: 17px;
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