<template>
    <div id="rankCommend">
        <div class="title">
            <slot name="font">
                <p>推荐榜</p>
            </slot>
        </div>
        <div class="list">
            <rank-list-item v-for="(attr,index) in listItem" :key="index" :list = 'attr'/>
        </div>
    </div>
</template>

<script>
import RankListItem from './RankListItem'
export default {
    name: 'RankList',
    components:{
        RankListItem
    },
    props:{
        listItem:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    #rankCommend{
        margin-left: 10px;
        margin-top: 20px;
        font-size: 12px;
        overflow: hidden;
    }
    .title{
        font-size: 14px;
        font-weight: bold;
    }
    .list{
        margin: 0px;
        padding: 0px;
    }
</style>