<template>
  <div>
    <nav-bar childrenColor="cornflowerblue">
      <template v-slot:left> </template>
      <template v-slot:center>
        <h3>购物街</h3>
      </template>
      <template v-slot:right> </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "./childrenComps/HomeSwiper.vue"
import RecommendView from "./childrenComps/RecommendView.vue"

import { getHomeMultidata } from "@/network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  },
}
</script>

<style>
</style>