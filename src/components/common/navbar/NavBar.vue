<template>
  <div class="nav_bar">
    <div class="left" :style="homeColor">
      <slot name="left"></slot>
    </div>
    <div class="center" :style="homeColor">
      <slot name="center"></slot>
    </div>
    <div class="right" :style="homeColor">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  props: {
    childrenColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    homeColor() {
      return { backgroundColor: this.childrenColor };
    },
  },
};
</script>

<style>
.nav_bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.3);
}
.left .right {
  width: 60px;
}
.center {
  flex: 1;
  color: #fff;
}
</style>