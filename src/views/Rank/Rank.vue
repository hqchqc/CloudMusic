<template>
    <div id='rank'>
        <rank-nav-bar/>
        <rank-official :rankOfficial="rankOfficial"/>
        <rank-List :listItem="rankCommend"><p slot="font">推荐榜</p></rank-List>
        <rank-List :listItem="rankWorld"><p slot="font">全球榜</p></rank-List>
        <rank-List :listItem="rankMore"><p slot="font">更多榜单</p></rank-List>
    </div>
</template>

<script>
import RankNavBar from './childRanks/RankNavBar'
import RankOfficial from './childRanks/RankOfficial'

import RankList from 'components/content/ranklist/RankList'

import {getRank,Official,Recommend,World,More} from 'network/rank'
export default {
    name: 'Rank',
    components:{
        RankNavBar,
        RankOfficial,
        RankList
    },
    data(){
        return {
            id: null,
            rankOfficial: [],
            rankCommend: [],
            rankWorld: [],
            rankMore: []
        }
    },
    created(){
        getRank().then(res=>{
            // 官方榜
            var RankOfficial = new Official(res.data.list)
            this.rankOfficial = RankOfficial.total
            // 推荐榜
            var RankCommend = new Recommend(res.data.list)
            this.rankCommend = RankCommend.total
            // 全球榜
            var RankWorld = new World(res.data.list)
            this.rankWorld = RankWorld.total
            // 更多榜单
            var RankMore = new More(res.data)
            this.rankMore = RankMore.total
        })

    }
}
</script>

<style scoped>
    
</style>