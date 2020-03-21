<template>
    <div id='recommend'>    
        <div class="recommendItem" v-for="(attr,index) in recommend" :key="index" @click="itemClick(index)">
            <div class="box">
                <img :src="attr.src">
            </div>
            <div class="box_font">
                <p>{{attr.font}}</p>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'RadioRecommend',
    data(){
        return {
            recommend:[
                {font:'电台分类',src:require('assets/img/radio/classify.svg'),path:''},
                {font:'电台排行',src:require('assets/img/radio/rank.svg'),path:''},
                {font:'付费精品',src:require('assets/img/radio/crown.svg'),path:''},
                {font:'主播学院',src:require('assets/img/radio/study.svg'),path:''},
            ]
        }
    },
    methods:{
        itemClick(index){
            this.$router.push(this.recommend[index])
        }
    }
}
</script>

<style scoped>
    #recommend{
        display: flex;
        text-align: center;
        margin-top: 12px;   
        margin-bottom: 12px; 
        margin: 12px 15px; 

    }
    .recommendItem{
        flex: 1;
    }   
    .box{
        flex: 1;
        width: 35px;
        height: 35px;
        background-color: #FF1D12;
        border-radius: 50%;
        margin: 0px auto;
    }
    .box_font{
        margin-top: 6px;
        font-size: 12px;
        font-weight: bolder;
    }
    .box img{
        width: 20px;
        height: 20px;
        margin-top: 7px;
    }
</style>