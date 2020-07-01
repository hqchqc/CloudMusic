<template>
    <div class="created">
        <div class="coverImg">
            <div v-for="(attr,index) in userBox" :key="index" class="detail">
                <div class="content">
                    <img :src="attr.listPic">
                    <div class="con-left"> 
                        <p class="left-top">{{attr.listName}}</p>
                        <p class="left-bottom">{{attr.listCount}}首</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getCreate} from 'network/userAbout'
export default {
    name: 'Create',
    data(){
        return{
            userBox: [],
            userContent: [],
            createInfo: {},
            collectInfo: {}
        }
    },
    mounted(){
        if(Object.keys(this.$store.state.userInfo).length != 0){
            let test = this.$store.state.userInfo
            getCreate(test.userId).then(res=>{
                var detail = res.data.playlist
                var userName = this.$store.state.userInfo.userName
                for(var i=1; i<detail.length; i++){
                    if(detail[i].creator.nickname == userName){
                        this.createInfo = {listId:detail[i].id,listName:detail[i].name,listPic:detail[i].coverImgUrl,
                                            listCount:detail[i].trackCount}
                        this.userBox.push(this.createInfo)  
                    }else if(detail[i].creator.nickname !== userName){
                        this.collectInfo = {listId:detail[i].id,listName:detail[i].name,listPic:detail[i].coverImgUrl,
                                            listCount:detail[i].trackCount}
                        this.userContent.push(this.collectInfo)
                    }
                }
                this.$store.commit('createInfo',this.userBox)
                this.$store.commit('collectedInfo',this.userContent)
            })
        }
        
    }
}
</script>

<style scoped>
    .created{
        width: 100%;
    }
    .coverImg{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap
    }
    .coverImg img{
        width: 45px;
        border: 0px solid #ccc;
        border-radius: 5px;
    }
    .detail{
        width: 50%;
        margin-top: 10px;
    }
    .con-left{
        display: inline-block;
        margin-left: 5px;
    }
    .left-top{
        font-size: 5px;
        color: #000;
        margin-bottom: 20px;
        width: 120px;
    }
    .left-bottom{
        font-size: 10px;
    }
</style>