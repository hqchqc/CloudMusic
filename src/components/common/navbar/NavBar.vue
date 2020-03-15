<template>
    <div id="navbar">
        <div class='left'>
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NavBar',
}
</script>

<style scoped>
    #navbar{
        height: 43px;
        line-height: 43px;
        display: flex;
        text-align: center;
        background-color: #fff;
    }
    .left,.right{
        width: 55px;
    }
    .center{
        flex: 1;     
    }
</style>