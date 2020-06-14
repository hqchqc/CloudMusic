<template>
    <div id="singerClass">
        <title-bar-left :font='font' class="bar"/>
        <div class="class">
            <router-link to="/singerClass/translate">华语</router-link>
            <router-link to="/singerClass/europe">欧美</router-link>
            <router-link to="/singerClass/japan">日本</router-link>
            <router-link to="/singerClass/korea">韩国</router-link>
            <router-link to="/singerClass/other">其它</router-link>
            <br/>
            <a>男</a>
            <a>女</a>
            <a>乐队/组合</a>
        </div>
        <div class="hotSinger">
            <p>热门歌手</p>
        </div>
        <router-view></router-view>
        <div class="list">
            <ul>
                <li v-for="(item,index) in data" :key="index" class="listItem">
                    <img :src="item.picUrl" />
                    <span>{{item.name}}</span>
                    <div class="head">
                        <img src='~assets/img/singer/head.svg'/>
                    </div>
                    <div class="follow" @click="followMe">
                        <p>+ 关 注</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import TitleBarLeft from 'components/content/titlebar/TitleBarLeft'
import {getSingerClass} from 'network/singerClass'
export default {
    name: 'SingerClass',
    components:{
        TitleBarLeft
    },
    data(){
        return {
            font: '歌手分类',
            data: []
        }
    },
    methods:{
        followMe(){
            console.log('pick me pick me')
        }
    },
    created(){
        getSingerClass().then(res=>{
            this.data = res.data.artists
        })
    }
}
</script>

<style scoped>
.bar{
    margin-top: -43px;
    background-color: #fff;
}
.class{
   font-size: 13px;
}
.class a{
    display: inline-block;
    margin-left: 15px;
    margin-top: 10px;
}
.hotSinger{
    margin-top: 10px;
    font-size: 12px;
    background-color: #DBDBDC;
    padding: 8px;
    padding-left: 10px;
}
ul li{
    list-style: none;
}
.listItem{
    margin-left: 10px;
    margin-top: 5px;
    font-size: 12px;
    display: flex;
}
.listItem img{
    width: 50px;
    height: 50px;
    border: 0px solid #fff;
    border-radius: 25px;
    margin-top: 5px;
}
.listItem span{
    line-height: 57px;
    margin-left: 10px;
}
.head{
    flex: 1;
}
.head img{
    width: 16px;
    margin-left: 10px;
}
.follow{
    height: 20px;
    width: 60px;
    text-align: center;
    line-height: 20px;
    border-radius: 15px;
    color: red;
    border: 1px solid red;
    margin-right: 10px;
    margin-top: 18px;
}
</style>