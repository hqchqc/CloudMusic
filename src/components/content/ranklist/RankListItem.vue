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
    }
    .listItem img{
        width: 125px;
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
</style>