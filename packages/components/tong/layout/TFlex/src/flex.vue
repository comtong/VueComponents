<template>
  <div class="tui-flex" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justifyContent: String,
    alignItems: String,
    direction: String
  },
  data() {
    return {};
  },
  computed: {
    styles() {
      const styles = {
        "justify-content": this.justifyContent, // 主轴对齐方式
        "-webkit-justify-content": this.justifyContent, // 主轴对齐方式
        "align-items": this.alignItems, // 交叉轴上的对齐方式
        "-webkit-align-items": this.alignItems, // 交叉轴上的对齐方式
        "-webkit-flex-wrap": this.flexWrap, // 是否需要换行
        "flex-direction": this.direction, // 主轴方向
        "-webkit-flex-direction": this.direction // 主轴方向
      };
      return styles;
    }
  }
};
</script>
<style lang="less" scoped>
@import "~styles/tui/widget/flex.less";
</style>
