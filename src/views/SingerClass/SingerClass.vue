<template>
    <div id="singerClass">
        <title-bar-left :font='font' class="bar"/>
        <div class="class">
            <router-link to="/singerClass/translate">华语</router-link>
            <router-link to="/singerClass/europe">欧美</router-link>
            <router-link to="/singerClass/japan">日本</router-link>
            <router-link to="/singerClass/korea">韩国</router-link>
            <router-link to="/singerClass/other">其它</router-link>

            <br />
            <a @click="gotoMale">男</a>
            <a @click="gotoFemale">女</a>
            <a @click="gotoOthers">其它</a>
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
import {getSingerClass,getCategory} from 'network/singerClass'
export default {
    name: 'SingerClass',
    components:{
        TitleBarLeft,
        ClassList
    },
    methods:{
        gotoMale(){
            console.log(1111)
            if(this.$route.path.includes('translate')){
                getCategory(1,7).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                })   
                this.$router.push('/singerClass/translate/male')
            }else if(this.$route.path.includes('europe')){
                getCategory(1,96).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                })   
                this.$router.push('/singerClass/europe/male')
            }else if(this.$route.path.includes('japan')){
                getCategory(1,8).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                })   
                this.$router.push('/singerClass/japan/male')
            }else if(this.$route.path.includes('korea')){
                getCategory(1,16).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                })   
                this.$router.push('/singerClass/korea/male')
            }else if(this.$route.path.includes('other')){
                getCategory(1,0).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                })   
                this.$router.push('/singerClass/other/male')
            }else{
                getCategory(1,7).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                })   
                this.$router.push('/singerClass/translate/male')
            }
        },
        gotoFemale(){
            console.log(22)
            if(this.$route.path.includes('translate')){
                getCategory(2,7).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                }) 
                this.$router.push('/singerClass/translate/female')
            }else if(this.$route.path.includes('europe')){
                getCategory(2,96).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                }) 
                this.$router.push('/singerClass/europe/female')
            }else if(this.$route.path.includes('japan')){
                getCategory(2,8).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                })
                this.$router.push('/singerClass/japan/female')
            }else if(this.$route.path.includes('korea')){
                getCategory(2,16).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                })
                this.$router.push('/singerClass/korea/female')
            }else if(this.$route.path.includes('other')){
                getCategory(2,0).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                })
                this.$router.push('/singerClass/other/female')
            }else{
                getCategory(2,7).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                })
                this.$router.push('/singerClass/translate/female')
            }
        },
        gotoOthers(){
            console.log(33)
            if(this.$route.path.includes('translate')){
                getCategory(3,7).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                }) 
                this.$router.push('/singerClass/translate/others')
            }else if(this.$route.path.includes('europe')){
                getCategory(3,96).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                }) 
                this.$router.push('/singerClass/europe/others')
            }else if(this.$route.path.includes('japan')){
                getCategory(3,8).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                }) 
                this.$router.push('/singerClass/japan/others')
            }else if(this.$route.path.includes('korea')){
                getCategory(3,16).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                }) 
                this.$router.push('/singerClass/korea/others')
            }else if(this.$route.path.includes('other')){
                getCategory(3,0).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                }) 
                this.$router.push('/singerClass/other/others')
            }else{
                getCategory(3,7).then(res=>{
                    this.data = res.data.artists
                    this.$store.commit('singerItem',this.data)
                }) 
                this.$router.push('/singerClass/translate/others')
            }
        },
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