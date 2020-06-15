<template>
  
</template>

<script>
import {getCategory} from 'network/singerClass'
import ClassList from 'components/content/classList/ClassList'
export default {
    name: 'Europe',
    data(){
      return{
        data: []
      }
    },
    components:{
      ClassList
    },
    created(){
      console.log(this.$route)
      getCategory(1,96).then(res=>{
        this.data = res.data.artists
        // this.$bus.$emit('itemListLoad',this.data)
        this.$store.commit('singerItem',this.data)
      })      
    }
}
</script>

<style scoped>

</style>