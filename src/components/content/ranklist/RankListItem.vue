<template>
    <div class="listItem">
        <div class="pic">
            <img :src="list.Url">
            <span class="Frequency">{{list.Frequency}}</span>
        </div>
        <div class="content">
            {{list.Content}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'RankListItem',
    props:{
        list:{
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .listItem{
        float: left;
        margin-right: 8px;
        margin-top: 10px;
        width: 113px;
        
    }
    .listItem img{
        width: 110px;
        border: 1px solid #fff;
        border-radius: 5px;
    }
    .pic{
        position: relative;
    }
    .Frequency{
        position: absolute;
        bottom: 8px;
        left: 8px;
        font-size: 10px;
        color: #fff;
    }
    .content{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>