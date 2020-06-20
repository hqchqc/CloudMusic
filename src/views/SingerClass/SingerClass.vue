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
            <!-- <router-link to="/singerClass/other">其它</router-link>
            <router-link to="/singerClass/other">其它</router-link>
            <router-link to="/singerClass/other">其它</router-link> -->
            <!-- <router-link to="/singerClass/translate/male">男</router-link> -->
            <!-- <router-link to="/singerClass/translate/male">男</router-link> -->
            <!-- <router-link to="/singerClass/translate/male">男</router-link> -->
            <a>男</a>
            <a>女</a>
            <a>男</a>
            <a>女</a>
            <a>乐队/组合</a>
        </div>
        <div class="hotSinger">
            <p>热门歌手</p>
        </div>
        <router-view></router-view>
        <ClassList :data='data'/>
    </div>
</template>

<script>
import TitleBarLeft from 'components/content/titlebar/TitleBarLeft'
import ClassList from 'components/content/classList/ClassList'
import {getSingerClass} from 'network/singerClass'
export default {
    name: 'SingerClass',
    components:{
        TitleBarLeft,
        ClassList
    },
    data(){
        return {
            font: '歌手分类',
            data: []
        }
    },

    created(){
        getSingerClass().then(res=>{
            this.data = res.data.artists
            this.$store.commit('singerItem',this.data)
        })
    },
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

</style>