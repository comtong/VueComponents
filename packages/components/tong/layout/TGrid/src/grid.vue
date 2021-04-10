<template>
  <div class="tui-grid">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "t-grid",
  props: {
    showDivider: {
      type: Boolean,
      default: true
    },
    col: Number,
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    countColumn() {
      this.$children.forEach((c, index) => (c.index = index));
    }
  }
};
</script>
<style lang="less" scoped>
.tui-grid {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: white;
  width: 100%;
}
</style>
