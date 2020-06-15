<template>
    <div class="list">
        <ul>
            <li v-for="(item,index) in  $store.state.singerClass" :key="index" class="listItem">
                <img :src="item.picUrl" />
                <span>{{item.name}}</span>
                <div class="head">
                    <img src='~assets/img/singer/head.svg'/>
                </div>
                <div class="follow" @click="followMe">
                    <p>+ 关 注</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'Classlist',
    methods:{
        followMe(){
            console.log('pick me pick me')
        }
    },
    // mounted(){
        // this.$bus.$on('itemListLoad',(data)=>{
        //     console.log(data)
        // })
    // }
}
</script>

<style scoped>
ul li{
    list-style: none;
}
.listItem{
    margin-left: 10px;
    margin-top: 5px;
    font-size: 12px;
    display: flex;
}
.listItem img{
    width: 50px;
    height: 50px;
    border: 0px solid #fff;
    border-radius: 25px;
    margin-top: 5px;
}
.listItem span{
    line-height: 57px;
    margin-left: 10px;
}
.head{
    flex: 1;
}
.head img{
    width: 16px;
    margin-left: 10px;
}
.follow{
    height: 20px;
    width: 60px;
    text-align: center;
    line-height: 20px;
    border-radius: 15px;
    color: red;
    border: 1px solid red;
    margin-right: 10px;
    margin-top: 18px;
}
</style>