<template>
    <div id="album">
        <div class="myAlbum">
            <div class="album-number">
                <img src="~assets/img/profile/album.svg">
                <div class="number">
                    <p>我的数字专辑</p>
                </div>
            </div>
        </div>
        <div class="myCollected">
            <div class="collectAlbum">
                <p>收藏的专辑 ({{myAlbum.length}})</p>
            </div>
            <div class="content">
                <div class="box">
                    <div v-for="(attr,index) in myAlbum" :key="index" class="img">
                        <img v-lazy="attr.imgUrl">
                        <div class="detail">
                            <span>{{attr.name}}</span><br/>
                            <span class="singer">{{attr.singer}}</span>
                            <span class="size">{{attr.size}}首</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import {getCollectAlbum} from 'network/collect'
import {status,logout} from 'network/login.js'
export default {
    name: 'Album',
    data(){
        return{
            myAlbum: []
        }
    },
    created(){
        getCollectAlbum().then(res=>{
            let data = res.data.data
            if(data.length !== 0){
                for(let i=0; i<data.length; i++){
                    let obj = {
                        imgUrl: data[i].picUrl,
                        name: data[i].name,
                        size: data[i].size,
                        singer: data[i].artists[0].name
                    }
                    this.myAlbum.push(obj)
                }
            }
        })
    }
}
</script>

<style scoped>
    .album-number{
        margin-left: 10px;
        margin-top: 5px;
        display: flex;
    }
    .album-number img{
        width: 40px;
    }
    .number{
        font-size: 13px;
        font-weight: 800;
        margin-left: 10px;
    }
    .number p{
        line-height: 40px;
    }
    .myCollected{
        margin-top: 5px;
        font-size: 13px;
        font-weight: 800;
        color: #000;
        border-top: 6px solid #F5F5F5;
    }
    .collectAlbum{
        margin-left: 10px;
        margin-top: 10px;
    }
    .box{
        margin-top: 10px;
        margin-left: 10px;
    }
    .img{
        display: flex;
    }
    .img img{
        width: 45px;
    }
    .detail{
        margin-left: 10px;
        font-size: 14px;
        font-weight:600;
        margin: auto 10px;
    }
    .singer{
        display: inline-block;
        font-weight: normal;
        font-size: 12px;
    }
    .size{
        font-weight: normal;
        font-size: 12px;
        margin-left: 3px;
    }
</style>