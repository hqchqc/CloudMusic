<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
    padding: 0px 10px;
  }

  .slide img {
    width: 100%;
    border: 0px solid #000;
    border-radius: 5px;
  }
</style>
