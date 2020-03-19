<template>
    <div id="rankOfficial">
        <div class="title">
            <p>官方榜</p>
        </div>
        <div class="list">
            <ul>
                <li v-for="(attr,index) in rankdata" :key="index">
                    <div class="left">
                        <img :src="attr.coverImgUrl">
                    </div>
                    <div class="right">
                        <p v-for="(attr,index) in attr.tracks" :key="index">
                            {{index + 1 + '.'}}
                            
                            {{attr.first}}
                            -
                            {{attr.second}}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RankOfficial',
    props:{
        rankdata:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    #rankOfficial{
        margin-left: 10px;
        font-size: 12px;
        height: 360px;
        overflow: hidden;
    }
    .title{
        font-size: 14px;
        font-weight: bold;
    }
    .list{
        margin-top: 15px;
    }
    .list ul li{
        display: flex;
        margin-top: 8px;
        white-space:nowrap;
        overflow: hidden;
    }
    .right{
        margin-left: 8px;
        height: 73px;
        line-height: 200%;
    }
    .left img{
        width: 73px;
        border: 1px solid #fff;
        border-radius: 5px;
    }
</style>