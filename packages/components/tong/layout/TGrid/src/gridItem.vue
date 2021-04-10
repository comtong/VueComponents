<template>
  <div class="tui-grid-item" :style="itemStyle">
    <div class="tui-grid-item_icon" v-if="hasIconSlot || icon">
      <slot name="icon">
        <img :src="icon" alt="" />
      </slot>
    </div>
    <p v-if="hasLabelSlot || label" class="tui-grid-item_babel">
      <slot name="label">
        <span v-html="label"></span>
      </slot>
    </p>
  </div>
</template>
<script>
const defaultCol = 4; // 默认行数
export default {
  name: "t-grid-item",
  props: {
    label: String,
    icon: String,
    height: String
  },
  data() {
    return {
      index: 0,
      hasIconSlot: false, // 是否展示Icon
      hasLabelSlot: false // 是否展示label
    };
  },
  created() {
    this.$parent.countColumn();
  },
  mounted() {
    this.$slots.icon && (this.hasIconSlot = true);
    this.$slots.label && (this.hasLabelSlot = true);
  },
  computed: {
    itemStyle() {
      const styles = {};
      // 判断是否展示分割线
      if (this.$parent.showDivider) {
        if (this.$parent.gutter) {
          styles.border = "0.5px solid #eeeeee";
        } else {
          styles.borderRight = "0.5px solid #eeeeee";
          styles.borderBottom = "0.5px solid #eeeeee";
        }
      }
      // 判断宽度
      let column = this.$parent.column;
      if (!column) {
        column = defaultCol;
      }
      if (this.$parent.gutter) {
        let percentGutter = ((column - 1) / column) * this.$parent.gutter;
        // 注意calc-中间的空格不能少，否则不起作用
        styles.width = `calc(${100 / column}% - ${percentGutter}px)`;
        // styles.flexBasis = `calc(${100 / column}% - ${percentGutter})`;
      } else {
        styles.width = `${100 / column}%`;
        // styles.flexBasis = `${100 / column}%`;
      }
      // 设置间距  每行的第一个不设左间距，第二行开始设置上间距
      if (this.index % column !== 0) {
        styles.marginLeft = `${this.$parent.gutter}px`;
      }
      if (this.index >= column) {
        styles.marginTop = `${this.$parent.gutter}px`;
      }
      // 设置高度 如果高度存在，那么就设置
      if (this.height) {
        styles.height = this.height;
      }
      return styles;
    }
  }
};
</script>
<style lang="less" scoped>
.tui-grid-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: auto;
  .tui-grid-item_icon {
    width: 24px;
  }
  .tui-grid-item_babel {
    font-size: 12px;
    color: #383838;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
