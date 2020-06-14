<template>
  <div>
    <p>这是Translate</p>
    <h2>dsa </h2>
  </div>
  
</template>

<script>
import {getCategory} from 'network/singerClass'
export default {
    name: 'Translate',
    created(){
      getCategory(1,7).then(res=>{
        console.log(res)
      })      
    }
}
</script>

<style scoped>

</style>