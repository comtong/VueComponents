<template>
  <div class="tui-flex-item" :style="style" :class="classs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    // 放大比例
    flexGrow: {
      type: Number,
      defalut: 0
    },
    // 缩小比例
    flexShrink: {
      type: Number,
      defalut: 1
    },
    // 占主轴空间
    flexBasis: {
      type: Number,
      defalut: 1
    },
    order: [Number, String]
  },
  data() {
    return {};
  },
  computed: {
    style() {
      let styles = {
        "flex-grow": this.flexGrow,
        "flex-shrink": this.flexShrink,
        "flex-basis": this.flexBasis,
        "--margin": `${this.$parent.gutter}px` // 动态设置变量
      };
      if (typeof this.order !== "undefined") {
        styles.order = this.order;
      }
      return styles;
    },
    classs() {
      if (this.$parent.direction === "column") {
        return "tui-flex-item_column";
      } else {
        return "tui-flex-item_row";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.tui-flex-item_row:nth-child(n + 2) {
  margin-left: var(--margin);
}
.tui-flex-item_column:nth-child(n + 2) {
  margin-top: var(--margin);
}
</style>
