<template>
    <div>
        <p>我是云村</p>
    </div>
</template>

<script>
export default {
    name: 'CloudVillage',
    created(){
       this.$toast.show('Sorry，该功能暂不支持，期待后续更新嗷' + '(●"◡"●)')
    }
}
</script>

<style scoped>

</style>