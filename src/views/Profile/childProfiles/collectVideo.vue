<template>
  <div id="Video">
      <div class="box">
          <div class="content">
              <ul>
                <li v-for="(attr,index) in video" :key="index">
                    <img :src="attr.coverUrl">
                    <div class="font">
                        <span>{{attr.title}}</span><br/>
                        <span class="mark">{{attr.markTypes}} by</span>
                        <span class="creator">{{attr.creator}}</span>
                    </div>
                </li>
            </ul>
          </div>
          
      </div>
  </div>
</template>

<script>
import {getCollectMv} from 'network/collect'
import {setTime} from 'common/utils'
export default {
    name: 'CollectVideo',
    data(){
        return{
            video: []
        }
    },
    created(){
        getCollectMv().then(res=>{
            let data = res.data.data
            for(let i=0 ;i<data.length; i++){
                let obj = {
                    title: data[i].title,
                    coverUrl: data[i].coverUrl,
                    markTypes: setTime(data[i].markTypes[0]),
                    creator: data[i].creator[0].userName
                }
                this.video.push(obj)
            }
            console.log(this.video)
        })
    }
}
</script>

<style scoped>
    .content{
        margin-left: 10px;
        margin-top: 5px;
    }
    .content li{
        display: flex;
        padding-right: 20px;
    }
    li img{
        width: 100px;
    }
    .font{
        font-size: 14px;
        font-weight:600;
        margin: auto 10px;
    }
    .mark{
        font-weight: normal;
        font-size: 12px;
    }
    .creator{
        font-weight: normal;
        font-size: 12px;
        margin-left: 3px;
    }
</style>