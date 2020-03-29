<template>
    <div id="profile">
        <profile-top/>
        <div class="content">
            <div class="myMusic">
                <p>我的音乐</p>
            </div>
            <div class="box">
                
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
        padding-left: 15px;
    }
    .myMusic{
        font-size: 12px;
        font-weight: 800;
        margin-top: 10px;
    }
</style>