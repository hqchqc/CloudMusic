<template>
    <div id='rank'>
        <rank-nav-bar class="rank-nav"/>
        <rank-official :rankdata="rankdata"/>
    </div>
</template>

<script>
import RankNavBar from './childRanks/RankNavBar'
import RankOfficial from './childRanks/RankOfficial'

import {getRank} from 'network/rank'
export default {
    name: 'Rank',
    components:{
        RankNavBar,
        RankOfficial
    },
    data(){
        return {
            rankdata: []
        }
    },
    created(){
        getRank().then(res=>{
            this.rankdata = res.data.list
            console.log(this.rankdata)
        })
    }
}
</script>

<style scoped>
    #rank{
        width: 100%;
    }
    .rank-nav{
        position: relative;
        margin-top: -43px;
        background-color:#fff;
    }
</style>