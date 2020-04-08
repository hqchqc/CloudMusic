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
                <p>收藏的专辑</p>
            </div>
        </div>
    </div>
</template>

<script>
// import {getCollectAlbum} from 'network/collect'
import {status,logout} from 'network/login.js'
export default {
    name: 'Album',
    created(){
        getCollectAlbum().then(res=>{
            console.log(res)
        })
        // status().then(res=>{
        //     console.log(res)
        // })
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
</style>