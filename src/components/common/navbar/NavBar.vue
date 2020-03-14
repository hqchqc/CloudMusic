<template>
    <div id="navbar">
        <div class='left'>
            <slot name="left"/>
        </div>
        <div class="center">
            <slot name="center"/>
        </div>
        <div class="right">
            <slot name="right"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    #navbar{
        height: 43px;
        line-height: 43px;
        display: flex;
        text-align: center;
        font-family: '宋体';
        

        background-color: #fff;
    }
    .left,.right{
        width: 55px;
    }
    .center{
        flex: 1;     
    }
</style>