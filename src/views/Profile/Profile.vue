<template>
    <div id="profile">
        <profile-top/>
        <div class="content">
            <div class="myMusic">
                <p>我的音乐</p>
            </div>
       
            <div class="box">
                <div class="box-content">
                    <div class="box-item" v-for="(attr,index) in 6" :key="index">
                        <p>推荐</p>
                        <img src="../../assets/img/profile/love.svg">
                        <p>我喜欢的音乐</p>
                        <p>心动模式</p>
                    </div>
                    <!-- <div class="box-item">
                        <img src="../../assets/img/profile/fm.svg">
                        <p>私人FM</p>
                    </div>
                    <div class="box-item">
                        <img src="../../assets/img/profile/js.svg">
                        <p>爵士电台</p>
                    </div>
                    <div class="box-item">
                        <img src="../../assets/img/profile/car.svg">
                        <p>驾驶模式</p>
                    </div>
                    <div class="box-item">
                        <img src="../../assets/img/profile/book.svg">
                        <p>云村正能量</p>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfileTop from './childProfiles/profileTop'
export default {
    name: 'Profile',
    components:{
        ProfileTop
    }
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


    }
    .box-item img{
        width: 20px;  

        margin-top: 50%;     
    }
    .box-item p{
        margin-top: 5px;
        width: 80px;
    }
</style>