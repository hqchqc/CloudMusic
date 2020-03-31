<template>
    <div class="content">
        <div class="myMusic">
            <p>我的音乐</p>
        </div>
    
        <div class="box">
            <div class="box-content">
                <div class="box-item" v-for="(attr,index) in detail" :key="index">
                    <p class="recommend">推荐</p>
                    <img :src="attr.pic">
                    <p class="detail">{{attr.detail}}</p>
                    <p class="model">{{attr.model}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyMusic',
    data(){
        return{
            detail:[
                {pic: require('assets/img/profile/love.svg'),model: '心动模式',detail:'我喜欢的音乐'},
                {pic: require('assets/img/profile/fm.svg'),model: '私人FM',detail:'你的私人曲库'},
                {pic: require('assets/img/profile/js.svg'),model: '爵士电台',detail: '最in爵士乐'},
                {pic: require('assets/img/profile/car.svg'),model: '驾驶模式',detail: '开车也能安全听音乐'},
                {pic: require('assets/img/profile/book.svg'),model: '云村正能量',detail: '聆听那些经典歌曲'},
            ]
        }  
    },
}
</script>

<style scoped>
    .content{
        width: 100%;
        position: absolute;
        background-color: #fff;
        top: 150px;
        border: 0px solid #ddd;
        border-radius: 15px 15px 0px 0px;
        z-index: 2;
    }
    .myMusic{
        font-size: 12px;
        font-weight: 800;
        margin-top: 10px;
        margin-left: 15px;
    }
    .box{
        margin-top: 10px;
        font-size: 10px;
        font-weight: 600;
    }
    .box-content{
        display: flex;
        overflow: scroll;
        padding-left: 15px;
    }
    .box-item{
        background-color: #E5E5E6;
        margin-right: 5px;
        text-align: center;
        height: 150px;
        border-radius: 5px;
        flex: 1;
    }
    .box-item p{
        width: 110px;
    }
    .recommend{
       font-size: 6px;
       color:darkgray;
       margin-top: 5px;
       font-weight: 800;
    }
    .box-item img{
        width: 20px;
        margin-top: 30%;  
        margin-bottom: 5px;
    }
    .model{
        margin-top: 45%;
        font-size: 6px;
        color:darkgray;
    }
    .box-item:nth-child(5){
        border-right: 5px solid #fff;
    }
</style>