<template>
  <div id="app">
    <!-- <home></home> -->
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar.vue";
export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
