<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="cornflowerblue">
      <template v-slot:item-icon>
        <span class="iconfont icon-V"></span>
      </template>
      <template v-slot:item-text>
        <div slot="item-text">首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="cornflowerblue">
      <template v-slot:item-icon>
        <span
          slot="item-icon"
          class="iconfont icon-leimupinleifenleileibie2"
        ></span>
      </template>
      <template v-slot:item-text>
        <div slot="item-text">分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="cornflowerblue">
      <template v-slot:item-icon>
        <span slot="item-icon" class="iconfont icon-gouwuche"></span>
      </template>
      <template v-slot:item-text>
        <div slot="item-text">购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="cornflowerblue">
      <template v-slot:item-icon>
        <span slot="item-icon" class="iconfont icon-wodedangxuan"></span>
      </template>
      <template v-slot:item-text>
        <div slot="item-text">我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../common/tabbar/TabBar.vue";
import TabBarItem from "../common/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "../../assets/css/font-size.css";
</style>