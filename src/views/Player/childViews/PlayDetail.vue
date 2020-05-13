<template>
    <div id="detail" >
        <div class="bg">
            <div class="nav">
                <title-bar-left/>
                <div class="font">
                    {{$store.state.music.songItem.songName}}({{$store.state.music.songItem.alia}}) <br/>
                    {{$store.state.music.songItem.singerName}}
                </div>
            </div>
        </div>
        <div class="blur" :style="{backgroundImage: this.getUrl,backgroundSize:this.getSize}" ></div>
        <div class="main">
            <div class="gan" :style="{transform:this.transform}">
                <img src='~assets/img/play/styli.png'>
            </div>
            <div class="disk" :style="{transform:this.diskRoute}"> 
                <img src="~assets/img/play/disk.png">
            </div>
            <div class="imgShow">
                <img :src="this.$store.state.music.songItem.picUrl">
            </div>
        </div>
    </div>
</template>

<script>
import TitleBarLeft from 'components/content/titlebar/TitleBarLeft'
export default {
    name: 'PlayDetail',
    components:{
        TitleBarLeft
    },
    computed:{
        getUrl(){
            return 'url('+this.$store.state.music.songItem.picUrl+')'
        },
        getSize(){
            return '100%'
        },
        transform(){
            if(this.$store.state.Pause == true){
                return 'rotate(15deg)'
            }
        },
        diskRoute(){
            if(this.$store.state.Pause == true){

            }
        }
    },
}
</script>

<style scoped>
#detail{
    position: absolute;
    top: -2px;
    width: 100%;
    height: 100%;
}
.nav{
    display: flex;
}
.font{
    margin-top: 2px;
    line-height: 20px;
    z-index: 99;
    width: 100%;
    font-size: 13px;
    color: black;
}
.blur{
    width: 100%;
    height: 100%;
    filter: blur(20px);
    position: relative;
    top: -43px;
}
.main{
    position:absolute;
    top: -30px;
    left: 22%;

}
.gan{
    position: absolute;
    z-index: 1;
}
.gan img{
    width: 200px;
    transform: rotate(-25deg);
}
@keyframes diskRoute {
    0%{
        transform:rotate(0deg);
    } 
	50%{
        transform:rotate(180deg);
    }
	100%{
        transform:rotate(360deg);
    }
}
.disk{
    margin-top: 65%;

}
.disk img{
    width: 200px;
    animation: diskRoute 8s linear infinite;

}
.imgShow{
    margin-top: -170px;
    margin-left: 35px;
    
}
.imgShow img{
    width:130px;
    border: 0px solid #fff;
    border-radius: 65px;
    animation: diskRoute 6s linear infinite;
}
</style>