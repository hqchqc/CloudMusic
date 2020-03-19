<template>
    <div class="title-bar">
        <div class="left">
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
    name: 'TitleBar'
}
</script>

<style scoped>
    .title-bar{
        height: 43px;
        line-height: 43px;
        display: flex;
        text-align: center;
    }
    .left .center .right{
        flex: 1;
    }
</style>