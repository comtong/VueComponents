<template>
  <div>
    <div :class="['tui-cell', line ? 'tui-cell_line' : '']">
      <div class="tui-cell_title" v-if="label">{{ label }}</div>
      <slot>
        <div class="tui-cell_content">{{ value }}</div>
      </slot>
      <div @click="onClickLink" v-if="isLink" class="tui-cell-icon">
        <cmb-icon type="right"></cmb-icon>
      </div>
    </div>
  </div>
</template>
<script>
import TIcon from "../../../base/TIcon";
export default {
  components: {
    TIcon
  },
  name: "cmb-cell",
  props: {
    label: {
      type: String,
      default: "",
      validator(val) {
        /* istanbul ignore if */
        if (val && val.length > 6) {
          return console.error("[CUI] TCell label最多6个文字");
        }
        return true;
      }
    },
    value: String,
    line: {
      type: Boolean, // 是否有分割线(多行才起作用)
      default: true
    },
    isLink: {
      type: Boolean, // 是否需要右边的小箭头
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    onClickLink() {
      this.$emit("onClickLink");
    }
  }
};
</script>
<style lang="less" scoped>
@import "~styles/tui/widget/cell.less";
</style>
