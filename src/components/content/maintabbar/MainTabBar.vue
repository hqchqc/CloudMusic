<template>
    <nav-bar v-show="$store.state.mainShow">
      <div slot="left" class="left">
        <img v-if="isChoose!==0" src="~assets/img/find/navbar/menu.svg"/>
        <img v-else src="~assets/img/common/_menu_white.svg"/>
      </div>
      <div slot="center" class="center">
        <div class="center_item" v-for="(attr,index) in navbar_center" :key="attr" @click="itemClick(index)"
          :class="{chooseItem:index===isChoose,profile:isChoose===0}">{{attr}}</div>
      </div>
      <div slot="right">
        <img v-if="isChoose!==0" src="~assets/img/find/navbar/search.svg" @click="search"/>
        <img v-else src="~assets/img/common/search_white.svg"/>
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
      if(index == 2){
        this.$toast.show('Sorry，该功能暂不支持，期待后续更新嗷' + '(●"◡"●)')
      }else{
        this.isChoose = index;
        this.$router.push(this.path[index])
      }
    },
    search(){
      this.$router.push('search')
    }
  }
};
</script>

<style scoped>
.center {
  display: flex;
  padding: 0px 30px;
  font-size: 12px;
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
  font-size: 15px;
  color: black;
}
.profile{
  color: #fff;
}
</style>