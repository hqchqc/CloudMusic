<template>
    <nav-bar>
      <div slot="left" class="left">
        <img src="~assets/img/navbar/menu.svg" />
      </div>
      <div slot="center" class="center">
        <div class="center_item" v-for="(attr,index) in navbar_center" :key="attr" @click="itemClick(index)"
          :class="{chooseItem:index===isChoose}">{{attr}}</div>
      </div>
      <div slot="right">
        <img src="~assets/img/navbar/search.svg" />
      </div>
    </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "MainTabBar",
  components: {
    NavBar
  },
  data() {
    return {
      navbar_center: ["我的", "发现", "云村", "视频"],
      path:['/profile','/find','/cloud_village','/video'],
      isChoose: 1
    };
  },
  methods: {
    itemClick(index) {
      console.log(index);
      this.isChoose = index;
      this.$router.push(this.path[index])
    }
  }
};
</script>

<style scoped>
.center {
  display: flex;
  padding: 0px 40px;
}
.center_item {
  flex: 1;
}
.right img {
  width: 16px;
  height: 16px;
  margin-top: 13px;
}
.left img {
  width: 16px;
  height: 16px;
  margin-top: 13px;
}
.chooseItem {
  font-size: 18px;
  color: black;
}
</style>