<template>
    <div id="recommendList">
        <div class="top">
            <div class="top_left">
                <p class="left_top">推荐歌单</p>
                <p class="left_bottom">为你精挑细选</p>
            </div>
            <div class="top_right" @click="loadMore">
                <span>查看更多</span>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom_item">
                <div class="pic" v-for="(attr,index) in recommendList" :key="index" @click="loadList(index)">
                    <img :src="attr.picUrl">
                    <span>{{attr.name}}</span>
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
        position: relative;
    }
    .left_top{
        font-size: 12px;
    }
    .left_bottom{
        font-size: 15px;
        font-weight: bold;
        margin-top: 5px;
    }
    .top_right{
        float: right;
        background-color: #fff;
        border: 1px solid #000;
        border-radius: 15px;
        font-size: 12px;
        padding: 3px;
        margin-right: 15px;
        margin-top: 13px;
    }
    .top_left{
        position: absolute;
        margin-left: 15px;
    }
    .bottom{
        position: absolute;
        margin-top: 40px;
        margin-left: 10px;
    }
    .bottom_item{
        display: flex;
        width: 100%;
        justify-content:space-between;
        overflow: scroll;
        max-width: 365px;
    }
    .pic{
        flex: 1;
        margin: 5px;
        font-size: 12px;
    }
    .pic img{
        width: 100px;
        height: 100px;
        border-radius: 5px;
    }
    
</style>