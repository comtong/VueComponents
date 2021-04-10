<template>
  <i :class="[className]" :style="style"></i>
</template>
<script>
// const types = [
//   "down",
//   "up",
//   "back",
//   "loading",
//   "close",
//   "radioCheck",
//   "radioUncheck"
// ];
export default {
  name: "t-icon",
  props: {
    type: {
      type: String,
      default: "Loading"
    },
    size: {
      type: String,
      default: "1em"
    }
  },
  data() {
    return {};
  },
  computed: {
    className() {
      return `tui-icon_${this.type}`;
    },
    style() {
      return {
        width: this.size,
        height: this.size
      };
    }
  }
};
</script>
<style lang="less" scoped>
@import "~styles/tui/widget/icon.less";
</style>
