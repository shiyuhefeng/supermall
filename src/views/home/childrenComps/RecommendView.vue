<template>
  <div class="recommend">
    <div class="recommenditem" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  // methods: {
  //   btnClick() {
  //     console.log(this.recommends);
  //   }
  // }
}
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  padding: 10px 0 20px;

  border-bottom: 5px solid #eee;
}
.recommenditem {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.recommenditem img {
  width: 80%;
  margin-bottom: 10px;
}
</style>