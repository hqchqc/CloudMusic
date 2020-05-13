<template>
    <div id="rankOfficial">
        <div class="title">
            <p>官方榜</p>
        </div>
        <div class="list">
            <ul>
                <li v-for="(attr,index) in rankOfficial" :key="index" @click="officialClick(index)">
                    <div class="left">
                        <img :src="attr.Url">
                        <span class="Frequency">{{attr.Frequency}}</span>
                    </div>
                    <div class="right">
                        <p v-for="(attr,index) in attr.Content" :key="index">
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
import {changeShow} from 'vuex'
export default {
    name: 'RankOfficial',
    data() {
        return {
            idx: [3,0,2,1]
        }
    },
    props:{
        rankOfficial:{
            type: Array,
            default(){
                return []
            }
        }
    },
    methods:{
        officialClick(index){
            this.$router.push('/rank/' + this.idx[index])
        }
    },
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
        border-radius: 5px;
    }
    .left{
        position: relative;
    }
    .Frequency{
        position: absolute;
        bottom: 5px;
        left: 6px;
        font-size: 5px;
        color: #fff;
    }
</style>