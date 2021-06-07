<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/Swiper.js'
export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    btnClick() {
      console.log(this.banners);
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
</style>