<template>
  
</template>

<script>
import {getCategory} from 'network/singerClass'
import ClassList from 'components/content/classList/ClassList'
export default {
    name: 'Translate',
    data(){
      return{
        data: []
      }
    },
    components:{
      ClassList
    },
    created(){
      getCategory(1,7).then(res=>{
        this.data = res.data.artists
        // this.$bus.$emit('itemListLoad',this.data)
        this.$store.commit('singerItem',this.data)
      })      
    }
}
</script>

<style scoped>

</style>