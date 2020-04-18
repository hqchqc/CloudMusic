<template>
    <div id="singer">
        <div class="box">
            <ul class="box-item">
                <li v-for="(attr,index) in mySinger" :key="index" style='display:flex'>
                    <img :src="attr.picUrl">
                    
                    <div class="detail">
                        <span>{{attr.name}}</span><br/>
                        <span class="albumSize">专辑：{{attr.albumSize}}</span>
                        <span class="mvSize">MV：{{attr.mvSize}}</span>
                    </div>
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getCollectArtist} from 'network/collect'
export default {
    name: 'Singer',
    data(){
        return {
            mySinger: []
        }
    },
    created(){
        getCollectArtist().then(res=>{
            if(res.data.data.length !== 0){
                let data = res.data.data
                for(let i=0; i<data.length; i++){
                    let obj = {
                        picUrl: data[i].picUrl,
                        name: data[i].name,
                        mvSize: data[i].mvSize,
                        albumSize: data[i].albumSize
                    }
                    this.mySinger.push(obj)
                }
                console.log(this.mySinger)
            }
        })
    }
}
</script>

<style scoped>
    .box-item{
        margin-left: 10px;
        margin-top: 5px;
        
    }
    .box-item li{
        margin-top: 5px;
    }
    .box-item li img{
        width: 45px;
        border: 0px solid #fff;
        border-radius: 23px;
        
    }
    .detail{
        font-size: 14px;
        font-weight:600;
        margin: auto 10px;
    }
    .albumSize{
        font-weight: normal;
        font-size: 12px;
    }
    .mvSize{
        margin-left: 5px;
        font-weight: normal;
        font-size: 12px;
    }
</style>