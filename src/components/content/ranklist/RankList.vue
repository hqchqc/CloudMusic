<template>
    <div id="rankCommend">
        <div class="title">
            <slot name="font">
                <p>推荐榜</p>
            </slot>
        </div>
        <div class="list">
            <rank-list-item v-for="(attr,index) in listItem" :key="index" :list = 'attr' @click.native="rankClick(index)"/>
        </div>
    </div>
</template>

<script>
import RankListItem from './RankListItem'
export default {
    name: 'RankList',
    components:{
        RankListItem
    },
    data(){
        return{
            idxRecommend: [23,24,4,26,27,22],
            idxWorld: [28,25,29,30,5,6],
            idxMore: [21,7,8,10,9,20,31,32,19,0,1,2]
        }
    },
    props:{
        listItem:{
            type: Array,
            default(){
                return []
            }
        }
    },
    methods:{
        rankClick(index){
            // 加延迟是因为修改state的值需要一点时间
            setTimeout(()=>{
                if(this.$store.state.rank == 'recommend'){
                    this.$router.push('/rank/' + this.idxRecommend[index])
                }else if(this.$store.state.rank == 'world'){
                    this.$router.push('/rank/' + this.idxWorld[index])
                }else if(this.$store.state.rank == 'more'){
                    this.$router.push('/rank/' + this.idxMore[index])
                }else{
                    this.$router.push('/rank/')
                }
            })
        }
    }
}
</script>

<style scoped>
    #rankCommend{
        margin-left: 10px;
        margin-top: 20px;
        font-size: 12px;
        overflow: hidden;
    }
    .title{
        font-size: 14px;
        font-weight: bold;
    }
    .list{
        margin: 0px;
        padding: 0px;
    }
</style>