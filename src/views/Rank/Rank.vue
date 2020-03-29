<template>
    <div id='rank'>
        <rank-nav-bar/>
        <rank-official :rankOfficial="rankOfficial"/>
        <rank-List :listItem="rankCommend" @click.native="recommend"><p slot="font">推荐榜</p></rank-List>
        <rank-List :listItem="rankWorld" @click.native="world"><p slot="font">全球榜</p></rank-List>
        <rank-List :listItem="rankMore" @click.native="more" :class="{active: $store.state.show}"><p slot="font">更多榜单</p></rank-List>
    </div>
</template>

<script>
import RankNavBar from './childRanks/RankNavBar'
import RankOfficial from './childRanks/RankOfficial'

import RankList from 'components/content/ranklist/RankList'

import {getRank,Official,Recommend,World,More} from 'network/rank'

import {recommendClick,worldClick,moreClick} from 'vuex'
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
    methods:{
        recommend(){
            this.$store.commit('recommendClick')
        },
        world(){
            this.$store.commit('worldClick')
        },
        more(){
            this.$store.commit('moreClick')
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