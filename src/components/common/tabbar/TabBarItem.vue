<template>
  <div class="tab-bar-item" @click="btnClick">
    <div :style="activeStyle">
      <slot name="item-icon"></slot>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: false
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    btnClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item div {
  margin: 5px;
  justify-content: center;
}
.tab-bar-item div span {
  font-size: 20px;
}
.tab-bar-item div div {
  font-size: 12px;
}
</style>