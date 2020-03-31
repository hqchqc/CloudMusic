<template>
    <div class="myInfo">
        <div class="songlist">
            <router-link to='/profile/create' class="created" active-class="active">创建歌单
                <span style="font-size:5px" v-if="$store.state.userInfo">{{$store.state.createInfo.length}}</span>
            </router-link>
            <router-link to='/profile/collected' class="created" active-class="active">收藏歌单
                <span style="font-size:5px" >{{this.$store.state.collectInfo.length}}</span>
            </router-link>
            <!-- <keep-alive exclude="collected"> -->
                <router-view/>
            <!-- </keep-alive> -->
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyInfo',
}
</script>

<style scoped>
    .myInfo{
        position: absolute;
        margin-top: 150px;
        width: 100%;
    }
    .songlist{
        margin-left: 15px;
    }
    .created{
        margin-right: 15px;
        font-size: 12px;
        color: darkgray;
        width: 60px;
        flex: 1;
    }
    .active{
        font-weight: bolder;
        color: #666;
    }
</style>