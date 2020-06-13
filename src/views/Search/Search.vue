<template>
    <div>
        <div class="topBar">
            <div class="barBack" @click="goBack">
                <img src="~assets/img/common/back.svg">
            </div>
            <div class="text">
                <input type="text" placeholder="我相信 最近很火哦"> 
            </div>
            <div class="singer" @click="goSinger">
                <img src="~assets/img/common/singer.svg">
            </div>
        </div>

        <div class="searchItem">
            <ul class="box">
                <li v-for="(attr,index) of list" :key="index" class="liItem" @click="choose(attr.id,index)">
                    <div class='box_num'>
                        <p>{{index+1}}</p>
                    </div>
                    <div class="box_name">
                        <div class="name_top" style="width=100px">
                            <p>{{attr.searchWord}}</p>
                            <div v-if="attr.iconUrl" class="top_bottom">
                                <img :src="attr.iconUrl" />
                            </div>
                        </div>
                        <div class="name_bottom">
                            <p>{{attr.content}}</p>
                        </div>
                    </div>
                    <div class="score">
                        <p class="scores">{{attr.score}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getHotDetail,getSing} from 'network/search'
import {getSongsUrl} from 'network/rankItem'
export default {
    name: 'Search',
    data(){
        return {
            list: [],
            music: [],
            url: []
        }
    },
    created(){
        getHotDetail().then(res=>{
            console.log(res)
            res.data.data.forEach((item,index)=>{
                this.list.push(item)
            })
        })
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        goSinger(){
            this.$router.push('singerClass')
        },
        // choose(id,index){
        //     getSing(this.list[index].searchWord).then(res=>{
        //         this.music = res.data.result.songs
        //         this.$store.commit('addSheet',this.music)

        //         this.getUrl()

                
                
        //         setTimeout(()=>{
        //             this.$store.dispatch('AddMusic',{url:this.url[index],songItem:this.music[index],index:index}).then(res=>{
        //                 console.log(res)
        //             })
                    
        //         },800)

        //         // 底部显示播放控件
        //         this.$store.commit('isShow')
        //         // 改变暂停和播放图标
        //         if(!this.$store.state.Pause){
        //             this.$store.commit('isPause')
        //         }
        //     }) 
        // },
        // getUrl(){
        //     this.music.forEach((item,index)=>{
        //         getSongsUrl(item.id).then(res=>{
        //             this.url.push(res.data.data[0].url)
        //         })
        //     })
        // }
    }
}
</script>

<style scoped>
.topBar{
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    height: 43px;
    line-height: 43px;
    z-index: 9;
    text-align: center;
}
.barBack{
    flex: 1;
    background-color: #fff;
}
.barBack img{
    width: 20px;
    margin-top: 11px;
}
.text{
    flex: 1;
}
.text input{
    width: 230px;
    border: 0px #000;
    border-bottom: 2px solid #000;
}
.singer{
    flex:1;
    background-color: #fff;
}
.singer img{
    width: 20px;
    margin-top: 11px;
}


.box{
    margin-top: 25px;
    display: block;
}
.liItem{
    margin-top: 10px;
    display: flex;
}
.box_num{
    color: #D6D8D6;
    font-size: 12px;
    margin-left: 12px;
    margin-right: 12px;
    width: 15px;
    text-align: center;
    margin-top: 5px;
}
.name_top{
    width: 100%;
    font-size: 12px;  
    /* display: flex; */
}
.name_top p{
    display: inline; 
}
.top_bottom{
    display: inline;
}
.top_bottom img{
    height: 15px;
    margin-left: 20px;
}
.name_bottom{
    font-size: 9px;
    font-weight: normal;
    margin-top: 6px;
    
}
li:nth-child(-n+3) .box_num{
    color: #F7A5A6 
}
li:nth-child(-n+3) .box_name{
    color: #000;
    font-weight: 800;
}

.score{
   text-align: right;
   flex: 1;
   margin-right: 10px;
   font-size: 10px;
   font-weight: normal;
}
</style>