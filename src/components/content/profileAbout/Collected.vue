<template>
    <div class="created">
        <div class="coverImg">
            <div v-for="(attr,index) in $store.state.collectInfo" :key="index" class="detail">
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
    name: 'Collected',
    data(){
        return{
            userBox: [],
            createInfo: {}
        }
    },
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