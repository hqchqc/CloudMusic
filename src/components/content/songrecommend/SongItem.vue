<template>
    <div class="bottom">
        <ul>
            <li v-for="(attr,index) in list" :key="index" class="box">
                <div class="left">
                    <img :src="attr.al.picUrl">
                    <div class="font">
                        <p class="left-l">{{attr.name}}</p>
                        <p class="left-r"> - {{attr.ar[0].name}}</p>
                    </div>
                </div>
                <div class="right">
                    <div class="right-bor">
                        <div class="angle"></div>
                    </div>                   
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SongItem',
    props:{
        list:{
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
        }
    }
}
</script>

<style scoped>
    .bottom{
        flex: 1;
        margin-right: -8px;
    }
    .left img{
        width: 55px;
        height: 55px;
        border-radius: 5px;
        margin-right: 10px;
    }
    ul{
        list-style: none;
        width: 100%;


    }
    .bottom li{
        height: 65px;

    }
    .box{
        display: flex;
        justify-content:space-between;
        width: 100%;
    }
    .left{
        flex: 8;
        margin:auto;
        position: relative;
    }
    .left-l{
        display: inline;
        font-weight: bolder;
        font-size: 13px;
    }
    .left-r{
        display: inline;
    }
    .font{
        position: absolute;
        left: 62px;
        top: 23px;
    }
    .right{
        flex:2;
        margin-top: 23px;
    }
    .right-bor{
        border: 0.1px solid #808080;
        width: 16px;
        height: 16px;
        border-radius: 8px;
    }
    .angle{
        float: left;
        border-top: 4px solid transparent;
        border-left: 8px solid #FF3A3A;
        border-bottom: 4px solid transparent;
        margin-top: 3px;
        margin-left: 4px;
    }
    li:nth-child(4){
        float: left;
    }
</style>